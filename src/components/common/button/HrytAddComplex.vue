<template>
	<Dropdown placement="bottom-end" trigger="click" @on-click="hideCoverBox">
		<div @click="showCoverBox">
			<van-icon name="plus" size="25px" :style="{ color: iconColor }"/>
		</div>
		<DropdownMenu slot="list">
			<DropdownItem>
				<h3>
					<van-icon name="scan" :style="{ color: 'black' }" size="20px"></van-icon>
					<strong>扫一扫</strong>
				</h3>
			</DropdownItem>
			<DropdownItem>
				<h3 @click="setLanguage('zh')">
					<strong>中文</strong>
				</h3>
			</DropdownItem>
			<DropdownItem>
				<h3 @click="setLanguage('en')">
					<strong>EN</strong>
				</h3>
			</DropdownItem>
			<DropdownItem>
				<h3>
					<strong>帮助</strong>
				</h3>
			</DropdownItem>
		</DropdownMenu>
	</Dropdown>
</template>
<script>
export default {
	methods: {
		showCoverBox() {
			this.isVisable = !this.isVisable;
		},
		hideCoverBox() {
			this.isVisable = false;
		},
		setLanguage(language) {
			this.$store.commit("setLanguage", language);
			this.$i18n.locale = this.$store.getters.language;
		}
	},
	data() {
		return {
			iconColor: this.$store.getters.icon.color,
			isVisable: false
		};
	},
	watch: {
		isVisable(val) {
			if (val) {
				this.$store.commit("setCoverBox", true);
			} else {
				this.$store.commit("setCoverBox", false);
			}
		}
	}
};
</script>
<style lang="scss">
.ivu-poptip-content {
	margin-left: 60px;
	.van-icon {
		padding-right: 5px;
	}
}
</style>
