<template>
  <q-dialog :model-value="!!winner" @before-hide="$emit('reset')">
    <q-card
      square
      :class="[
        'result-card',
        'absolute-center',
        'text-white',
        winner === 'player'
          ? 'bg-green-3'
          : winner === 'computer'
          ? 'bg-red-3'
          : 'bg-orange-3',
      ]"
    >
      <q-card-section class="text-center">
        <h2 class="text-h2">{{ result }}</h2>
        <q-btn
          color="black"
          size="lg"
          class="text-center"
          @click="$emit('reset')"
        >
          New game?
        </q-btn>
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
