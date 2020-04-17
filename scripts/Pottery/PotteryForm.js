import { savePottery } from './potteryProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.pottery')

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
  }
})

const render = () => {
  contentTarget.innerHTML += `
    <div class="potteryForm formWrap">
      <div class="dh-Form box fadeBackground marB1">
        <h3>Pottery Form</h3>

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
export const PotteryForm = () => {
  render()
}
