<template>
	<div>
		<app-server-detail v-for="server in 5"></app-server-detail>
	</div>
</template>

<script type="text/javascript">
	import ServerDetail from './ServerDetail.vue'

	export default {
		components: {
			'app-server-detail': ServerDetail,
		}
	}
</script>