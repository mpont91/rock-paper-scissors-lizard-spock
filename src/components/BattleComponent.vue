<template>
  <q-dialog
    :model-value="showBattle"
    transition-duration="600"
    @before-hide="$emit('reset')"
  >
    <q-card class="battle-card">
      <h1 class="text-h5 absolute-bottom-left q-mb-sm q-ml-sm">Player</h1>
      <pick-component
        v-if="showPlayerPick"
        class="player-pick absolute-bottom-left q-mb-sm q-ml-sm"
        :pick="playerPick"
      />
      <h1 class="text-h5 absolute-top-right q-mt-sm q-mr-sm">Computer</h1>
      <pick-component
        v-if="showComputerPick"
        class="computer-pick absolute-top-right q-mt-sm q-mr-sm"
        :pick="computerPick"
      />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { options } from 'src/services/game-service'
import PickComponent from 'components/PickComponent.vue'

const emit = defineEmits(['reset'])
const props = defineProps({
  showBattle: {
    type: Boolean,
    default: false,
  },
  playerPick: {
    type: String,
    default: null,
    validator: (value) => options.includes(value),
  },
  computerPick: {
    type: String,
    default: null,
    validator: (value) => options.includes(value),
  },
  winner: {
    type: String,
    default: null,
    validator: (value) => ['draw', 'player', 'computer'].includes(value),
  },
})
const showPlayerPick = ref(true)
const showComputerPick = ref(true)
const hideLoser = () => {
  if (props.winner === 'player') {
    showComputerPick.value = false
  } else if (props.winner === 'computer') {
    showPlayerPick.value = false
  }
}
const emitReset = () => {
  emit('reset')
}
let hideLoserTimeout = null
let emitResetTimeout = null
watch(props, ({ showBattle }) => {
  if (showBattle) {
    hideLoserTimeout = setTimeout(hideLoser, 1000)
    emitResetTimeout = setTimeout(emitReset, 3500)
  } else {
    clearTimeout(emitResetTimeout)
    clearTimeout(hideLoserTimeout)
    emitResetTimeout = null
    hideLoserTimeout = null
    showPlayerPick.value = true
    showComputerPick.value = true
  }
})
</script>

<style scoped>
.battle-card {
  width: 700px;
  height: 400px;
  max-width: 90vw;
  max-height: 80vh;
}

.player-pick {
  animation: player-move 2s forwards;
}

.computer-pick {
  animation: computer-move 2s forwards;
}

@keyframes player-move {
  from {
    left: 0;
    bottom: 0;
  }
  to {
    left: 40%;
    bottom: 30%;
  }
}
@keyframes computer-move {
  from {
    right: 0;
    top: 0;
  }
  to {
    right: 40%;
    top: 30%;
  }
}
</style>
