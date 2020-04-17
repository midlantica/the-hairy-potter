// Drew Harper
// Handles creation of Pottery, displaying of Pottery, deleting of Pottery

import { Pottery } from './Pottery.js'
import { usePottery } from './potteryProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.pottery')

contentTarget.addEventListener('potteryStateChanged', (customEvent) => {
  PotteryList()
})

const render = (potteryToRender) => {
  return potteryToRender
    .map((potteryObject) => {
      return Pottery(potteryObject)
    })
    .join('')
}
export const PotteryList = () => {
  const pottery = usePottery()

  contentTarget.innerHTML += `
    <div class="potteryList">${render(pottery)}</div>
  `
}
