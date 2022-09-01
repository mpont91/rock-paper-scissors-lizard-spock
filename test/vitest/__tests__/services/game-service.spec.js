import { describe, it, expect } from 'vitest'
import {
  options,
  getRandomPick,
  getWinner,
  getWinnerMessage,
} from 'src/services/game-service'

const expectedOptions = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

describe('game-service', () => {
  it('options should have all possible picks', () => {
    expect(options).to.deep.equal(expectedOptions)
  })

  it('random pick should be one of the expected options', () => {
    const randomPick = getRandomPick()
    expect(expectedOptions).include(randomPick)
  })

  it('getWinner should follow the rules of the game', () => {
    const possibilities = {
      draw: [
        ['Rock', 'Rock'],
        ['Paper', 'Paper'],
        ['Scissors', 'Scissors'],
        ['Lizard', 'Lizard'],
        ['Spock', 'Spock'],
      ],
      player: [
        ['Rock', 'Scissors'],
        ['Rock', 'Lizard'],
        ['Paper', 'Rock'],
        ['Paper', 'Spock'],
        ['Scissors', 'Paper'],
        ['Scissors', 'Lizard'],
        ['Lizard', 'Paper'],
        ['Lizard', 'Spock'],
        ['Spock', 'Rock'],
        ['Spock', 'Scissors'],
      ],
      computer: [
        ['Scissors', 'Rock'],
        ['Lizard', 'Rock'],
        ['Rock', 'Paper'],
        ['Spock', 'Paper'],
        ['Paper', 'Scissors'],
        ['Lizard', 'Scissors'],
        ['Paper', 'Lizard'],
        ['Spock', 'Lizard'],
        ['Rock', 'Spock'],
        ['Scissors', 'Spock'],
      ],
    }

    possibilities.draw.forEach((picks) => {
      expect(getWinner(picks[0], picks[1])).to.equal('draw')
    })
    possibilities.player.forEach((picks) => {
      expect(getWinner(picks[0], picks[1])).to.equal('player')
    })
    possibilities.computer.forEach((picks) => {
      expect(getWinner(picks[0], picks[1])).to.equal('computer')
    })
  })

  it('getWinnerMessage should return the correct message', () => {
    expect(getWinnerMessage('draw')).to.equal('Draw!')
    expect(getWinnerMessage('player')).to.equal('You win!')
    expect(getWinnerMessage('computer')).to.equal('Computer wins!')
  })
})
