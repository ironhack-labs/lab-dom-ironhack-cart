// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = document.querySelector('.price span')
  const quantity = document.querySelector('.quantity')

  price.innerHTML
  quantity.innerText

  console.log(`${price.innerHTML}`)
  console.log(`${quantity.innerText}`)

  const inputNode = document.querySelector('.number-input')
  const inputValue = inputNode.value
  alert(inputValue)

  const subtotalPrice = price.innerHTML * inputValue
  console.log(subtotalPrice)

  const subtotal = document.querySelector('.subtotal span')
  subtotal.innerHTML
  subtotal.innerHTML = subtotalPrice

}



function calculateAll() {


  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')

  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i])

  }




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

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
