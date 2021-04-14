import {defineComponent} from "vue"
import Header from '../components/Layout/header'

export default () => ({
	name: "Home",
	render() {
		return () => {
			<>
				<Header/>
			</>
		}
	}
})