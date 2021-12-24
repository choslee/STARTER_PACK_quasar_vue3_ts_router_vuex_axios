<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh Lpr fFf">
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

    <q-drawer
      v-model="leftDrawerOpen"
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
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title class="row justify-center">
          <q-avatar>
            <q-icon
              name="font_download"
              class="text-white"
            />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
