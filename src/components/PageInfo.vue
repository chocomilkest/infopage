<script setup lang="ts">
import { type Container } from '../page'

const state = defineModel<Container>({ required: true })
state.value.width  = 35
state.value.height = 40
</script>

<template>
  <div id="info-container">
    <p>hai im caroline (car online) and here is some info abt me</p>
    <p>- 15 year old</p>
    <p>-  odin, go, rust and vue :3</p>
    <p>- im a BIG FAN of stomachbook</p>
    <p>- fav games: oneshot, celeste, counter strike, geometry dash</p>
  </div>
</template>

<style scoped>
#info-container {
  padding: 8px;

  display: flex;
  flex-direction: column;
}

#info-container > p {
  margin-top: 0px;
  color: white;
  font-size: 16pt;
}
</style>
