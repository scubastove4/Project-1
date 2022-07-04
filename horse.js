const addHorse = document.querySelector('#add-horse')
const forAddHorse = document.querySelector('#for-add-horse')
class Horse {
  constructor(name) {
    this.name = name
    this.flipCount = null
    this.wagerAmount = null
  }
}

let horses = []

forAddHorse.addEventListener('click', () => {
  const horse = new Horse(`${addHorse.value}`)
  horses.push(horse)
  const newHorseButton = document.createElement('button')
  const body = document.querySelector('body')
  body.appendChild(newHorseButton)
  newHorseButton.classList.add('choose-horse')
  newHorseButton.innerText = addHorse.value.toUpperCase()
  console.log(horses)
})
