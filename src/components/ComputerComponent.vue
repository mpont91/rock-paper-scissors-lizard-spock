<template>
  <q-card square class="computer-card absolute-top">
    <q-card-section>
      <h1 class="text-h5 text-center q-my-md">Computer: {{ computerScore }}</h1>
      <div class="row q-gutter-lg justify-center">
        <q-btn class="computer-pick" size="lg" color="grey-5" round>
          <q-avatar v-if="picked" :size="buttonSizing">
            <img :src="`${picked}.png`" />
          </q-avatar>
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { computed } from 'vue'
import { useGameStore } from 'stores/game-store'
import { getButtonSizing } from 'src/services/game-service'

defineProps({
  picked: {
    type: String,
    default: null,
  },
})

const gameStore = useGameStore()
const computerScore = computed(() => gameStore.computerScore)
const buttonSizing = getButtonSizing()
</script>
<style lang="scss" scoped>
.computer-card {
  width: 700px;
  max-width: 90vw;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  .computer-pick {
    min-width: v-bind('buttonSizing');
    min-height: v-bind('buttonSizing');
  }
}
</style>
