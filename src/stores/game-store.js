import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    rulesFirstTime: LocalStorage.getItem('show-rules-first-time') || 'show',
    playerScore: LocalStorage.getItem('player-score') || 0,
    computerScore: LocalStorage.getItem('computer-score') || 0,
    playerHistory: LocalStorage.getItem('player-history') || {
      rock: 0,
      paper: 0,
      scissors: 0,
      lizard: 0,
      spock: 0,
    },
    computerHistory: LocalStorage.getItem('computer-history') || {
      rock: 0,
      paper: 0,
      scissors: 0,
      lizard: 0,
      spock: 0,
    },
  }),
  getters: {
    showRulesFirstTime: (state) => state.rulesFirstTime === 'show',
  },
  actions: {
    incrementPlayerScore() {
      this.playerScore++
      LocalStorage.set('player-score', this.playerScore)
    },
    incrementComputerScore() {
      this.computerScore++
      LocalStorage.set('computer-score', this.computerScore)
    },
    incrementPlayerHistory(pick) {
      this.playerHistory[pick]++
      LocalStorage.set('player-history', this.playerHistory)
    },
    incrementComputerHistory(pick) {
      this.computerHistory[pick]++
      LocalStorage.set('computer-history', this.computerHistory)
    },
    updateScore(winner) {
      if (winner === 'player') this.incrementPlayerScore()
      else if (winner === 'computer') this.incrementComputerScore()
    },
    resetScore() {
      LocalStorage.remove('player-score')
      LocalStorage.remove('computer-score')
      this.playerScore = 0
      this.computerScore = 0
    },
    resetHistory() {
      LocalStorage.remove('player-history')
      LocalStorage.remove('computer-history')
      this.playerScore = {
        rock: 0,
        paper: 0,
        scissors: 0,
        lizard: 0,
        spock: 0,
      }
      this.computerScore = {
        rock: 0,
        paper: 0,
        scissors: 0,
        lizard: 0,
        spock: 0,
      }
    },
    hideRulesFirstTime() {
      LocalStorage.set('show-rules-first-time', 'hide')
      this.rulesFirstTime = 'hide'
    },
  },
})
