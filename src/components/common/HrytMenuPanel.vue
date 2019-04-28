<template>
	<div id="menuPanel">
		<drawer placement="left" :closable="false" v-model="visable">
			<p>label 1</p>
			<p>label 2</p>
			<p>label 3</p>
			<p>label 4</p>
			<p>label 5</p>
			<p>label 6</p>
		</drawer>
	</div>
</template>

<script>
export default {
	props: {
		showPanel: Boolean
	},
	data() {
		return {
			visable: this.showPanel
		};
	},
	watch: {
		showPanel(val) {
			this.visable = val;
		},
		visable(val) {
			this.$emit("on-change", val);
		}
	},
	methods: {}
};
</script>
