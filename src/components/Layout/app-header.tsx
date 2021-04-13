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
  },
  setup() {
    return () => (
        <>
          <header role="banner" class="header">
            <slot name="nav">
              <nav role="navigation" class="nav">
                测试
                {/*<div v-for={item in navs} key={item.name}>*/}
                {/*  <router-link to={item.path}>{item.name}</router-link>*/}
                {/*</div>*/}
              </nav>
            </slot>
          </header>
        </>
    );
  }
})

// <!--<style lang="scss" scoped>-->
// <!--.header {-->
// <!--  display: flex;-->
// <!--  justify-content: center; // 水平居中-->
// <!--}-->
//
// <!--.nav {-->
// <!--  display: flex;-->
// <!--}-->
// <!--</style>-->