<template>
	<div>
		<van-panel>
			<hryt-header slot="header">
				<h2 :style="{ color: iconColor }" slot="title">{{$t('app.title')}}</h2>
				<hryt-menu size="25px" slot="left"></hryt-menu>
				<hryt-add-complex slot="right"></hryt-add-complex>
			</hryt-header>
			<router-view></router-view>
		</van-panel>
		<hryt-footer class="hryt-footer">
			<van-tabbar-item icon="home-o">{{$t('app.homeTab')}}</van-tabbar-item>
			<van-tabbar-item icon="apps-o">{{$t('app.appsTab')}}</van-tabbar-item>
			<van-tabbar-item icon="todo-list-o">{{$t('app.orderTab')}}</van-tabbar-item>
			<van-tabbar-item icon="manager-o">{{$t('app.mineTab')}}</van-tabbar-item>
		</hryt-footer>
		<hryt-cover-box v-show="this.$store.getters.coverBox.show"></hryt-cover-box>
	</div>
</template>

<script>
export default {
	props: {
		msg: String
	},
	methods: {},
	created() {
		this.$store.dispatch("init");
	},
	data() {
		return {
			iconColor: this.$store.getters.icon.color
		};
	}
};
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.hryt-footer {
	height: 50px;
}
</style>
