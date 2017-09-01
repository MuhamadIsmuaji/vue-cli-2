<template>
	<div>
		<p><h3>Server status: {{ status }} (<button @click="changeStatus">Fix</button>)</h3></p>	
	</div>
</template>

<script type="text/javascript">
	export default {
		data : function() {
			return {
				status: 'Critical',
			};
		},
		methods: {
			changeStatus: function() {
				this.status = 'Normal';
			}
		}
	}
</script>

<style type="text/css" scoped>
	div {
		border: 1px solid red;
	}
</style>