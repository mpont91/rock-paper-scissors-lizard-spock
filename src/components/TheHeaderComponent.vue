<template>
  <q-toolbar class="bg-primary text-white">
    <q-avatar>
      <q-img :src="rpsls" />
    </q-avatar>
    <q-toolbar-title v-if="$q.screen.gt.xs">
      Rock - Paper - Scissors - Lizard - Spock
    </q-toolbar-title>
    <q-toolbar-title v-else>R - P - S - L - S</q-toolbar-title>
    <q-btn
      flat
      round
      dense
      icon="info"
      class="q-mr-sm"
      @click="$emit('show-rules')"
    >
    </q-btn>
  </q-toolbar>
</template>

<script setup>
import rpsls from 'assets/rpsls.webp'
import { useQuasar } from 'quasar'
useQuasar()

defineEmits(['show-rules'])
</script>

<style scoped></style>
