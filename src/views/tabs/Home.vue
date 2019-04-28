<template>
	<div id="home">
		<van-row>
			<van-swipe :autoplay="3000" :show-indicators="false">
				<van-swipe-item v-for="(image, index) in images" :key="index">
					<img :src="image" width="100%">
				</van-swipe-item>
			</van-swipe>
		</van-row>
		<van-row>
			<van-swipe indicator-color="#515a6e">
				<van-swipe-item>
					<van-row type="flex" justify="space-around">
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 1</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 2</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 3</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 4</label>
							</van-row>
						</van-col>
					</van-row>
					<van-row type="flex" justify="space-around">
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 5</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 6</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 7</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 8</label>
							</van-row>
						</van-col>
					</van-row>
				</van-swipe-item>
				<van-swipe-item>
					<van-row type="flex" justify="space-around">
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 1</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 2</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 3</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 4</label>
							</van-row>
						</van-col>
					</van-row>
					<van-row type="flex" justify="space-around">
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 5</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 6</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 7</label>
							</van-row>
						</van-col>
						<van-col span="3">
							<van-row>
								<van-icon name="shop" size="25px"></van-icon>
							</van-row>
							<van-row>
								<label>App 8</label>
							</van-row>
						</van-col>
					</van-row>
				</van-swipe-item>
			</van-swipe>
		</van-row>
		<van-row>
			<van-tabs class="hrty-van-tabs" v-model="tabActive" animated>
				<van-tab v-for="index in 4" :title="'app ' + index" :key="index">
					<van-swipe-cell :right-width="65">
						<!-- <van-row>内容1</van-row> -->
						<van-cell-group>
							<van-cell title="功能1"/>
						</van-cell-group>
						<span slot="right">删除</span>
					</van-swipe-cell>
				</van-tab>
			</van-tabs>
		</van-row>
	</div>
</template>

<script>
export default {
	methods: {},
	data() {
		return {
			images: [
				"https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
				"https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg"
			],
			tabActive: 0
		};
	}
};
</script>
<style lang="scss">
.hrty-van-tabs {
	z-index: 0;
}
.van-swipe-cell {
	&__left,
	&__right {
		color: white;
		font-size: 15px;
		width: 65px;
		height: 44px;
		display: inline-block;
		text-align: center;
		line-height: 44px;
		background-color: red;
	}
}
</style>
