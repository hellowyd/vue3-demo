import { State } from '../types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<State> = {
	showUserName(state) {
		state.showName = false
	},
	updateCount(state) {
		state.count += 10
	},
}
export default mutations
