<template>
	<van-tabs class="hrty-van-tabs" v-model="tabActive" animated>
		<van-tab v-for="tab in tabs" :key="tab.index" :title="tab.name">
			<van-swipe-cell :right-width="65">
				<van-cell-group>
					<van-cell title="内容1"/>
				</van-cell-group>
				<span slot="right">删除</span>
			</van-swipe-cell>
		</van-tab>
	</van-tabs>
</template>
<script>
export default {
	data() {
		return {
			tabActive: 0,
			tabs: [
				{ index: 0, name: "进行中" },
				{ index: 1, name: "待付款" },
				{ index: 2, name: "已完成" },
				{ index: 3, name: "已取消" }
			]
		};
	}
};
</script>
