<template>
  <q-page>
    <the-header-component @show-rules="showRules = true" />
    <computer-component :picked="computerPick" />
    <result-component
      :show-result="showResult"
      :winner="winner"
      @reset="resetGame"
    />
    <player-component
      v-model="playerPick"
      @pick="startBattle"
      @reset-stats="resetStats"
    />
    <rules-component :show-rules="showRulesFirstTime" @hide-rules="hideRules" />
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getComputerPick, getWinner } from 'src/services/game-service'
import { useGameStore } from 'stores/game-store'
import TheHeaderComponent from 'components/TheHeaderComponent.vue'
import ComputerComponent from 'components/ComputerComponent.vue'
import ResultComponent from 'components/ResultComponent.vue'
import PlayerComponent from 'components/PlayerComponent.vue'
import RulesComponent from 'components/RulesComponent.vue'

const gameStore = useGameStore()
const playerPick = ref()
const computerPick = ref()
const winner = ref()
const showResult = ref(false)
const showRules = ref(false)
const showRulesFirstTime = computed(
  () => showRules.value || gameStore.showRulesFirstTime,
)

const startBattle = () => {
  computerPick.value = getComputerPick()
  winner.value = getWinner(playerPick.value, computerPick.value)
  showResult.value = true
  updateScore()
}
const updateScore = () => {
  gameStore.updateScore(winner.value)
  gameStore.incrementPlayerHistory(playerPick.value)
  gameStore.incrementComputerHistory(computerPick.value)
}
const resetGame = () => {
  showResult.value = null
  winner.value = null
  playerPick.value = null
  computerPick.value = null
}
const hideRules = () => {
  gameStore.hideRulesFirstTime()
  showRules.value = false
}
const resetStats = () => {
  gameStore.reset()
}
</script>
