const chooseHorses = document.getElementsByClassName('choose-horse')
// const horseArray = chooseHorses
// const chooseSpade = document.querySelector('#choose-spade')
// const chooseClub = document.querySelector('#choose-club')
// const chooseHeart = document.querySelector('#choose-heart')
// const chooseDiamond = document.querySelector('#choose-diamond')
const horseButtons = document.querySelector('#horse-buttons')
const oneDollar = document.querySelector('#one-dollar')
const fiveDollars = document.querySelector('#five-dollars')
const tenDollars = document.querySelector('#ten-dollars')
const customWager = document.querySelector('#custom-wager')
const enterCustomWager = document.querySelector('#for-custom-wager')
const post = document.querySelector('#post')
const test = document.querySelector('#test')
let wager = null
// let spadeWager = null
// let clubWager = null
// let heartWager = null
// let diamondWager = null
const wagerAmounts = {
  one: 1,
  five: 5,
  ten: 10,
  custom: null
}

const addHorse = document.querySelector('#add-horse')
const forAddHorse = document.querySelector('#for-add-horse')
class Horse {
  constructor(name) {
    this.name = name
    this.flipCount = null
    this.wagerAmount = null
  }
  addWager() {
    this.wagerAmount += wager
    emptyWager()
  }
}

const horses = {}
// const newHorses = [].slice.call(chooseHorses)

///////////Globals above

const addHorses = () => {
  const newHorseButton = document.createElement('button')
  horseButtons.appendChild(newHorseButton)
  newHorseButton.classList.add('choose-horse')
  newHorseButton.id = `horse${chooseHorses.length - 1}`
  newHorseButton.innerText = addHorse.value.toUpperCase()
  horses[`${newHorseButton.id}`] = new Horse(`${addHorse.value}`)
  addHorse.value = ''
  if (Object.keys(horses).length === 8) {
    forAddHorse.removeEventListener('click', addHorses)
  }
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

//////////Functions above

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
    console.log(horses[`${e.target.id}`].wagerAmount)
  }
})

// delegation help from https://www.youtube.com/watch?v=XF1_MlZ5l6M

post.addEventListener('click', () => {
  sessionStorage.setItem('HORSES', JSON.stringify(horses))
})

// sessionStorage help https://www.youtube.com/watch?v=0eV-tf-W2rQ and https://www.javaguides.net/2019/05/javascript-sessionstorage-methods.html

// const chooseHorses = () => {
// //     switch (horse) {
//       case chooseSpade:
//         spadeWager += wager
//         emptyWager()
//         break
//       case chooseClub:
//         clubWager += wager
//         emptyWager()
//         break
//       case chooseHeart:
//         heartWager += wager
//         emptyWager()
//         break
//       case chooseDiamond:
//         diamondWager += wager
//         emptyWager()
//         break
//     }
//     console.log(
//       spadeWager,
//       clubWager,
//       heartWager,
//       diamondWager,
//       wager,
//       wagerAmounts.custom
//     )
//   })
// })
