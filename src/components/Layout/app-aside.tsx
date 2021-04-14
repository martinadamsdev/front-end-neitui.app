import {defineComponent} from 'vue'

const style = {}

export default defineComponent({
	name: 'app-aside',
	setup() {
		return () => (
			<>
				<aside class="aside">
					<slot name="aside">
					</slot>
				</aside>
			</>
		)
	}
})