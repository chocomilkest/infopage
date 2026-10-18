<script setup lang="ts">
import { type Container } from '../page'

const state = defineModel<Container>({ required: true })
state.value.width  = 40
state.value.height = 45
</script>

<template>
  <div id="projects-container">
    <p>yet to be implemented :3</p>
    <p>for now consider <a href="https://github.com/chocomilkest">github</a></p>
  </div>
</template>

<style scoped>
#projects-container {
  padding: 8px;
}

#projects-container > p {
  margin-top: 0px;
  color: white;
  font-size: 16pt;
}
</style>
