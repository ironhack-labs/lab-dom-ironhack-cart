// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector(`.price span`).innerText
  const quantity = product.querySelector(`.quantity input`).value
  const subTotal = price * quantity

  product.querySelector(`.subtotal span`).innerText = subTotal

}

function calculateAll() {

  const products = Array.from(document.getElementsByClassName(`product`))

  products.forEach(element => updateSubtotal(element))

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => { // cuando la pagina se carga del todo, ejecuta lo de dentro
  const calculatePricesBtn = document.getElementById('calculate') // esto devuelve el nodo con el id especificado
  calculatePricesBtn.addEventListener('click', calculateAll) // addEventListener (en este evento, ejecuta esta función)

  //... your code goes here
})
