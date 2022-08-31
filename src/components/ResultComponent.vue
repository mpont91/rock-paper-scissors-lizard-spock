<template>
  <q-card v-if="winner" square class="result-card absolute-center">
    <q-card-section>
      <h2 class="text-h2 text-center">{{ result }}</h2>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { getWinnerMessage } from 'src/services/game-service'
import { computed } from 'vue'

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
  margin-left: auto;
  margin-right: auto;
}
</style>
