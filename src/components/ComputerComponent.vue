<template>
  <q-card flat class="computer-card absolute-top">
    <q-card-section>
      <h1 class="text-h5 text-center q-my-md">Computer: {{ computerScore }}</h1>
      <div class="row q-gutter-lg justify-center">
        <pick-component :pick="picked" />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { computed } from 'vue'
import { useGameStore } from 'stores/game-store'
import PickComponent from 'components/PickComponent.vue'

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
}
</style>
