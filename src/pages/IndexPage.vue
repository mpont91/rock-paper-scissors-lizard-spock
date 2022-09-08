<template>
  <q-page>
    <toolbar-component />
    <computer-component :picked="computerPick" />
    <result-component :winner="winner" @reset="reset" />
    <player-component v-model="playerPick" @pick="start" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { getRandomPick, getWinner } from 'src/services/game-service'
import { useGameStore } from 'stores/game-store'
import ToolbarComponent from 'components/ToolbarComponent.vue'
import ComputerComponent from 'components/ComputerComponent.vue'
import ResultComponent from 'components/ResultComponent.vue'
import PlayerComponent from 'components/PlayerComponent.vue'

const gameStore = useGameStore()
const playerPick = ref()
const computerPick = ref()
const winner = ref()

const start = () => {
  computerPick.value = getRandomPick()
  winner.value = getWinner(playerPick.value, computerPick.value)
  gameStore.updateScore(winner.value)
  gameStore.incrementPlayerHistory(playerPick.value)
  gameStore.incrementComputerHistory(computerPick.value)
}
const reset = () => {
  winner.value = null
  playerPick.value = null
  computerPick.value = null
}
</script>
