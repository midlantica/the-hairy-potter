// The object should describe its
// shape, weight, and height.
// let date = new Date(UNIX_Timestamp * 1000)
export const Pottery = (potteryObj) => {
  return `
    <section class="pot box marBQ">
      <h3>${potteryObj.name} <span class="marL1 fs-small">id: ${potteryObj.id}</span></h3>
      <p>Shape: ${potteryObj.shape}</p>
      <p>Weight: ${potteryObj.weight} lbs.</p>
      <p>Height: ${potteryObj.height} inches</p>
    </section>
  `
}
