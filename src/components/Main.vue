<template>
	<div>
		<MenuHead></MenuHead>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import MenuHead from './MenuHead.vue'
	export default {
		components: {
			MenuHead
		},
		data() {
			return {
				
			}
		},
		
	}
</script>