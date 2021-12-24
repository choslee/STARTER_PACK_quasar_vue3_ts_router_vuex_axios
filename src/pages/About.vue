<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
const isActive = ref(false)

function activate () {
  isActive.value = true
  setTimeout(function () {
    isActive.value = false
  }, 500)
}
</script>

<template>
  <div class="container text-center">
    <h2
      :class="{ bounce: isActive }"
      class="animated bg-blue-grey-11 text-h3 text-purple-9 q-pa-md"
    >
      About
    </h2>

    <q-btn
      color="secondary"
      icon="vibration"
      class="shadow-5 "
      label="Bounce heading title"
      @click="activate"
    />
    <br> <br>
    <q-btn
      :to="{ name: 'Home' }"
      label="Go to Home"
    />
    <br> <br>

    <q-btn
      color="red"
      label="Open Dialog"
      @click="dialog = true"
    />

    <q-dialog v-model="dialog">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">Quasar</span> Framework</q-toolbar-title>

          <q-btn
            v-close-popup
            flat
            round
            dense
            icon="close"
          />
        </q-toolbar>

        <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
    <div
      class="q-pa-md"
    >
      <div
        id="ss"
        class="full-width q-gutter-md row justify-center q-pa-xl "
        style="font-size: 3rem"
      >
        <q-icon
          name="warning"
          class="text-green shadow-5"
        />
        <q-icon
          name="format_size"
          class="text-purple rotate-135"
        />
        <q-icon
          name="print"
          class="text-yellow dimmed"
        />
        <q-icon
          name="today"
          class="text-pink cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
