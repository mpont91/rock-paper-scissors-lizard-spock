<template>
  <q-toolbar class="bg-primary text-white">
    <q-avatar>
      <img src="favicon.png" />
    </q-avatar>
    <q-toolbar-title v-if="$q.screen.gt.xs">
      Rock - Paper - Scissors - Lizard - Spock
    </q-toolbar-title>
    <q-toolbar-title v-else>R - P - S - L - S</q-toolbar-title>
    <q-btn flat round dense icon="menu" class="q-mr-sm">
      <q-menu>
        <q-list>
          <q-item v-close-popup clickable>
            <q-item-section @click="$emit('show-rules')">
              Show rules
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script setup>
import { useQuasar } from 'quasar'
useQuasar()

defineEmits(['show-rules'])
</script>

<style scoped></style>
