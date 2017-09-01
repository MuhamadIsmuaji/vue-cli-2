<template>
	<div>
		<h3>User Detail Component</h3>
		<p>User name: {{ switchName() }}</p>
		<p>User age: {{ userAge }}</p>
		<button @click="resetName">Reset Name - Custom Events</button>
		<button @click="resetFn()">Reset Name - Callback Function</button>
	</div>
</template>

<script type="text/javascript">
	import { eventBus } from '../../main'

	export default {
		// props: ['userName'],
		// props: {
		// 	userName: [String, Array],
		// },
		// props: {
		// 	userName: String,
		// },
		// props: {
		// 	userName: {
		// 		type: String,
		// 		required: true,
		// 		default: 'Max'
		// 	}
		// },
		// props: {
		// 	userName: {
		// 		type: Object,
		// 		default: function() {
		// 			return {
		// 				name: 'Max'
		// 			}
		// 		}
		// 	}
		// },
		props: {
			userName: {
				type: String,
			},
			resetFn: Function,
			userAge: Number,
		},
		methods: {
			switchName() {
				return this.userName.split("").reverse().join("");
			},
			resetName() {
				this.userName = 'Max';
				// using custom events for child parent communication
				this.$emit('nameWasReset', this.userName);
			}
		},
		created() {
			eventBus.$on('ageWasEdit', (age) => {
				this.userAge = age;
			});
		}
	}
</script>