const horses = JSON.parse(sessionStorage.getItem('HORSES'))
const track = document.querySelector('main')
const deck = document.querySelector('#card-deck')
const discard = document.querySelector('#discard')
const cardChoices = Object.keys(horses)
const wagerDisplay = document.querySelector('#wager-pool')
const goBacks = document.querySelectorAll('.go-back')
let goBackCount = 1
let autoRun
const raceAgain = document.querySelector('#race-again')

///////////   Globals above //////////////

const createHorse = () => {
  Object.keys(horses).forEach((horse, index) => {
    const newDivWager = document.createElement('div')
    track.appendChild(newDivWager)
    newDivWager.classList.add(`horse${index}`)
    newDivWager.classList.add('size')
    newDivWager.innerText =
      horses[`${horse}`].name + ': ' + horses[`${horse}`].wagerAmount
    const newDivHorse = document.createElement('div')
    track.appendChild(newDivHorse)
    newDivHorse.classList.add('post')
    newDivHorse.classList.add('size')
    newDivHorse.id = `horse${index}`
  })
  sessionStorage.clear()
}

const poolWagers = () => {
  let allWagers = Object.keys(horses)
    .map((horse) => {
      return horses[`${horse}`].wagerAmount
    })
    .reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
  wagerDisplay.innerText = `Up for Grabs: $${parseInt(allWagers, 10)}`
  return parseInt(allWagers, 10)
}

const renderRandomHorse = () => {
  const random = Math.ceil(Math.random() * Object.keys(horses).length - 1)
  const card = cardChoices[random]
  return card
}

const payout = (winningHorse) => {
  let pool = poolWagers()
  let winnersWager = parseInt(horses[`${winningHorse}`].wagerAmount, 10)
  return pool - winnersWager
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
      let goBackText = document.getElementById(`gb${goBackCount}`)
      goBackText.innerText = horses[`${randomGoBackHorse}`].name
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
        flipCount = []
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
        flipCount = []
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
        flipCount = []
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
        flipCount = []
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
        flipCount = []
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
        flipCount = []
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
        flipCount = []
      }
      break
    case 8:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 8) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
      break
    case 9:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 9) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
      break
    case 10:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 10) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
      break
    case 11:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 11) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
      break
    case 12:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 12) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
      break
    case 13:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 13) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
      break
    case 14:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 14) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
      break
    case 15:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].flipCount >= 15) {
          allFlipCounts.push(horse)
        }
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      } else {
        flipCount = []
      }
  }
}

const checkWinner = (horse) => {
  if (horses[`${horse}`].flipCount === 16) {
    deck.removeEventListener('click', autoRunFunction)
    clearInterval(autoRun)
    let winnerPayout = payout(horse)
    wagerDisplay.innerText =
      horses[`${horse}`].name + ` wins! Backers collect $${winnerPayout}!`
    raceAgain.style.display = 'initial'
    return true
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
      discard.innerText = horses[`${randomHorse}`].name
    }
    setTimeout(goBackSpot, 500)
    checkWinner(randomHorse)
  })
}

const autoRunFunction = () => {
  autoRun = setInterval(moveHorse, 1000)
}

// Help for setInterval https://youtu.be/GhePFBkdNYk

///////////   Function above //////////////

window.addEventListener('load', () => {
  createHorse()
  poolWagers()
  raceAgain.style.display = 'none'
  track.style.gridTemplateRows = `repeat(${Object.keys(horses).length + 1}, 1fr`
  goBacks.forEach((goBack) => {
    goBack.style.gridRowStart = `${Object.keys(horses).length + 1}`
  })
})

deck.addEventListener('click', autoRunFunction)
