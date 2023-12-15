<template>
  <q-card flat class="player-card absolute-bottom q-mb-sm">
    <q-card-section>
      <div class="row q-gutter-lg justify-center">
        <pick-component
          v-for="option in options"
          :key="option"
          :pick="option"
          :picked="modelValue"
          @click="selectHandler(option)"
        />
      </div>
      <h1 class="text-h5 text-center q-my-md">Player: {{ playerScore }}</h1>
      <div class="text-center">
        <q-btn color="primary" @click="$emit('resetStats')">
          Reset stats
        </q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { computed } from 'vue'
import { options } from 'src/services/game-service'
import { useGameStore } from 'stores/game-store'
import PickComponent from 'components/PickComponent.vue'

defineProps({
  modelValue: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue', 'pick', 'resetStats'])

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
}
</style>
