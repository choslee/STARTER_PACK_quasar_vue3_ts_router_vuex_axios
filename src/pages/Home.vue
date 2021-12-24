<script setup lang="ts">
import { ref } from 'vue'

const rightDrawerOpen = ref(false)

</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      side="right"
      bordered
      class="q-mt-xl q-pb-xl"
    >
      <!-- drawer content -->
      <div class="q-pb-xl">
        <ul>
          <li
            v-for="n in 50"
            :key="n"
          >
            List item {{ n }}
          </li>
        </ul>
      </div>
    </q-drawer>

    <q-page-container>
      <div class="container text-center">
        <h2> Home </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil autem ipsum aperiam eaque reprehenderit, similique, temporibus aspernatur accusamus laborum eum in repudiandae! Quae eius culpa eligendi, unde totam dolor id!</p>
      </div>
    </q-page-container>
  </q-layout>
</template>
<style scoped>

</style>
