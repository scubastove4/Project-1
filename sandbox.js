const renderRandomGoBackHorse = () => {
  // chooseRandomCard()
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
      let goBackText = getElementById(`gb${goBackCount}`)
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
      allFlipCounts = Object.keys(horses).map((horse) => {
        return horses[`${horse}`].flipcount >= 1
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      }
      break
    case 2:
      allFlipCounts = Object.keys(horses).map((horse) => {
        return horses[`${horse}`].flipcount >= 2
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      }
      break
    case 3:
      allFlipCounts = Object.keys(horses).map((horse) => {
        return horses[`${horse}`].flipcount >= 3
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      }
      break
    case 4:
      allFlipCounts = Object.keys(horses).map((horse) => {
        return horses[`${horse}`].flipcount >= 4
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      }
      break
    case 5:
      allFlipCounts = Object.keys(horses).map((horse) => {
        return horses[`${horse}`].flipcount >= 5
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      }
      break
    case 6:
      allFlipCounts = Object.keys(horses).map((horse) => {
        return horses[`${horse}`].flipcount >= 6
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      }
      break
    case 7:
      allFlipCounts = Object.keys(horses).map((horse) => {
        return horses[`${horse}`].flipcount >= 7
      })
      if (allFlipCounts.length === Object.keys(horses).length) {
        renderRandomGoBackHorse()
      }
  }
}

// const goBackSpot = () => {
//   switch (goBackCount) {
//     case 1:
//       if (
//         Object.keys(horses).every((horse) => {
//           return horses[`${horse}`].flipcount >= 1
//         })
//       ) {
//         renderRandomGoBackHorse()
//       }
//       break
//     case 2:
//       if (
//         Object.keys(horses).every(
//           Object.keys(horses).every((horse) => {
//             return horses[`${horse}`].flipcount >= 2
//           })
//         )
//       ) {
//         renderRandomGoBackHorse()
//       }
//       break
//     case 3:
//       if (
//         Object.keys(horses).every(
//           Object.keys(horses).every((horse) => {
//             return horses[`${horse}`].flipcount >= 3
//           })
//         )
//       ) {
//         renderRandomGoBackHorse()
//       }
//       break
//     case 4:
//       if (
//         Object.keys(horses).every(
//           Object.keys(horses).every((horse) => {
//             return horses[`${horse}`].flipcount >= 4
//           })
//         )
//       ) {
//         renderRandomGoBackHorse()
//       }
//       break
//     case 5:
//       if (
//         Object.keys(horses).every(
//           Object.keys(horses).every((horse) => {
//             return horses[`${horse}`].flipcount >= 5
//           })
//         )
//       ) {
//         renderRandomGoBackHorse()
//       }
//       break
//     case 6:
//       if (
//         Object.keys(horses).every(
//           Object.keys(horses).every((horse) => {
//             return horses[`${horse}`].flipcount >= 6
//           })
//         )
//       ) {
//         renderRandomGoBackHorse()
//       }
//       break
//     case 7:
//       if (
//         Object.keys(horses).every(
//           Object.keys(horses).every((horse) => {
//             return horses[`${horse}`].flipcount >= 7
//           })
//         )
//       ) {
//         renderRandomGoBackHorse()
//       }
//   }
// }
