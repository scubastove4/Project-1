const horses = JSON.parse(sessionStorage.getItem('HORSES'))
const announcements = document.querySelector('header')
const track = document.querySelector('main')
const deck = document.querySelector('#card-deck')
const discard = document.querySelector('#discard')
const cardChoices = Object.keys(horses)
const wagerDisplay = document.querySelector('#wager-pool')
const goBacks = document.querySelectorAll('.go-back')
let goBackCount = 1
let autoRun
const preakness = document.querySelector('#preakness')
const belmont = document.querySelector('#belmont')
const raceAgain = document.querySelector('#race-again')

///////////   Globals above //////////////

const createHorse = () => {
  Object.keys(horses).forEach((horse, index) => {
    const newDivWager = document.createElement('div')
    track.appendChild(newDivWager)
    newDivWager.classList.add(`horse${index}`)
    newDivWager.classList.add('info')
    newDivWager.innerText =
      horses[`${horse}`].name + ': ' + horses[`${horse}`].tcWagerAmount
    const newDivHorse = document.createElement('div')
    track.appendChild(newDivHorse)
    newDivHorse.classList.add('horse')
    newDivHorse.classList.add('post')
    newDivHorse.id = `horse${index}`
    newDivHorse.innerText = `${index + 1}`
  })
  sessionStorage.clear()
}

const poolWagers = () => {
  let allWagers = Object.keys(horses)
    .map((horse) => {
      return horses[`${horse}`].tcWagerAmount
    })
    .reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
  wagerDisplay.innerText = `Up for Grabs: ${parseInt(allWagers, 10)} points!`
  return parseInt(allWagers, 10)
}

const renderRandomHorse = () => {
  const random = Math.ceil(Math.random() * Object.keys(horses).length - 1)
  const card = cardChoices[random]
  return card
}

const renderRandomGoBackHorse = () => {
  let randomGoBackHorse = renderRandomHorse()
  Object.keys(horses).forEach((horse, index) => {
    if (horse === randomGoBackHorse) {
      let goBackClass = document.getElementById(`${randomGoBackHorse}`)
      goBackClass.classList.remove(
        'spot' + horses[`${randomGoBackHorse}`].flipCount
      )
      goBackClass.classList.add(
        'spot' + (horses[`${randomGoBackHorse}`].flipCount - 1)
      )
      --horses[`${randomGoBackHorse}`].flipCount
      goBackClass.style.animationName =
        'goBack' + horses[`${randomGoBackHorse}`].flipCount
      let goBackText = document.getElementById(`gb${goBackCount}`)
      goBackText.innerText = `${index + 1}`
      goBackText.style.backgroundImage = 'url(90-front-of-playing-card.png)'
      ++goBackCount
      allFlipCounts = []
    }
  })
}

const goBackSpot = () => {
  let allFlipCounts = []
  switch (goBackCount) {
    case 1:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 1) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        allFlipCounts = []
      }
      break
    case 2:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 2) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        allFlipCounts = []
      }
      break
    case 3:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 3) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        allFlipCounts = []
      }
      break
    case 4:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 4) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        allFlipCounts = []
      }
      break
    case 5:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 5) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        allFlipCounts = []
      }
      break
    case 6:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 6) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        allFlipCounts = []
      }
      break
    case 7:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 7) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        allFlipCounts = []
      }
  }
}

const payout = () => {
  let pool = poolWagers()
  let winners = []
  let winnersCounts = Object.keys(horses).filter((horse) => {
    return horses[`${horse}`].winCount >= 1
  })
  switch (winnersCounts.length) {
    case 3:
      console.log(winnersCounts)
      let splitThree = pool / 3
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 1) {
          winners.push(horses[`${horse}`].name)
          console.log(winners)
        }
      })
      wagerDisplay.innerText = `No Triple Crown today :( but ${winners[0]}, ${
        winners[1]
      }, ${
        winners[2]
      } split the series and backers take home $${+splitThree.toFixed(2)} each!`
      winners = []
      break
    case 2:
      console.log(winnersCounts)
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 2) {
          winners.push(horses[`${horse}`].name)
          console.log(winners)
        }
      })
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 1) {
          winners.push(horses[`${horse}`].name)
          console.log(winners)
        }
      })
      let bigPurse = Math.round(pool * 0.66)
      let smallPurse = Math.round(pool * 0.33)
      wagerDisplay.innerText = `Close but no cigar! With 2 wins ${
        winners[0]
        // need to add decimal limitations!
      } backers take home $${bigPurse}, and with 1 win ${
        winners[1]
      } backers take home $${smallPurse}!`
      winners = []
      break
    case 1:
      console.log(winnersCounts)
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 3) {
          winners.push(horses[`${horse}`].name)
          console.log(winners)
        }
      })
      wagerDisplay.innerText = `Hold on to your butts! ${winners[0]} HAS WON THE TRIPLE CROWN! Backers take home ${pool}!`
  }
}

