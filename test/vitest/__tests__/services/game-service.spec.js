import { describe, it, expect } from 'vitest'
import {
  options,
  getComputerPick,
  getWinner,
  getWinnerMessage,
  getRulesDescription,
} from 'src/services/game-service'

const expectedOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']

describe('game-service', () => {
  it('options should have all possible picks', () => {
    expect(options).to.deep.equal(expectedOptions)
  })

  it('random pick should be one of the expected options', () => {
    const randomPick = getComputerPick()
    expect(expectedOptions).include(randomPick)
  })

  it('getWinner should follow the rules of the game', () => {
    const possibilities = {
      draw: [
        ['rock', 'rock'],
        ['paper', 'paper'],
        ['scissors', 'scissors'],
        ['lizard', 'lizard'],
        ['spock', 'spock'],
      ],
      player: [
        ['rock', 'scissors'],
        ['rock', 'lizard'],
        ['paper', 'rock'],
        ['paper', 'spock'],
        ['scissors', 'paper'],
        ['scissors', 'lizard'],
        ['lizard', 'paper'],
        ['lizard', 'spock'],
        ['spock', 'rock'],
        ['spock', 'scissors'],
      ],
      computer: [
        ['scissors', 'rock'],
        ['lizard', 'rock'],
        ['rock', 'paper'],
        ['spock', 'paper'],
        ['paper', 'scissors'],
        ['lizard', 'scissors'],
        ['paper', 'lizard'],
        ['spock', 'lizard'],
        ['rock', 'spock'],
        ['scissors', 'spock'],
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

  it('getRulesDescription should contain the right rules', () => {
    expect(getRulesDescription()).to.contain('Scissors cuts Paper')
    expect(getRulesDescription()).to.contain('Paper covers Rock')
    expect(getRulesDescription()).to.contain('Rock crushes Lizard')
    expect(getRulesDescription()).to.contain('Lizard poisons Spock')
    expect(getRulesDescription()).to.contain('Spock smashes Scissors')
    expect(getRulesDescription()).to.contain('Scissors decapitates Lizard')
    expect(getRulesDescription()).to.contain('Lizard eats Paper')
    expect(getRulesDescription()).to.contain('Paper disproves Spock')
    expect(getRulesDescription()).to.contain('Spock vaporizes Rock')
    expect(getRulesDescription()).to.contain(
      '(and as it always has) Rock crushes Scissors'
    )
  })
})
