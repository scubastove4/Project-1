const spade = document.querySelector('#spade')
const club = document.querySelector('#club')
const heart = document.querySelector('#heart')
const diamond = document.querySelector('#diamond')
const deck = document.querySelector('#card-deck')
const discard = document.querySelector('#discard')
const cardChoices = [spade, club, heart, diamond]
const flipCounts = {
  spade: null,
  club: null,
  heart: null,
  diamond: null
}

///////////Globals above
const chooseRandomCard = () => {
  const random = Math.ceil(Math.random() * cardChoices.length - 1)
  const card = cardChoices[random]
  return card
}

const moveHorse = () => {
  let randomCard = chooseRandomCard()
  switch (randomCard) {
    case spade:
      ++flipCounts.spade
      checkWinner('spade')
      break
    case club:
      ++flipCounts.club
      checkWinner('club')
      break
    case heart:
      ++flipCounts.heart
      checkWinner('heart')
      break
    case diamond:
      ++flipCounts.diamond
      checkWinner('diamond')
  }
  console.log(randomCard)
  console.log(flipCounts)
}
const checkWinner = (horse) => {
  if (flipCounts.spade === 8) {
    console.log('Spade wins!')
    deck.removeEventListener('click', moveHorse)
  }
  if (flipCounts.club === 8) {
    console.log('Club wins!')
    deck.removeEventListener('click', moveHorse)
  }
  if (flipCounts.heart === 8) {
    console.log('Heart wins!')
    deck.removeEventListener('click', moveHorse)
  }
  if (flipCounts.diamond === 8) {
    console.log('Diamond wins!')
    deck.removeEventListener('click', moveHorse)
  }
}

//////////Fucntions above

deck.addEventListener('click', moveHorse)
