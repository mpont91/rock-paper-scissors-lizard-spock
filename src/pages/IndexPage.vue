<template>
  <q-page>
    <toolbar-component @show-rules="showRules = true" />
    <computer-component :picked="computerPick" />
    <battle-component
      :show-battle="showBattle"
      :player-pick="playerPick"
      :computer-pick="computerPick"
      :winner="winner"
      @reset="endBattle"
    />
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
import ToolbarComponent from 'components/ToolbarComponent.vue'
import ComputerComponent from 'components/ComputerComponent.vue'
import ResultComponent from 'components/ResultComponent.vue'
import PlayerComponent from 'components/PlayerComponent.vue'
import RulesComponent from 'components/RulesComponent.vue'
import BattleComponent from 'components/BattleComponent.vue'

const gameStore = useGameStore()
const playerPick = ref()
const computerPick = ref()
const winner = ref()
const showResult = ref(false)
const showBattle = ref(false)
const showRules = ref(false)
const showRulesFirstTime = computed(
  () => showRules.value || gameStore.showRulesFirstTime
)

const startBattle = () => {
  computerPick.value = getComputerPick()
  winner.value = getWinner(playerPick.value, computerPick.value)
  showBattle.value = true
}
const endBattle = () => {
  showBattle.value = false
  showResult.value = true
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
