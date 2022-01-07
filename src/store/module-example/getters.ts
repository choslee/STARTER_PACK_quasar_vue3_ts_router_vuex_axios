import { GetterTree } from 'vuex'
import { RootInterface } from '../index'
import { ExampleStateInterface } from './state'

const getters: GetterTree<ExampleStateInterface, RootInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default getters
