
import { ActionTree } from 'vuex'
import { RootInterface } from '../index'
import { VuexExampleInterface } from './state'

const actions: ActionTree<VuexExampleInterface, RootInterface> = {

  addTodoToListAction (context, newName: string): void {
    context.commit('ADD_TODO_ITEM_MUTATION', newName)
    console.log('Action addNameToListAction is done!')
  }

}

export default actions
