const checkSpot1 = (horse) => {
  return horses[`${horse}`].flipcount >= 1
}

const goBackSpot = () => {
  if (Object.keys(horses).every(checkSpot1) === true) {
    let randomGoBackHorse = chooseRandomCard()
    Object.keys(horses).forEach((horse, index) => {
      if (horse === randomGoBackHorse) {
        --horses[`${randomGoBackHorse}`].flipCount
        let addClass = document.getElementById(`${randomGoBackHorse}`)
        if (addClass.classList === 'spot1') {
          addClass.classList.remove(
            'spot' + (horses[`${randomGoBackHorse}`].flipCount + 1)
          )
          addClass.classList.add('post')
        } else {
          addClass.classList.remove(
            'spot' + (horses[`${randomGoBackHorse}`].flipCount + 1)
          )
          addClass.classList.add(
            'spot' + horses[`${randomGoBackHorse}`].flipCount
          )
        }
        let goBack = getElementById('gb' + 1)
        goBack.innerText = horses[`${randomGoBackHorse}`].name
      }
    })
  }
}
