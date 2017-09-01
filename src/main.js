import Vue from 'vue'
import App from './App.vue'

/*
import name_of_to_you from file_name
name_of_to_you better same with file_name that import so can know which file come from
 */
// import Home from './Home.vue'

// export const eventBus = new Vue();

export const eventBus = new Vue({
	methods: {
		changeAge(age) {
			this.$emit('ageWasEdit', age);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})