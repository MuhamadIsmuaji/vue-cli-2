<template>
	<div>
		<app-header></app-header>
		<hr>
		<app-servers></app-servers>
		<hr>
		<app-user></app-user>
		<hr>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './components/Shared/Header.vue'
	import Footer from './components/Shared/Footer.vue'
	import Servers from './components/Server/Servers.vue'
	import User from './components/User/User.vue'

	export default {
		components: {
			appHeader: Header, // vue js, let vue js give the dash app-header
			Footer, // Footer: Footer (ES6)
			'app-servers': Servers, // classic
			appUser: User,
		}
	}
</script>

<style>
</style>
