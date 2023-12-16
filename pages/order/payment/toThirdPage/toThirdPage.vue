<template>
	<view>
		 <web-view  :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:""
			}
		},
		onLoad(ops) {
			alert(ops.url)
			this.src=ops.url;
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
