let totalPrices = []

// ITERATION 1

function updateSubtotal(product, index) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = parseFloat(price.innerHTML) // Convertimos a número
  const quantityValue = quantity.value
  const subtotalValue = quantityValue * priceValue

  subtotal.innerHTML = subtotalValue

  // totalPrices.splice(index, 1, subtotalValue)
  totalPrices.push(subtotalValue)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  totalPrices = [] // Reiniciar totalPrices cada vez que se calcula el total

  // ITERATION 2
  let singleProduct = document.querySelectorAll('.product');
  singleProduct.forEach((product, index) => {
    updateSubtotal(product, index);
  })

  // const singleProduct = document.getElementsByClassName('product');
  // for(let product of singleProduct) {
  //   updateSubtotal(product);
  // }
  
  
  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.innerHTML = totalPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(totalPrices)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  
  const cart = document.querySelector('#cart tbody')
  const elementToRemove = target.parentNode.parentNode

  cart.removeChild(elementToRemove) // Eliminamos el elemento
  calculateAll() // Volvemos a calcular el total
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const deleteBtns = document.querySelectorAll('.btn-remove');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct)
  })
});
