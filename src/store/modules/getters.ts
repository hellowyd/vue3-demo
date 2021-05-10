import { GetterTree } from 'vuex'
import { State } from '../types'

const getters: GetterTree<State, {}> = {
	userName(state): string {
		return `用户ID：${state.userId}`
	},
}

export default getters
