// Drew Harper
// database for pottery
// { usePottery, getPottery,savePottery, deletePottery }

let pottery = []

const eventHub = document.querySelector('.container')

const dispatchStateChangeEvent = () => {
  const potteryStateChangedEvent = new CustomEvent('potteryStateChanged')

  eventHub.dispatchEvent(potteryStateChangedEvent)
}

export const usePottery = () =>
  pottery.sort((c, n) => n.timestamp - c.timestamp).slice()

export const getPottery = () => {
  return fetch('http://localhost:8088/pottery')
    .then((response) => response.json())
    .then((parsedPottery) => {
      pottery = parsedPottery
    })
}

export const savePottery = (pottery) => {
  return fetch('http://localhost:8088/pottery', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pottery),
  })
    .then(getPottery)
    .then(dispatchStateChangeEvent)
}

export const deletePottery = (potteryId) => {
  return fetch(`http://localhost:8088/pottery/${potteryId}`, {
    method: 'DELETE',
  })
    .then(getPottery)
    .then(dispatchStateChangeEvent)
}
