// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value

  let subtotal = product.querySelector('.subtotal span')
  let subtotalValue = price * quantity
  subtotal.innerText = subtotalValue

  console.log(subtotalValue)
  return subtotalValue
}

function calculateAll() {

  document.querySelector('#subtotalValue').innerHTML = '$' + subtotalValue
  updateSubtotal(subtotalValue)
}
// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
const singleProduct = document.querySelector('.product');
updateSubtotal(singleProduct);


// ITERATION 2
h
  //... your code goes here

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
