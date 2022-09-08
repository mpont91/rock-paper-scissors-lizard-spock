<template>
  <q-card square class="computer-card absolute-top">
    <q-card-section>
      <h1 class="text-h2 text-center q-my-md">Computer: {{ computerScore }}</h1>
      <div class="row q-gutter-lg justify-center">
        <q-btn
          v-for="option in options"
          :key="option"
          :label="option"
          :color="option === picked ? 'red' : 'grey'"
          size="lg"
          disable
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { computed } from 'vue'
import { options } from 'src/services/game-service'
import { useGameStore } from 'stores/game-store'

defineProps({
  picked: {
    type: String,
    default: null,
  },
})

const gameStore = useGameStore()
const computerScore = computed(() => gameStore.computerScore)
</script>
<style scoped>
.computer-card {
  width: 700px;
  max-width: 90vw;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>
