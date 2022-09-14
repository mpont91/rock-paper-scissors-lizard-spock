const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const getComputerPick = () => {
  return randomPick()
}

const getWinner = (player, computer) => {
  if (player === computer) return 'draw'
  else if (rules[player].includes(computer)) return 'player'
  else return 'computer'
}

const getWinnerMessage = (winner) => {
  return messages[winner]
}

const getRulesDescription = () => {
  return rulesDescription
}

const randomPick = () => options[Math.floor(Math.random() * options.length)]

const messages = {
  draw: 'Draw!',
  player: 'You win!',
  computer: 'Computer wins!',
}

const rules = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
}

const rulesDescription = [
  'Scissors cuts Paper',
  'Paper covers Rock',
  'Rock crushes Lizard',
  'Lizard poisons Spock',
  'Spock smashes Scissors',
  'Scissors decapitates Lizard',
  'Lizard eats Paper',
  'Paper disproves Spock',
  'Spock vaporizes Rock',
  '(and as it always has) Rock crushes Scissors',
]

export {
  options,
  getComputerPick,
  getWinner,
  getWinnerMessage,
  getRulesDescription,
}
