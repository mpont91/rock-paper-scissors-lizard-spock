const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']

const getRandomPick = () => options[Math.floor(Math.random() * options.length)]

const getWinner = (player, computer) => {
  if (player === computer) return 'draw'
  else if (rules[player].includes(computer)) return 'player'
  else return 'computer'
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
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
}

export { options, getRandomPick, getWinner, getWinnerMessage }
