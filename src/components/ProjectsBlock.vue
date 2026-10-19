<script setup lang="ts">
export interface ProjectData {
  name:        string,
  description: string,
  link:        string
}

defineProps<{data: ProjectData}>()
</script>

<script lang="ts">
export function github(repoName: string): string {
  return 'https://github.com/chocomilkest/'+repoName
}

function openInNewTab(data: ProjectData) {
  console.log('opening', data.link)
  window.open(data.link, '_blank')
}
</script>

<template>
  <div class="project-block-container" @click="openInNewTab(data)">
    <p v-text="data.name" />
    <p class="project-block-description" v-text="data.description" />
  </div>
</template>

<style scoped>
.project-block-container {
  min-height: 112px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 4px;

  background-color: #151515;
  border: 2px solid #444;
  border-radius: 8px;
  padding: 24px;

  color: white;
  cursor: pointer;
}

.project-block-container > p {
  margin-top: 0;
  margin-bottom: 0;

  user-select: none;
  pointer-events: none;
}

.project-block-description {
  color: #808080;
  font-size: 15px;
  text-align: center;
}
</style>
