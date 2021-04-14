import {defineComponent} from "vue"
import App from '../components/Layout'

export default defineComponent({
	name: "Company",
	components: App,
	setup() {
		return () => {
			<>
				<App.AppHeader/>
				<App.AppMain/>
				<App.AppAside/>
				<App.AppFooter/>
			</>
		}
	}
})