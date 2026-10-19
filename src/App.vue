<script setup lang="ts">
import PageExplorer from './components/PageExplorer.vue'
import PageInfo from './components/PageInfo.vue'
import PageProjects from './components/PageProjects.vue'

import PageTitlebar from './components/PageTitlebar.vue'

import { ref } from 'vue'
import { type Container, Page } from './page'
import PageBlog from './components/PageBlog.vue'

const state = ref<Container>({
  currentPage: Page.Explorer,
  width:  50, // in dvw
  height: 50,  // in dvh
  blogs: null
})
</script>

<template>
  <PageTitlebar
    v-model="state"
  />
  <div id="root-container">
    <PageExplorer
      v-model="state"
      v-if="state.currentPage === Page.Explorer"
    />
    <PageInfo
      v-model="state"
      v-if="state.currentPage === Page.Info"
    />
    <PageProjects
      v-model="state"
      v-if="state.currentPage === Page.Projects"
    />
    <PageBlog
      v-model="state"
      v-if="state.currentPage === Page.Blog"
    />
  </div>
</template>

<style scoped>
#root-container {
  /* layout */
  width: v-bind('state.width + "dvw"');
  max-width: calc(100dvw - 32px);
  min-height: v-bind('state.height + "dvh"');

  /* easeOutExpo */
	transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1), min-height 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  /* easeOutCirc */
  /*transition: min-width 300ms cubic-bezier(0, 0.55, 0.45, 1), min-height 300ms cubic-bezier(0, 0.55, 0.45, 1);*/

  /* bouncy, easeInOutBack iirc */
  /*transition: min-width 300ms cubic-bezier(0.68, -0.6, 0.32, 1.6), min-height 300ms cubic-bezier(0.68, -0.6, 0.32, 1.6);*/

  /* appearance */
  background-color: #111;
  border-radius: 12px;
}

:global(body) {
  display: flex;
  min-height: 100dvh;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  background-color: black;
}
</style>
