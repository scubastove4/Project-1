const horses = JSON.parse(sessionStorage.getItem('HORSES'))
const track = document.querySelector('main')
const deck = document.querySelector('#card-deck')
const discard = document.querySelector('#discard')
const cardChoices = Object.keys(horses)
const raceAgain = document.querySelector('#raceAgain')

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
  sessionStorage.clear()
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
  // console.log(parseInt(allWagers, 10))
  return parseInt(allWagers, 10)
}

const payout = (winningHorse) => {
  let pool = poolWagers()
  let winnersWager = parseInt(horses[`${winningHorse}`].wagerAmount, 10)
  console.log(pool - winnersWager)
}

const checkWinner = (horse) => {
  if (horses[`${horse}`].flipCount === 8) {
    deck.removeEventListener('click', moveHorse)
    console.log(horses[`${horse}`].name + ' wins!')
    payout(horse)
    raceAgain.style.display = 'initial'
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
      // console.log(horses[`${randomHorse}`])
    }
    checkWinner(randomHorse)
  })
}

//////////Fucntions above

deck.addEventListener('click', moveHorse)

window.addEventListener('load', () => {
  createHorse()
  poolWagers()
  raceAgain.style.display = 'none'
  track.style.gridTemplateRows = `repeat(${Object.keys(horses).length}, 1fr`
})
