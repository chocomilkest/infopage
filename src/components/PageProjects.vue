<script setup lang="ts">
import ProjectsBlock from './ProjectsBlock.vue'

import { type Container } from '../page'
import { github, type ProjectData } from './ProjectsBlock.vue'

const state = defineModel<Container>({ required: true })
state.value.height = 45

const dragProject: ProjectData = {
  name: 'drag',
  description: 'Wayland-native drag&drop helper (for use with yazi or other terminal file managers)',
  link: github('drag')
}
const updkernel: ProjectData = {
  name: 'updkernel',
  description: 'Gentoo helper for the limine bootloader, automatically modifies its config to use eselects kernel version',
  link: github('updkernel')
}
const infoPage: ProjectData = {
  name: 'infopage',
  description: 'this websites source code :3',
  link: github('infopage')
}
const pseudonym: ProjectData = {
  name: 'pseudonym',
  description: 'alias the game as a local website, runs fully on ur device without any paywalls :3',
  link: github('pseudonym')
}
</script>

<template>
  <div id="projects-container">
    <ProjectsBlock :data="dragProject" />
    <ProjectsBlock :data="updkernel" />
    <ProjectsBlock :data="infoPage" />
    <ProjectsBlock :data="pseudonym" />
  </div>
</template>

<style scoped>
#projects-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;

  overflow-y: auto;
  overflow-wrap: anywhere;
}

#projects-container > :deep(.project-block-container) {
  box-sizing: border-box;
  /* 8 px is the pixels of their gap between, 2 is the amount of blocks */
  flex: 0 0 calc((100% - 8px) / 2);
  min-width: 0;
}

#projects-container > p {
  margin-top: 0px;
  color: white;
  font-size: 16pt;
}
</style>
