<script setup>
import FooterLayout from './FooterLayout.vue'
import HeaderLayout from './HeaderLayout.vue'
import DrawerLayout from './DrawerLayout.vue'

</script>

<template>
  <q-layout view="hHh Lpr fFf">
    <HeaderLayout />
    <DrawerLayout />

    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterLayout />
  </q-layout>
</template>
