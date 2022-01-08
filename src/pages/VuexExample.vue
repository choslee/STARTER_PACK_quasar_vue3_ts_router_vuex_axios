<script setup lang="ts">
import { useStore } from 'src/store'
import { ref, computed } from 'vue'

const store = useStore()

// Computed VUEX variable (use Computed get/set when variable is used as model, to be allowed to set new value, othervise standard ref or standar computed because getter is default )
const idComputed = computed({
  get: () => store.state.vuexExampleModule.id,
  set: (val: number) => {
    store.commit('vuexExampleModule/UPDATE_ID', val)
  }
})
const openClosed = computed({
  get: () => store.state.vuexExampleModule.openClosed,
  set: (val: boolean) => store.commit('vuexExampleModule/CHANGE_BOOLEAN_STATE_MUTATION', val)
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const threeNamesList = computed(() => store.getters['vuexExampleModule/firstThreeTodos'] as string[])

// REACTIVE VARIABLE
const todo = ref<string>('')
// This variable "inputName" is only used as example it is better to use directly computed variable as "idComputed", "openClosed"
const inputName = ref<string>('')

// FUNCTIONS
function changeNameComputed (val: string): void {
  if (val.length > 0) {
    store.commit('vuexExampleModule/CHANGE_NAME_MUTATION', val)
    inputName.value = ''
  }
}

async function addTodoTroughDispatch (val: string) :Promise<void> {
  if (val.length > 0) {
    await store.dispatch('vuexExampleModule/addTodoToListAction', val)
    todo.value = ''
  }
}

function addTodoThroughCommit (val: string) :void {
  if (val.length > 0) {
    store.commit('vuexExampleModule/ADD_TODO_ITEM_MUTATION', val)
    todo.value = ''
  }
}

</script>

<template>
  <div class="q-pa-xl">
    <h2 style="text-align: center;">
      Vuex example page
    </h2>
    <hr>
    <h4 class="text-center">
      Example using ref and action function
    </h4>
    <div class="row justify-center items-center">
      <p>Name (vuex state): {{ store.state.vuexExampleModule.name }} </p>
      <q-input
        v-model="inputName"
        style="width: 200px;"
        class="q-ma-xl text-center"
        label="Enter user new name"
      />

      <q-btn
        color="red"
        style="height: 50px;"
        label="Change name "
        @click="changeNameComputed(inputName)"
      />
    </div>
    <div class="row justify-center items-center">
      <p>
        <strong>DISCLAIMER:</strong>
        <br> This variable inputName is used only for showing purpose <br>
        (it is better to use computed variable, see next example.)
      </p>
    </div>
    <hr>
    <h4 class="text-center">
      Example of using computed prop (get/set) for modal input
    </h4>
    <div class="row justify-center items-center">
      <p>Id (vuex state): {{ $store.state.vuexExampleModule.id }}</p>
      <q-input
        v-model="idComputed"
        style="width: 200px;"
        class="q-ma-xl text-center"
        label="Enter user new id"
      />
    </div>
    <hr>
    <h4 class="text-center">
      Example of using computed prop (get/set) for modal toggle input
    </h4>
    <div class="row justify-center items-center">
      <p>Vuex state of openClosed: {{ $store.state.vuexExampleModule.openClosed }}</p>
      <q-toggle
        v-model="openClosed"
        color="green"
        label="Change boolean state"
        class="q-ma-md"
      />
    </div>
    <hr>
    <h4 class="text-center">
      Example of using Action/Mutation to change vuex state
    </h4>
    <div class="row justify-center items-center">
      <div class="row justify-center items-center">
        <p>Vuex state of TODO list:</p>
        <ul>
          <li
            v-for="(nameListItem, index) in store.state.vuexExampleModule.todoList"
            :key="index"
          >
            {{ index+1 }}) {{ nameListItem }}
          </li>
        </ul>
        <q-input
          v-model="todo"
          style="width: 200px;"
          class="q-ma-xl text-center"
          label="Enter new todo"
        />
      </div>

      <div class="column">
        <q-btn
          color="purple"
          style="height: 50px;"
          no-caps
          class="q-ma-sm"
          label="Add new todo with DISPATCH ACTION"
          @click="addTodoTroughDispatch(todo)"
        />
        <q-btn
          color="green"
          style="height: 50px;"
          class="q-ma-sm"
          no-caps
          label="Add new todo with COMMIT MUTATION "
          @click="addTodoThroughCommit(todo)"
        />
      </div>
    </div>
    <hr>
    <h4 class="text-center">
      Example of using Getters:
    </h4>
    <div class="row justify-center items-center">
      <p>First three todo items via getters</p>
      <ul>
        <li
          v-for="(item, index) in threeNamesList"
          :key="index"
        >
          {{ index+1 }})  {{ item }}
        </li>
      </ul>
      <div class="row justify-center items-center">
        <p>
          <strong>DISCLAIMER:</strong>
          <br>
          GETTERS are required if we have the same computed prop through different components, needed only one computed prop in one component then don't use getters use simple computed prop
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" >
// Preventing UPPERCASE btn name (no-caps)
// .q-btn {
//   text-transform: initial;
// }
</style>
