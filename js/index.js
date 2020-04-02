// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = Number(product.querySelector('.price span').innerText)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subTo = product.querySelector('.subtotal span')
  console.log(price, quantity)
  subTo.innerText = price * quantity
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product')
  products.forEach(product => {
    updateSubtotal(product)
  })
  const [...subTo] = document.querySelectorAll('.subtotal span')
  const total = subTo.reduce((acu, val) => {
    return acu + Number(val.innerText)
  }, 0)
  document.querySelector('#total-value span').innerText = total
  console.log(subTo)
  // end of test
  // ITERATION 2
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}
// ITERATION 4
// function removeProduct(event) {
//   const target = event.currentTarget
//   console.log('The target in remove is:', target)

// }
// function eventRemoveButton (){
// const removeButtons = document.querySelectorAll(".btn-remove")
// removeButtons.forEach(button => {
//   button.addEventListener('click', removeProduct()
// })
// }

function removeProduct() {
  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(
    removeButton => (removeButton.onclick = () => removeButton.parentNode.parentNode.remove())
  )
}

// ITERATION 5
function createProduct() {
  const nuevoProducto = document.querySelector('.nuevoProducto')
  const nuevoPrecio = document.querySelector('.nuevoPrecio')

  console.log(nuevoProducto, nuevoPrecio)

  const botonNuevoProducto = document.querySelector('#create')
  botonNuevoProducto.onclick = () => {
    const estructuraFila = document.createElement('tr')
    estructuraFila.innerHTML = `<tr class="product">
  <td class="name">
    <span>${nuevoProducto.value}</span>
  </td>
  <td class="price">$<span>${nuevoPrecio.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>`
    estructuraFila.className = `product`
    document.querySelector('tbody').appendChild(estructuraFila)
    removeProduct()
  }
}
createProduct()

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  removeProduct()
  //... your code goes here
})
