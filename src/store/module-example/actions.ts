import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { ExampleStateInterface } from './state'

const actions: ActionTree<ExampleStateInterface, RootInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default actions
