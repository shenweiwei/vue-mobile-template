<template>
	<footer>
		<van-tabbar v-model="active" :active-color="activeColor" @change="changeTabbar(active)">
			<slot></slot>
		</van-tabbar>
	</footer>
</template>
<script>
export default {
	data() {
		return {
			active: this.$store.state.tab.activeIndex,
			backgroundColor: this.$store.getters.background.color,
			activeColor: this.$store.getters.icon.activeColor
		};
	},

	methods: {
		changeTabbar(active) {
			this.changeActiveIndex(active);
			this.linkToPage(active);
		},

		linkToPage(active) {
			switch (active) {
				case 0:
					this.$router.push("/");
					break;
				case 1:
					this.$router.push("/apps");
					break;
				case 2:
					this.$router.push("/orders");
					break;
				case 3:
					this.$router.push("/mine");
					break;
				default:
					break;
			}
		},

		changeActiveIndex(active) {
			this.$store.commit("setCoverBox", false);
			this.$store.commit("changeTabActiveIndex", active);
		}
	}
};
</script>
