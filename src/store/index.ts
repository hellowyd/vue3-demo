import { createStore } from 'vuex';

export interface State{
      typeId: String,
      showName: Boolean,
      count: Number,
}

export default createStore(
  {
     state:{
         typeId: 'user001',
         showName: true,
         count: 0,
    },
    mutations:{
      showUserName(state){
          state.showName = false
      },
      updateCount(state){
          state.count+=10
      }
    },
    actions:{
      addCount({commit}){
          commit('updateCount')
      }
    }
  }
)