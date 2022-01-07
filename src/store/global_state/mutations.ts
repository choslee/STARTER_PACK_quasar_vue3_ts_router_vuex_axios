import { MutationTree } from 'vuex'
import { GlobalStateInterface } from './state'

const mutation: MutationTree<GlobalStateInterface> = {
  SET_DRAWER (state, val:boolean) {
    state.leftDrawerOpen = val
  }
}

export default mutation
