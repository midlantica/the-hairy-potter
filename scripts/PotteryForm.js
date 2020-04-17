// Drew Harper
// Pottery Form for submitting a Pottery article
// Contains eventListener for Submitting Pottery form
// Renders form
// eventHandler xOut for closing Pottery Form

import { savePottery } from './PotteryProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.potteryForm')

// Handle browser-generated click event in component
eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'savePottery') {
    const name = document.querySelector('#name').value
    const shape = document.querySelector('#shape').value
    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value

    // Make a new object representation of a Pottery
    const newPottery = {
      name: name,
      shape: shape,
      weight: weight,
      height: height,
    }

    // Change API state and application state
    savePottery(newPottery)
    contentTarget.classList.add('hide')
  }
})

const render = () => {
  const contentTarget = document.querySelector('.potteryForm')

  return `
    <div class="formWrap">
      <div class="dh-Form panel fadeBackground marB1">

        <div id="xOut" class="xOut">X</div>

        <label for="name">Name</label>
        <input type="text" id="name">

        <label for="shape">Shape</label>
        <input type="text" id="shape">

        <label for="weight">Weight</label>
        <input type="number" id="weight">

        <label for="height">Height</label>
        <input type="number" id="height">

        <button id="savePottery" class="btnSmall marT2">Add Pottery</button>
      </div>
    </div>
  `
}

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'xOut') {
    const contentTarget = document.querySelector('.PotteryForm')
    contentTarget.classList.add('hide')
  }
})

export const PotteryForm = () => {
  const contentTarget = document.querySelector('.PotteryForm')

  contentTarget.innerHTML = render()
}
