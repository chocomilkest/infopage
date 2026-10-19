<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { watch } from 'vue'

import ExplorerFile from './ExplorerFile.vue'
import { type Container } from '../page'

import { marked } from 'marked'
import DOMPurify from 'dompurify'

const state = defineModel<Container>({ required: true })
state.value.width  = 45
state.value.height = 70

const loadError = ref('')

watch(
  () => state.value.blogs?.current,
  (current) => {
    const newWidth = current !== null ? 50 : 45
    state.value.width = newWidth
  },
  { immediate: true }
)

/* bwaaaa async in vue SUCKS */
onMounted(async () => {
  if (state.value.blogs !== null) return

  try {
    await loadBlogs()
  } catch (error) {
    loadError.value = error instanceof Error ? error.message : 'Could not load blogs'
  }
})

async function loadBlogs() {
  const response = await fetch(
    `/blogs/index.json`,
    { cache: 'no-cache' }
  )

  if (!response.ok) throw new Error('couldnt fetch index.json')

  const data = await response.text()

  state.value.blogs = JSON.parse(data)
  console.log(state.value.blogs)
}

async function fetchBlogHtml(filename: string): Promise<string> {
  const response =
    await fetch(`/blogs/${encodeURIComponent(filename)}.md`, {})

  if (!response.ok) throw new Error('couldnt load post')

  const markdown = await response.text()
  const html = DOMPurify.sanitize(await marked.parse(markdown))

  return html
}
</script>

<template>
  <div id="blog-container">
    <div v-if="state.blogs !== null && state.blogs.current !== null">
      <div class="blog-content" tabindex="0" role="region" :aria-label="state.blogs.current.name" v-html="state.blogs.current.htmledMarkdown"/>
    </div>

    <div v-else-if="state.blogs !== null">
      <ExplorerFile
        v-for="(blog) in state.blogs.files"
        :key="blog.file"
        :data="{
          folderName: blog.name,
          is_folder: false,
          on_click: () => {
            fetchBlogHtml(blog.file)
              .then((html) => {
                if (state.blogs !== null) {
                  state.blogs.current = {
                    name: blog.name,
                    htmledMarkdown: html
                  }
                }
              })
              .catch((error) => console.error(error))
          }
        }"
      />
    </div>

    <p v-else-if="loadError">{{ loadError }}</p>
    <p v-else>loading :3</p>
  </div>
</template>

<style scoped>
#blog-container {
  box-sizing: border-box;
  width: 100%;
  max-width: calc(100dvw - 32px);
  padding: 16px;
}

.blog-content {
  color: white;

  width: 100%;
  min-width: 0;
  max-height: calc(v-bind('state.height + "dvh"') - 32px);
  overflow-y: auto;
  overflow-wrap: anywhere;
}

.blog-content :deep(pre) {
  white-space: pre-wrap;
}

.blog-content :deep(img) {
  max-width: 100%;
  height: auto;
}

.blog-content :deep(a) {
  color: inherit;
}

#blog-container > div {
  display: flex;
  flex-direction: row;
  column-gap: 16px;
}

#blog-container > p {
  margin-top: 0px;
  color: white;
  font-size: 16pt;
}
</style>
