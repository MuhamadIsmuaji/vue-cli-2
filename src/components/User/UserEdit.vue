<template>
	<div>
		<h3>User Edit Component</h3>
		<p>User age: {{ userAge }}</p>
		<button @click="editAge">Edit Age</button>
	</div>
</template>

<script type="text/javascript">
	import { eventBus } from '../../main'

	export default {
		props: ['userAge'],
		methods: {
			editAge() {
				this.userAge = 30;
				// using custom events for communication
				// this.$emit('ageWasEdit', this.userAge);
				
				// using event bus for communication
				// eventBus.$emit('ageWasEdit', this.userAge);
				eventBus.changeAge(this.userAge);
			}
		}
	}
</script>