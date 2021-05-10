import { ActionTree } from 'vuex'
import { State } from '../types'

const actions: ActionTree<State, {}> = {
	addCount({ commit }) {
		commit('updateCount')
	},
}

export default actions
