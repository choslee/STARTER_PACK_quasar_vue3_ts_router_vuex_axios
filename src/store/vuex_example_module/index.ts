import { Module } from 'vuex'
import { RootInterface } from './../index'
import state, { VuexExampleInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const userModule: Module<VuexExampleInterface, RootInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default userModule
