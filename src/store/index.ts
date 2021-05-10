import { createStore, StoreOptions } from 'vuex'
import state from './modules/states'
import actions from './modules/actions'
import mutations from './modules/mutations'
import getters from './modules/getters'
import { State } from './types'

const stroe: StoreOptions<State> = {
	state,
	mutations,
	actions,
	getters,
}

export default createStore(stroe)
