// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const priceValue = price.textContent

  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value

  let subtotalPrice = priceValue * quantityValue

  const subtotal = product.querySelector('.subtotal span')

  subtotal.textContent = subtotalPrice

}

function calculateAll() {

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  updateSubtotal(allProducts[0])
  updateSubtotal(allProducts[1])

  // ITERATION 3
  const totalPrice = document.querySelectorAll('.subtotal span');
  const totalPriceValue = totalPrice[0].textContent + totalPrice[1].textContent


  //Consigo obtener ambos subtotales para enseñarlos en el total pero me concatena los valores

  console.log(totalPrice[0].innerHTML + totalPrice[1].innerHTML)


  const totalDisplay = document.querySelector('#total-value span')
  totalDisplay.textContent = totalPriceValue
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

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
