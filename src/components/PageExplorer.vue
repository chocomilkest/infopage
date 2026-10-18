<script setup lang="ts">
import ExplorerFile, { folder } from './ExplorerFile.vue'
import { Page, type Container } from '../page'

const state = defineModel<Container>({ required: true })
state.value.height = 50
state.value.width = 50

const infoFolder = folder('about me', () => state.value.currentPage = Page.Info)
const projectsFolder = folder('projects', () => state.value.currentPage = Page.Projects)
const blogFolder = folder('blog', () => state.value.currentPage = Page.Blog)

</script>

<template>
  <div id="explorer-container">
    <ExplorerFile v-model="state.currentPage" :data="infoFolder"/>
    <ExplorerFile v-model="state.currentPage" :data="projectsFolder"/>
    <ExplorerFile v-model="state.currentPage" :data="blogFolder"/>
  </div>
</template>

<style scoped>
#explorer-container {
  padding: 16px;
  display: flex;
  flex-direction: row;
  column-gap: 16pt;
}
</style>
