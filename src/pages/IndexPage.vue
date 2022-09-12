<template>
  <q-page>
    <toolbar-component @show-rules="showRules = true" />
    <computer-component :picked="computerPick" />
    <result-component :winner="winner" @reset="reset" />
    <player-component v-model="playerPick" @pick="start" />
    <rules-component :show-rules="showRulesFirstTime" @hide-rules="hideRules" />
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getRandomPick, getWinner } from 'src/services/game-service'
import { useGameStore } from 'stores/game-store'
import ToolbarComponent from 'components/ToolbarComponent.vue'
import ComputerComponent from 'components/ComputerComponent.vue'
import ResultComponent from 'components/ResultComponent.vue'
import PlayerComponent from 'components/PlayerComponent.vue'
import RulesComponent from 'components/RulesComponent.vue'

const gameStore = useGameStore()
const playerPick = ref()
const computerPick = ref()
const winner = ref()
const showRules = ref(false)
const showRulesFirstTime = computed(
  () => showRules.value || gameStore.showRulesFirstTime
)

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
const hideRules = () => {
  gameStore.hideRulesFirstTime()
  showRules.value = false
}
</script>
