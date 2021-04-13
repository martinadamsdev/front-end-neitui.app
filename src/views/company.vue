<template>
  <app-header></app-header>
  <app-main></app-main>
  <app-aside></app-aside>
  <app-footer></app-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AppHeader from '../components/Layout/app-header.tsx'
import AppFooter from '../components/Layout/app-footer.vue'
import AppAside from '../components/Layout/app-aside.vue'
import AppMain from '../components/Layout/app-main.vue'

export default defineComponent({
  name: "Company",
  components:{
    AppHeader,
    AppFooter,
    AppAside,
    AppMain
  }
})
</script>

<style scoped>

</style>