import {defineComponent} from 'vue'
import {RouterView} from 'vue-router'

console.log(RouterView)
export default defineComponent({
	name: 'App',
	setup() {
		return () => (
			<>
				<RouterView> </RouterView>
			</>
		)
	}
})

// <style>
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// </style>