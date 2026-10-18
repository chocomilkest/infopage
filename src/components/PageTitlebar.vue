<!--
            [-][x] <-- this file makes this thing
|----------------|
|                |
|                |
|                |
|                |
|                |
|----------------|
-->

<script setup lang="ts">
import { Page, type Container } from '../page'
import { getPreviousPage, pageToString } from '../page'

const state = defineModel<Container>({ required: true })

function onCloseClick() {
  if (state.value.blogs !== null && state.value.blogs.current !== null) {
    state.value.blogs.current = null;
    return
  }
  state.value.currentPage = getPreviousPage(state.value.currentPage)
}
</script>

<template>
  <div id="titlebar-container">
    <div id="titlebar-left">
      <p>{{pageToString(state.currentPage)}}</p>
    </div>
    <div id="titlebar-right">
      <!-- TODO: IMPLEMENT EASTER EGG MINIMIZE ICON -->
      <div
        class="titlebar-icon"
        @click="onCloseClick"
        v-if="state.currentPage != Page.Explorer"
      >
        <p>x</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Noto Serif';
  src: url('../assets/fonts/NotoSerif-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Liberation Sans';
  src: url('../assets/fonts/LiberationSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

#titlebar-container {
  /* layout */
  min-width:  v-bind('state.width + "dvh"');
  min-height: 32pt;
  margin-bottom: 8pt;

	transition: min-width 0.6s cubic-bezier(0.16, 1, 0.3, 1), min-height 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  /* appearance */
  background-color: #0f0f0f;
  border-radius:      8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


#titlebar-left {
  min-height: 32pt;
  padding-left: 8px;

  display: flex;
  align-items: center;

  pointer-events: none;
  user-select: none;
}

#titlebar-left > p {
  margin: 0;
  color: white;
  font-family: 'Noto Serif';
  font-size: 14pt;
}


#titlebar-right {
  min-height: 32pt;
  padding-right: 8px;

  display: flex;
  align-items: center;
}
.titlebar-icon {
  /* layout */
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* appearance */
  background-color: #0a0a0a;

  color: white;
  font-family: 'Liberation Sans', monospace;
  font-size: 16pt;
  cursor: pointer;
  user-select: none;
}
</style>
