import {defineComponent} from "vue"
import header from '../components/Layout/header'

export default defineComponent({
	name: "Company",
	setup() {
		return () => {
			<>
				<header/>
			</>
		}
	}
})