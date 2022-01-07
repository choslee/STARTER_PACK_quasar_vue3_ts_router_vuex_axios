<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'src/store'

const store = useStore()

const drawerState = computed({
  get: () :boolean => {
    console.log('drawerState get', store.state.globalState.leftDrawerOpen)
    return store.state.globalState.leftDrawerOpen
  },
  set: (val: boolean) => {
    store.commit('globalState/SET_DRAWER', val)
    console.log('drawerState set', val)
  }
})

</script>

<template>
  <q-drawer
    v-model="drawerState"
    side="left"
    :width="200"
    :breakpoint="500"
    bordered
  >
    <!-- drawer content -->
    <q-tabs
      vertical
      class="text-blue"
    >
      <q-route-tab
        icon="home"
        :to="{ name: 'Home' }"
        label="Home"
        exact
      />
      <q-route-tab
        icon="info"
        :to="{ name: 'About' }"
        label="About"
        exact
      />
      <q-route-tab
        icon="storage"
        :to="{ name: 'Vuex' }"
        label="Vuex"
        exact
      />
    </q-tabs>
  </q-drawer>
</template>

<style scoped lang="scss">

</style>
