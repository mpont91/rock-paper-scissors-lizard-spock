<template>
  <q-dialog
    :model-value="showBattle"
    transition-duration="600"
    @before-hide="$emit('reset')"
  >
    <q-card class="battle-card">
      <h1 class="text-h5 absolute-bottom-left q-mb-sm q-ml-sm">Player</h1>
      <pick-component
        class="player-pick absolute-bottom-left q-mb-sm q-ml-sm"
        :pick="playerPick"
      />
      <h1 class="text-h5 absolute-top-right q-mt-sm q-mr-sm">Computer</h1>
      <pick-component
        class="computer-pick absolute-top-right q-mt-sm q-mr-sm"
        :pick="computerPick"
      />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { watch } from 'vue'
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
})

watch(props, ({ showBattle }) => {
  if (showBattle) {
    setTimeout(() => {
      if (props.showBattle) {
        emit('reset')
      }
    }, 3500)
  }
})
</script>

<style scoped>
.battle-card {
  width: 700px;
  height: 700px;
  max-width: 90vw;
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
    left: 200px;
    bottom: 200px;
  }
}
@keyframes computer-move {
  from {
    right: 0;
    top: 0;
  }
  to {
    right: 200px;
    top: 200px;
  }
}
</style>
