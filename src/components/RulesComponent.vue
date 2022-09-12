<template>
  <q-dialog persistent :model-value="showRules">
    <q-card square>
      <q-card-section class="text-center">
        <h2 class="text-h5">Rules of the game</h2>
      </q-card-section>
      <q-card-section>
        <q-img src="rules.png" />
      </q-card-section>
      <q-card-section class="text-center">
        <q-btn color="black" @click="$emit('hide-rules')">Start playing!</q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
defineProps({
  showRules: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['hide-rules'])
</script>

<style scoped></style>
