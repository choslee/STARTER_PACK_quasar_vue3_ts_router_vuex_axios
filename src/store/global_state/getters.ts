import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { GlobalStateInterface } from './state'

const getters: GetterTree<GlobalStateInterface, RootInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
