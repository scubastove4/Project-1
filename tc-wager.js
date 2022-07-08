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
    this.tcWagerAmount = 0
    this.winCount = null
  }
  addWager() {
    this.wagerAmount += wager
    emptyWager()
  }
  tcAddWager() {
    this.tcWagerAmount += tcWager
    tcEmptyWager()
  }
}
////// Horse above

const tcOneDollar = document.querySelector('#tc-one-dollar')
const tcFiveDollars = document.querySelector('#tc-five-dollars')
const tcTenDollars = document.querySelector('#tc-ten-dollars')
const tcCustomWager = document.querySelector('#tc-custom-wager')
const tcEnterCustomWager = document.querySelector('#tc-for-custom-wager')
let tcWager = null
const tcWagerAmounts = {
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

const tcAddOne = () => {
  tcWager += tcWagerAmounts.one
}

const tcAddFive = () => {
  tcWager += tcWagerAmounts.five
}

const tcAddTen = () => {
  tcWager += tcWagerAmounts.ten
}

const tcEmptyWager = () => {
  tcWager = null
  tcCustomWager.value = ''
  tcWagerAmounts.custom = null
}

///////////   Function above //////////////

forAddHorse.addEventListener('click', addHorses)

tcOneDollar.addEventListener('click', tcAddOne)
tcFiveDollars.addEventListener('click', tcAddFive)
tcTenDollars.addEventListener('click', tcAddTen)
tcEnterCustomWager.addEventListener('click', () => {
  if (isNaN(tcCustomWager.value)) {
    alert('Please enter a number')
  } else if (tcCustomWager.value < 0) {
    alert('Please enter a positive number')
  } else {
    tcWagerAmounts.custom = parseInt(tcCustomWager.value, 10)
    tcWager += tcWagerAmounts.custom
  }
  tcCustomWager.value = ''
})

document.addEventListener('click', (e) => {
  if (e.target.matches('.choose-horse')) {
    horses[`${e.target.id}`].tcAddWager()
    e.target.innerText =
      horses[`${e.target.id}`].name +
      ': ' +
      horses[`${e.target.id}`].tcWagerAmount +
      ' pts'
  }
})

// delegation help from https://www.youtube.com/watch?v=XF1_MlZ5l6M

post.addEventListener('click', () => {
  sessionStorage.setItem('HORSES', JSON.stringify(horses))
})

// sessionStorage help https://www.youtube.com/watch?v=0eV-tf-W2rQ and https://www.javaguides.net/2019/05/javascript-sessionstorage-methods.html
