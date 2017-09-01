<template>
	<div class="user">
		<h1>The user component</h1>
		<p>I'm a awesome user</p>
		<button @click="changeMyName">Change my name</button>
		<p>Name is {{ name }}</p>
		<p>Age is {{ age }}</p>
		<hr>
		<div class="user-detail">
			<!-- using custom events for child parent communication -->
			<user-detail :userName="name" @nameWasReset="name = $event" :resetFn="resetName" :userAge="age"></user-detail>
		</div>
		<hr>
		<div class="user-edit">
			<user-edit :userAge="age" @ageWasEdit="age = $event"></user-edit>
		</div>
	</div>
</template>

<script type="text/javascript">
	import UserDetail from './UserDetail.vue'
	import UserEdit from './UserEdit.vue' 

	export default {
		data: function () {
			return {
				name: 'Ismuaji',
				age: 27,
			};
		},
		methods: {
			changeMyName() { // ES6 syntax
				this.name = 'Anna';
			},
			resetName() {
				// using callback function for child parent communication
				this.name = 'Max';
			}
		},
		components: {
			userDetail: UserDetail,
			userEdit: UserEdit,
		}
	}
</script>