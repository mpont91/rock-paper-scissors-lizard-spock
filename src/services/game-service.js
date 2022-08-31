const options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

const getRandomPick = () => options[Math.floor(Math.random() * options.length)]

const getWinner = (player, computer) => {
  if (player === computer) return 'draw'
  if (rules[player].includes(computer)) return 'player'
  return 'computer'
}

const getWinnerMessage = (winner) => {
  return messages[winner]
}

const messages = {
  draw: 'Draw!',
  player: 'You win!',
  computer: 'Computer wins!',
}

const rules = {
  Rock: ['Scissors', 'Lizard'],
  Paper: ['Rock', 'Spock'],
  Scissors: ['Paper', 'Lizard'],
  Lizard: ['Paper', 'Spock'],
  Spock: ['Rock', 'Scissors'],
}

export { options, getRandomPick, getWinner, getWinnerMessage }
