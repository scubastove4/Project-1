const spade = document.querySelector('#spade')
const club = document.querySelector('#club')
const heart = document.querySelector('#heart')
const diamond = document.querySelector('#diamond')
const deck = document.querySelector('#card-deck')
const discard = document.querySelector('#discard')
const cardChoices = [spade, club, heart, diamond]
const raceAgain = document.querySelector('#raceAgain')
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
const moveHorse = (horse) => {
  if (horse === spade) {
    spade.classList.remove()
    spade.classList.add(`spot${flipCounts.spade}`)
  } else if (horse === club) {
    club.classList.remove()
    club.classList.add(`spot${flipCounts.club}`)
  } else if (horse === heart) {
    heart.classList.remove()
    heart.classList.add(`spot${flipCounts.heart}`)
  } else if (horse === diamond) {
    diamond.classList.remove()
    diamond.classList.add(`spot${flipCounts.diamond}`)
  }
}

const raceHorses = () => {
  let randomCard = chooseRandomCard()
  switch (randomCard) {
    case spade:
      ++flipCounts.spade
      checkWinner('spade')
      moveHorse(randomCard)
      break
    case club:
      ++flipCounts.club
      checkWinner('club')
      moveHorse(randomCard)
      break
    case heart:
      ++flipCounts.heart
      checkWinner('heart')
      moveHorse(randomCard)
      break
    case diamond:
      ++flipCounts.diamond
      checkWinner('diamond')
      moveHorse(randomCard)
  }
  console.log(randomCard)
  console.log(flipCounts)
}
const checkWinner = (horse) => {
  if (flipCounts.spade === 8) {
    console.log('Spade wins!')
    deck.removeEventListener('click', raceHorses)
    raceAgain.style.display = 'initial'
  }
  if (flipCounts.club === 8) {
    console.log('Club wins!')
    deck.removeEventListener('click', raceHorses)
    raceAgain.style.display = 'initial'
  }
  if (flipCounts.heart === 8) {
    console.log('Heart wins!')
    deck.removeEventListener('click', raceHorses)
    raceAgain.style.display = 'initial'
  }
  if (flipCounts.diamond === 8) {
    console.log('Diamond wins!')
    deck.removeEventListener('click', raceHorses)
    raceAgain.style.display = 'initial'
  }
}

//////////Fucntions above

deck.addEventListener('click', raceHorses)

window.addEventListener('load', () => {
  raceAgain.style.display = 'none'
})
