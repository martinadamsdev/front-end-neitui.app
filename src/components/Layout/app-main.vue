<template>
  <main role="main">
    <slot name="main"></slot>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "app-main"
})
</script>

<style scoped>

</style>