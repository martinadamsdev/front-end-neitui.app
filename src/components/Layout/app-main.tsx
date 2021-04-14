import {defineComponent} from 'vue'

const style = {}

export default defineComponent({
	name: 'app-main',
	setup() {
		return () => (
			<>
				<main role="main" class="main">
					<slot name="main">
					</slot>
				</main>
			</>
		)
	}
})