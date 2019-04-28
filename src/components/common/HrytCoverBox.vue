<template>
	<div id="coverbox" @click="active"></div>
</template>

<script>
export default {
	methods: {
		active() {
			this.$store.commit("setCoverBox", false);
		}
	}
};
</script>

<style>
#coverbox {
	width: 100%;
	height: 100%;
	background-color: #000000;
	filter: alpha(Opacity=20);
	-moz-opacity: 0.2;
	opacity: 0.2;
	position: fixed;
	top: 0px;
	left: 0px;
}
</style>
