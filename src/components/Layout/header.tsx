import {defineComponent} from 'vue'
import {RouterLink} from 'vue-router'
import router from '../../router'

const style = {}

// 导航 Links
const navs = router.options.routes.map(x =>
	<div>
		<RouterLink to={x.path}>{x.name}</RouterLink>
	</div>
)

export default defineComponent({
	name: 'header',
	setup() {
		return () => (
			<>
				<header role="banner" class="header">
					<slot name="nav">
						<nav role="navigation" class="nav">
							{navs}
						</nav>
					</slot>
				</header>
			</>
		)
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