const checkWinner = (raceWinner) => {
  if (horses[`${raceWinner}`].flipCount === 8) {
    ++horses[`${raceWinner}`].winCount
    horses[`${raceWinner}`].flipCount = null
    deck.removeEventListener('click', autoRunFunction)
    clearInterval(autoRun)
    let totalWins = []
    Object.keys(horses).forEach((horse) => {
      if (horses[`${horse}`].winCount >= 1) {
        totalWins.push(horses[`${horse}`].winCount)
      }
    })
    let leg = totalWins.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
    if (leg === 1) {
      wagerDisplay.innerText =
        horses[`${raceWinner}`].name + ` wins The Kentucky Derby!`
      preakness.style.display = 'initial'
      totalWins = []
      return
    } else if (leg === 2) {
      wagerDisplay.innerText =
        horses[`${raceWinner}`].name + ` wins The Preakness!`
      belmont.style.display = 'initial'
      totalWins = []
      return
    } else if (leg === 3) {
      payout()
      raceAgain.style.display = 'initial'
    }
  }
}

const moveHorse = () => {
  let randomHorse = renderRandomHorse()
  Object.keys(horses).forEach((horse, index) => {
    if (horse === randomHorse) {
      ++horses[`${randomHorse}`].flipCount
      let addClass = document.getElementById(`${randomHorse}`)
      addClass.classList.remove(
        'spot' + (horses[`${randomHorse}`].flipCount - 1)
      )
      addClass.classList.add('spot' + horses[`${randomHorse}`].flipCount)
      discard.style.backgroundImage = 'url(front-of-playing-card.png)'
      discard.innerText = `${index + 1}`
      addClass.style.animationName =
        'moveUp' + horses[`${randomHorse}`].flipCount
    }
    setTimeout(goBackSpot, 300)
    checkWinner(randomHorse)
  })
}

const autoRunFunction = () => {
  autoRun = setInterval(moveHorse, 1200)
  const audio = document.querySelector('audio')
  audio.play()
}

const nextRace = (e) => {
  let totalWins = []
  Object.keys(horses).forEach((horse, index) => {
    let removeClass = document.getElementById(`${horse}`)
    removeClass.classList.remove('spot' + horses[`${horse}`].flipCount)
    removeClass.classList.remove('spot8')
    horses[`${horse}`].flipCount = null
  })
  e.target.style.display = 'none'
  goBackCount = 1
  let pool = poolWagers()
  wagerDisplay.innerText = `Up for Grabs: $${pool}`
  deck.addEventListener('click', autoRunFunction)
  goBacks.forEach((goBack) => {
    goBack.innerText = ''
  })
  Object.keys(horses).forEach((horse) => {
    if (horses[`${horse}`].winCount >= 1) {
      totalWins.push(horses[`${horse}`].winCount)
    }
  })
  let leg = totalWins.reduce((accumulator, value) => {
    return accumulator + value
  }, 0)
  if (leg === 1) {
    announcements.innerText = 'The Preakness'
  } else if (leg === 2) {
    announcements.innerText = 'The Belmont Stakes'
  }
  goBacks.forEach((goBack) => {
    goBack.style.backgroundImage = 'url(90-vippng.com-joker-playing-card.png)'
  })
}

///////////   Function above //////////////

window.addEventListener('load', () => {
  createHorse()
  poolWagers()
  preakness.style.display = 'none'
  belmont.style.display = 'none'
  raceAgain.style.display = 'none'
  track.style.gridTemplateRows = `repeat(${Object.keys(horses).length + 1}, 1fr`
  goBacks.forEach((goBack) => {
    goBack.style.gridRowStart = `${Object.keys(horses).length + 1}`
    announcements.innerText = 'The Kentucky Derby'
  })
})

deck.addEventListener('click', autoRunFunction)

// Sound for race start https://www.audiomicro.com/start-of-horse-race-sports-games-start-of-horse-race-sound-effects-44772

preakness.addEventListener('click', nextRace)
belmont.addEventListener('click', nextRace)
