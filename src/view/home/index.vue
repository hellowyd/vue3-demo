<template>
	<div class="wrap">
		<van-nav-bar
			title="标题"
			@click-left="onClickLeft"
			@click-right="onClickRight"
		/>
		<van-progress
			:percentage="store.state.count"
			style="margin-top: 50px"
		/>
		<van-button type="success" @click="addCount">添加</van-button>
	</div>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
	name: 'home',
	setup: () => {
		const store = useStore()
		const msg = ref('vue')
		const addCount = function () {
			store.state.count < 100 && store.dispatch('addCount')
		}
		return { msg, store, addCount }
	},
	created() {
		console.log(this.$store)
	},
})
</script>
<style scoped>
h1 {
	font-size: 30px;
}
</style>
