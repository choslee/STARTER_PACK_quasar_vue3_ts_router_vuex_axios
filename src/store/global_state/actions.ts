import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { GlobalStateInterface } from './state'

const actions: ActionTree<GlobalStateInterface, RootInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default actions
