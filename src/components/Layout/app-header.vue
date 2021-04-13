<template>
  <header role="banner">
    <slot name="nav">
      <nav role="navigation">
        <router-link v-for="item in navs" :to="item.path" :key="item.name">{{ item.name }}</router-link>
      </nav>
    </slot>
    <slot></slot>
  </header>
</template>

<script>
import {defineComponent} from 'vue'
import router from '../../router'

const navs = router.options.routes.map(x => {
  return {
    path: x.path,
    name: x.name
  }
})

export default defineComponent({
  name: 'app-header',
  data() {
    return {
      navs
    }
  }
})
</script>

<style scoped>

</style>