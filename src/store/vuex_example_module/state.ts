export interface VuexExampleInterface {
  name: string;
  todoList: string[]
  id: number ;
  openClosed: boolean;
}

function state (): VuexExampleInterface {
  return {
    name: 'Pera',
    todoList: ['Buy bananas', 'Fix car', 'Wash cloths', 'Go to school'],
    id: 0,
    openClosed: false
  }
}

export default state
