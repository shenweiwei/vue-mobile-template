<template>
	<div @click="active">
		<div @click="showMenu">
			<van-icon name="wap-nav" :color="iconColor" :size="size"></van-icon>
		</div>
		<div>
			<hryt-menu-panel :show-panel="visable" @on-change="updateVisable"></hryt-menu-panel>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		size: String
	},
	data() {
		return {
			iconColor: this.$store.getters.icon.color,
			visable: false
		};
	},
	methods: {
		showMenu() {
			this.visable = this.visable ? false : true;
		},
		updateVisable(val) {
			this.visable = val; //④外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
		},
		active() {
			this.$store.commit("setCoverBox", false);
		}
	}
};
</script>