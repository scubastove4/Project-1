// const spade = document.querySelector('#spade')
// const club = document.querySelector('#club')
// const heart = document.querySelector('#heart')
// const diamond = document.querySelector('#diamond')
const horses = JSON.parse(sessionStorage.getItem('HORSES'))
const track = document.querySelector('main')
const deck = document.querySelector('#card-deck')
const discard = document.querySelector('#discard')
const cardChoices = Object.keys(horses)
const raceAgain = document.querySelector('#raceAgain')

// const flipCounts = {
//   spade: null,
//   club: null,
//   heart: null,
//   diamond: null
// }
///////////Globals above

console.log(horses)
console.log(cardChoices)

const createHorse = () => {
  Object.keys(horses).forEach((horse, index) => {
    const newDiv = document.createElement('div')
    track.appendChild(newDiv)
    newDiv.classList.add('post')
    newDiv.classList.add('size')
    newDiv.id = `horse${index}`
  })
}

const chooseRandomCard = () => {
  const random = Math.ceil(Math.random() * Object.keys(horses).length - 1)
  const card = cardChoices[random]
  return card
}

const poolWagers = () => {
  let allWagers = Object.keys(horses)
    .map((horse) => {
      return horses[`${horse}`].wagerAmount
    })
    .reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
  console.log(allWagers)
}

const checkWinner = (horse) => {
  if (horses[`${horse}`].flipCount === 8) {
    deck.removeEventListener('click', moveHorse)
    console.log(horses[`${horse}`].name + ' wins!')
  }
}

const moveHorse = () => {
  let randomHorse = chooseRandomCard()
  Object.keys(horses).forEach((horse, index) => {
    if (horse === randomHorse) {
      ++horses[`${randomHorse}`].flipCount
      let addClass = document.getElementById(`${randomHorse}`)
      addClass.classList.remove(
        'post',
        'spot' + (horses[`${randomHorse}`].flipCount - 1)
      )
      addClass.classList.add('spot' + horses[`${randomHorse}`].flipCount)
      console.log(horses[`${randomHorse}`])
    }
    checkWinner(randomHorse)
  })
}

//   if (flipCounts.spade === 8) {
//     console.log('Spade wins!')
//     deck.removeEventListener('click', raceHorses)
//     raceAgain.style.display = 'initial'
//   }
//   if (flipCounts.club === 8) {
//     console.log('Club wins!')
//     deck.removeEventListener('click', raceHorses)
//     raceAgain.style.display = 'initial'
//   }
//   if (flipCounts.heart === 8) {
//     console.log('Heart wins!')
//     deck.removeEventListener('click', raceHorses)
//     raceAgain.style.display = 'initial'
//   }
//   if (flipCounts.diamond === 8) {
//     console.log('Diamond wins!')
//     deck.removeEventListener('click', raceHorses)
//     raceAgain.style.display = 'initial'
//   }
// }
//   if (card === spade) {
//     spade.classList.remove()
//     spade.classList.add(`spot${flipCounts.spade}`)
//   } else if (horse === club) {
//     club.classList.remove()
//     club.classList.add(`spot${flipCounts.club}`)
//   } else if (horse === heart) {
//     heart.classList.remove()
//     heart.classList.add(`spot${flipCounts.heart}`)
//   } else if (horse === diamond) {
//     diamond.classList.remove()
//     diamond.classList.add(`spot${flipCounts.diamond}`)
//   }
// }

// const raceHorses = () => {
//   let randomCard = chooseRandomCard()
//   switch (randomCard) {
//     case spade:
//       ++flipCounts.spade
//       checkWinner('spade')
//       moveHorse(randomCard)
//       break
//     case club:
//       ++flipCounts.club
//       checkWinner('club')
//       moveHorse(randomCard)
//       break
//     case heart:
//       ++flipCounts.heart
//       checkWinner('heart')
//       moveHorse(randomCard)
//       break
//     case diamond:
//       ++flipCounts.diamond
//       checkWinner('diamond')
//       moveHorse(randomCard)
//   }
//   console.log(randomCard)
//   console.log(flipCounts)
// }
//////////Fucntions above

deck.addEventListener('click', moveHorse)

window.addEventListener('load', () => {
  createHorse()
  poolWagers()
  raceAgain.style.display = 'none'
  track.style.gridTemplateRows = `repeat(${Object.keys(horses).length}, 1fr`
})
