
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

function toggleLeftDrawer () {
  drawerState.value = !drawerState.value
}
</script>

<template>
  <q-header
    elevated
    class="bg-primary text-white"
  >
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        icon="menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>
        <q-avatar>
          <q-icon
            name="font_download"
            class="text-white"
          />
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">

</style>
