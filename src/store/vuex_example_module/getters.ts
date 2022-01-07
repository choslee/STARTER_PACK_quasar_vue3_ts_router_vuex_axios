import { GetterTree } from 'vuex'
import { RootInterface } from './../index'
import { VuexExampleInterface } from './state'

const getters: GetterTree<VuexExampleInterface, RootInterface> = {

  // Use getters instead of Computed prop if using the same computed prop through different components
  firstThreeTodos (state) {
    if (state.todoList.length > 3) {
      const n = state.todoList.slice(0, 3)
      return n
    } else {
      return state.todoList
    }
  }
}

export default getters
