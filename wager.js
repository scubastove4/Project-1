const chooseHorse = document.querySelectorAll('.choose-horse')
const chooseSpade = document.querySelector('#choose-spade')
const chooseClub = document.querySelector('#choose-club')
const chooseHeart = document.querySelector('#choose-heart')
const chooseDiamond = document.querySelector('#choose-diamond')
const oneDollar = document.querySelector('#one-dollar')
const fiveDollars = document.querySelector('#five-dollars')
const tenDollars = document.querySelector('#ten-dollars')
const customWager = document.querySelector('#custom-wager')
const enterCustomWager = document.querySelector('#for-custom-wager')
let wager = null
let spadeWager = null
let clubWager = null
let heartWager = null
let diamondWager = null
const wagerAmounts = {
  one: 1,
  five: 5,
  ten: 10,
  custom: null
}
///////////Globals above

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

// const pickHorse = (e) => {
//   switch (e) {
//     case chooseSpade:
//       spadeWager = wager
//       emptyWager()
//       break
//     case chooseClub:
//       clubWager = wager
//       emptyWager()
//       break
//     case chooseHeart:
//       heartWager = wager
//       emptyWager()
//       break
//     case chooseDiamond:
//       diamondWager = wager
//       emptyWager()
//       break
//   }
//   console.log(
//     spadeWager,
//     clubWager,
//     heartWager,
//     diamondWager,
//     wager,
//     wagerAmounts.custom
//   )
// }
//////////Fucntions above

oneDollar.addEventListener('click', addOne)
fiveDollars.addEventListener('click', addFive)
tenDollars.addEventListener('click', addTen)
enterCustomWager.addEventListener('click', () => {
  if (isNaN(customWager.value)) {
    alert('Please enter a number')
  } else {
    wagerAmounts.custom = parseInt(customWager.value, 10)
    wager += wagerAmounts.custom
  }
  customWager.value = ''
})

chooseHorse.forEach((horse) => {
  horse.addEventListener('click', () => {
    switch (horse) {
      case chooseSpade:
        spadeWager = wager
        emptyWager()
        break
      case chooseClub:
        clubWager = wager
        emptyWager()
        break
      case chooseHeart:
        heartWager = wager
        emptyWager()
        break
      case chooseDiamond:
        diamondWager = wager
        emptyWager()
        break
    }
    console.log(
      spadeWager,
      clubWager,
      heartWager,
      diamondWager,
      wager,
      wagerAmounts.custom
    )
  })
})
