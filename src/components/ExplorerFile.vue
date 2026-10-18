<script setup lang="ts">
import { ref } from 'vue'

import folder_open from '../assets/explorer/opened.png'
import folder_closed from '../assets/explorer/closed.png'
import textdocument from '../assets/explorer/textdocument.png'

export interface FolderData {
  folderName:   string,
  is_folder:    boolean,
  on_click:     () => void
}

const props = defineProps<{data: FolderData}>()
const icon = ref(props.data.is_folder ? folder_closed : textdocument)
</script>

<script lang="ts">
export function folder(name: string, onClick: ()=>void): FolderData {
  return {
    folderName: name,
    is_folder: true,
    on_click: onClick
  }
}
</script>

<template>
  <div
    class="explorer-folder-container"
    @mouseover="icon = data.is_folder ? folder_open : textdocument"
    @mouseleave="icon = data.is_folder ? folder_closed : textdocument"
    @click="data.on_click()"
  >
    <img :src="icon">
    <p v-text="data.folderName"/>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Noto Serif';
  src: url('../assets/fonts/NotoSerif-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

.explorer-folder-container {
  height: 72px;
  width:  60px;

  display: flex;
  flex-direction: column;

  cursor: pointer;
}
.explorer-folder-container > p {
  margin-top: 0;
  align-self: center;

  color: white;
  font-family: 'Noto Serif';
  font-size: 13px;
}

img {
  image-rendering: pixelated; /* crispy yum */
}
</style>
