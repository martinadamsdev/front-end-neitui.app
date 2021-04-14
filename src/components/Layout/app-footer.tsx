import {defineComponent} from 'vue'

const style = {}

export default defineComponent({
	name: 'app-footer',
	setup() {
		return () => (
			<footer role="contentinfo" class="footer">
				<slot name="footer">
				</slot>
			</footer>
		)
	}
})