<template>
  <q-page>
    <computer-component :picked="computerPick" />
    <result-component :winner="winner" />
    <player-component v-model="playerPick" @pick="start" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { getRandomPick, getWinner } from 'src/services/game-service'
import ComputerComponent from 'components/ComputerComponent.vue'
import ResultComponent from 'components/ResultComponent.vue'
import PlayerComponent from 'components/PlayerComponent.vue'

const playerPick = ref(null)
const computerPick = ref(null)
const winner = ref(null)

const start = () => {
  computerPick.value = getRandomPick()
  winner.value = getWinner(playerPick.value, computerPick.value)

  setTimeout(() => {
    reset()
  }, 1000)
}

const reset = () => {
  winner.value = null
  playerPick.value = null
  computerPick.value = null
}
</script>
