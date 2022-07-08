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
const raceAgain = document.querySelector('#race-again')
const raAnchorTag = document.querySelector('.race-again')

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
      if (index % 2 === 0) {
        goBackText.classList.remove('color1')
        goBackText.classList.add('color0')
      } else {
        goBackText.classList.remove('color0')
        goBackText.classList.add('color1')
      }
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

const media1700 = (windowSize) => {
  if (windowSize.matches) {
    announcements.style.fontSize = '3rem'
  } else {
    announcements.style.fontSize = '2rem'
  }
}
// Media query in JS help https://www.w3schools.com/howto/howto_js_media_queries.asp

const payout = () => {
  let pool = poolWagers()
  let winners = []
  let winnersCounts = Object.keys(horses).filter((horse) => {
    return horses[`${horse}`].winCount >= 1
  })
  let wind1700 = window.matchMedia('(min-width: 1700px)')
  switch (winnersCounts.length) {
    case 3:
      let splitThree = pool / 3
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 1) {
          winners.push(horses[`${horse}`].name)
        }
      })
      media1700(wind1700)
      announcements.innerText = `No Triple Crown today... but ${winners[0]}, ${
        winners[1]
      }, ${
        winners[2]
      } split the series and backers take home ${+splitThree.toFixed(
        2
      )} points each!`
      winners = []
      break
    case 2:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 2) {
          winners.push(horses[`${horse}`].name)
        }
      })
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 1) {
          winners.push(horses[`${horse}`].name)
        }
      })
      let bigPurse = Math.round(pool * 0.66)
      let smallPurse = Math.round(pool * 0.33)
      media1700(wind1700)
      announcements.innerText = `Close but no cigar! With 2 wins ${winners[0]} backers take home ${bigPurse} points, and with 1 win ${winners[1]} backers take home ${smallPurse} points!`
      winners = []
      break
    case 1:
      Object.keys(horses).forEach((horse) => {
        if (horses[`${horse}`].winCount === 3) {
          winners.push(horses[`${horse}`].name)
        }
      })
      media1700(wind1700)
      announcements.innerText = `Hold on to your butts! ${winners[0]} HAS WON THE TRIPLE CROWN! Backers take home ${pool} points!`
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
      announcements.innerText =
        horses[`${raceWinner}`].name + ` wins The Kentucky Derby!`
      raceAgain.style.display = 'initial'
      raceAgain.innerText = 'Next leg: The Preakness'
      raAnchorTag.style.display = 'initial'
      raAnchorTag.setAttribute('href', '#')
      totalWins = []
      return
    } else if (leg === 2) {
      announcements.innerText =
        horses[`${raceWinner}`].name + ` wins The Preakness!`
      raceAgain.style.display = 'initial'
      raceAgain.innerText = 'Final leg: The Belmont Stakes'
      raAnchorTag.style.display = 'initial'
      raAnchorTag.setAttribute('href', '#')
      totalWins = []
      return
    } else if (leg === 3) {
      payout()
      raceAgain.style.display = 'initial'
      raceAgain.innerText = 'Race Again'
      raAnchorTag.style.display = 'initial'
      raAnchorTag.setAttribute('href', 'tc-wager.html')
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
      if (index % 2 === 0) {
        discard.classList.remove('color1')
        discard.classList.add('color0')
      } else {
        discard.classList.remove('color0')
        discard.classList.add('color1')
      }
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
  raceAgain.style.display = 'none'
  goBackCount = 1
  let pool = poolWagers()
  wagerDisplay.innerText = `Up for Grabs: ${pool}`
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
  raceAgain.style.display = 'none'
  track.style.gridTemplateRows = `repeat(${Object.keys(horses).length + 1}, 1fr`
  goBacks.forEach((goBack) => {
    goBack.style.gridRowStart = `${Object.keys(horses).length + 1}`
    announcements.innerText = 'The Kentucky Derby'
  })
})

deck.addEventListener('click', autoRunFunction)

// Sound for race start https://www.audiomicro.com/start-of-horse-race-sports-games-start-of-horse-race-sound-effects-44772

raceAgain.addEventListener('click', nextRace)
