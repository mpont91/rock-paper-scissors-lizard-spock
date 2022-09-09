<template>
  <q-card square class="computer-card absolute-top">
    <q-card-section>
      <h1 class="text-h5 text-center q-my-md">Computer: {{ computerScore }}</h1>
      <div class="row q-gutter-lg justify-center">
        <q-btn
          class="computer-pick"
          :label="picked ? picked : ''"
          :color="picked ? 'red' : 'grey'"
          size="lg"
          disable
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { computed } from 'vue'
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
<style lang="scss" scoped>
.computer-card {
  width: 700px;
  max-width: 90vw;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  .computer-pick {
    min-width: 150px;
  }
}
</style>
