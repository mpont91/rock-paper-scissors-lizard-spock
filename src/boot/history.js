import { boot } from 'quasar/wrappers'
import { LocalStorage } from 'quasar'
import { useGameStore } from 'stores/game-store'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ store, ssrContext }) => {
  if (ssrContext) {
    return
  }
  const gameStore = useGameStore(store)

  const showRulesFirstTime = LocalStorage.getItem('show-rules-first-time')
  const playerScore = LocalStorage.getItem('player-score')
  const computerScore = LocalStorage.getItem('computer-score')
  const playerHistory = LocalStorage.getItem('player-history')
  const computerHistory = LocalStorage.getItem('computer-history')

  if (showRulesFirstTime === 'hide') {
    gameStore.hideRulesFirstTime()
  }

  if (playerScore !== null) {
    gameStore.playerScore = playerScore
  }

  if (computerScore !== null) {
    gameStore.computerScore = computerScore
  }

  if (playerHistory !== null) {
    gameStore.playerHistory = playerHistory
  }

  if (computerHistory !== null) {
    gameStore.computerHistory = computerHistory
  }
})
