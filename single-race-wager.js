const chooseHorses = document.getElementsByClassName('choose-horse')
const horseButtons = document.querySelector('#horse-buttons')
const addHorse = document.querySelector('#add-horse')
const forAddHorse = document.querySelector('#for-add-horse')
const horses = {}
class Horse {
  constructor(name) {
    this.name = name
    this.flipCount = 0
    this.wagerAmount = 0
  }
  addWager() {
    this.wagerAmount += wager
    emptyWager()
  }
}
////// Horse above

const oneDollar = document.querySelector('#one-dollar')
const fiveDollars = document.querySelector('#five-dollars')
const tenDollars = document.querySelector('#ten-dollars')
const customWager = document.querySelector('#custom-wager')
const enterCustomWager = document.querySelector('#for-custom-wager')
let wager = null
const wagerAmounts = {
  one: 1,
  five: 5,
  ten: 10,
  custom: null
}
////// Wagers above

const post = document.querySelector('#post')
////// Move to next page above

///////////   Globals above //////////////

const horseMinumum = () => {
  if (Object.keys(horses).length < 2) {
    post.style.display = 'none'
  } else {
    post.style.display = 'initial'
  }
}

horseMinumum()

const addHorses = () => {
  const newHorseButton = document.createElement('button')
  horseButtons.appendChild(newHorseButton)
  newHorseButton.classList.add('choose-horse')
  newHorseButton.id = `horse${chooseHorses.length - 1}`
  newHorseButton.innerText = addHorse.value.toUpperCase()
  horses[`${newHorseButton.id}`] = new Horse(`${addHorse.value.toUpperCase()}`)
  addHorse.value = ''
  if (Object.keys(horses).length === 8) {
    forAddHorse.removeEventListener('click', addHorses)
  }
  horseMinumum()
}

const addOne = () => {
  wager += wagerAmounts.one
}
const addFive = () => {
  wager += wagerAmounts.five
}
const addTen = () => {
  wager += wagerAmounts.ten
}

const emptyWager = () => {
  wager = null
  customWager.value = ''
  wagerAmounts.custom = null
}

///////////   Function above //////////////

forAddHorse.addEventListener('click', addHorses)

oneDollar.addEventListener('click', addOne)
fiveDollars.addEventListener('click', addFive)
tenDollars.addEventListener('click', addTen)
enterCustomWager.addEventListener('click', () => {
  if (isNaN(customWager.value)) {
    alert('Please enter a number')
  } else if (customWager.value < 0) {
    alert('Please enter a positive number')
  } else {
    wagerAmounts.custom = parseInt(customWager.value, 10)
    wager += wagerAmounts.custom
  }
  customWager.value = ''
})

document.addEventListener('click', (e) => {
  if (e.target.matches('.choose-horse')) {
    horses[`${e.target.id}`].addWager()
    e.target.innerText =
      horses[`${e.target.id}`].name +
      ' $' +
      horses[`${e.target.id}`].wagerAmount
  }
})

// delegation help from https://www.youtube.com/watch?v=XF1_MlZ5l6M

post.addEventListener('click', () => {
  sessionStorage.setItem('HORSES', JSON.stringify(horses))
})

// sessionStorage help https://www.youtube.com/watch?v=0eV-tf-W2rQ and https://www.javaguides.net/2019/05/javascript-sessionstorage-methods.html
