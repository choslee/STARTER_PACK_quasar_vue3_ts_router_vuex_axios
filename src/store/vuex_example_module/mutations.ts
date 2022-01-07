import state, { ExampleStateInterface } from './../module-example/state'
import { MutationTree } from 'vuex'
import { VuexExampleInterface } from './state'

const mutation: MutationTree<VuexExampleInterface> = {

  CHANGE_NAME_MUTATION (state, val: string) {
    state.name = val
    console.log('Mutation CHANGE_NAME_MUTATION is done!')
  },

  CHANGE_BOOLEAN_STATE_MUTATION (state, val: boolean) {
    state.openClosed = val
    console.log('Mutation CHANGE_BOOLEAN_STATE_MUTATION is done!')
  },

  UPDATE_ID (state:VuexExampleInterface, val: number) {
    state.id = val
    console.log('Mutation UPDATE_ID is done!')
  },

  ADD_TODO_ITEM_MUTATION (state: VuexExampleInterface, newName: string) {
    state.todoList.push(newName)
    console.log('Mutation ADD_TODO_ITEM_MUTATION is done!')
  }

}

export default mutation
