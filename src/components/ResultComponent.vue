<template>
  <q-dialog :model-value="!!winner" persistent>
    <q-card square class="result-card absolute-center">
      <q-card-section class="text-center">
        <h2 class="text-h2">{{ result }}</h2>
        <q-btn class="text-center" @click="$emit('reset')">New game?</q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { getWinnerMessage } from 'src/services/game-service'
import { computed } from 'vue'
defineEmits(['reset'])
const props = defineProps({
  winner: {
    type: String,
    default: null,
    validator: (value) => [null, 'draw', 'player', 'computer'].includes(value),
  },
})
const result = computed(() => {
  return getWinnerMessage(props.winner)
})
</script>

<style scoped>
.result-card {
  width: 700px;
  max-width: 90vw;
}
</style>
