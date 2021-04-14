import {defineComponent} from 'vue';
import {RouterLink, RouterView} from 'vue-router'

export default defineComponent({
	name: "App",
	render() {
		return (
			<>
				<div id="nav">
					<RouterLink to="/">Home</RouterLink> |
					<RouterLink to="/company">About</RouterLink>
				</div>
				<RouterView/>
			</>
		)
	}
})