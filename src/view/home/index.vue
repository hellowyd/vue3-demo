<template>
	<div class="wrap">
		<img alt="Vue logo" src="@/assets/logo.png" />
		<h1>{{ store.state.count }}</h1>
		<p>{{ $store._state.data.typeId }}</p>
		<button @click="addCount">增加</button>
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
			store.dispatch('addCount')
		}
		return { msg, store, addCount }
	},
	created() {
		console.log()
	},
})
</script>
<style scoped>
h1 {
	font-size: 30px;
}
</style>
