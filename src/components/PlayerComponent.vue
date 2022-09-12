<template>
  <q-card square class="player-card absolute-bottom q-mb-sm">
    <q-card-section>
      <div class="row q-gutter-lg justify-center">
        <q-btn
          v-for="option in options"
          :key="option"
          class="player-pick"
          size="lg"
          round
          @click="selectHandler(option)"
        >
          <q-avatar size="100px">
            <img :src="`${option}.png`" />
          </q-avatar>
        </q-btn>
      </div>
      <h1 class="text-h5 text-center q-my-md">Player: {{ playerScore }}</h1>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { computed } from 'vue'
import { options } from 'src/services/game-service'
import { useGameStore } from 'stores/game-store'

defineProps({
  modelValue: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue', 'pick'])
const gameStore = useGameStore()
const playerScore = computed(() => gameStore.playerScore)
const selectHandler = (option) => {
  emit('update:modelValue', option)
  emit('pick')
}
</script>
<style lang="scss" scoped>
.player-card {
  width: 700px;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;

  .player-pick {
    min-width: 100px;
    min-height: 100px;
  }
}
</style>
