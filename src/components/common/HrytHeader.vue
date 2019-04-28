<template>
	<header>
		<div>
			<van-nav-bar left-arrow :style="{background: backgroundColor}">
				<div slot="title" @click="active">
					<slot name="title"></slot>
				</div>
				<div slot="left">
					<slot name="left"></slot>
				</div>
				<div slot="right">
					<slot name="right"></slot>
				</div>
			</van-nav-bar>
		</div>
	</header>
</template>

<script>
export default {
	methods: {
		active() {
			this.$store.commit("setCoverBox", false);
		}
	},
	data() {
		return {
			backgroundColor: this.$store.getters.background.color
		};
	}
};
</script>
