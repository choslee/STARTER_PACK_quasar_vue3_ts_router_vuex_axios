
import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore
} from 'vuex'

// Modules with their interfaces:
import example from './module-example'
import { ExampleStateInterface } from './module-example/state'

import { VuexExampleInterface } from './vuex_example_module/state'
import vuexExampleModule from './vuex_example_module'

import { GlobalStateInterface } from './global_state/state'
import globalState from './global_state'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export interface RootInterface {
  // Define your own store structure, using submodules if needed
  globalState: GlobalStateInterface,
  vuexExampleModule: VuexExampleInterface;
  example: ExampleStateInterface;

  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  // example: unknown
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<RootInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<RootInterface>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  const Store = createStore<RootInterface>({
    modules: {
      globalState,
      vuexExampleModule,
      example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })

  return Store
})

// Provide useStore() helper for getting store in component
export function useStore () {
  return vuexUseStore(storeKey)
}
