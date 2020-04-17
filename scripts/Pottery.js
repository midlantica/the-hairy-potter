// The object should describe its
// shape, weight, and height.
export const Task = (potterObj) => {
  return `
    <section>
      <h3>${potterObj.name}</h3>
      <p>Shape: ${potterObj.shape}</p>
      <p>Weight: ${potterObj.weight} lbs.</p>
      <p>Height: ${potterObj.height} inches</p>
    </section>
  `
}
