// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  let sumSubtotal = price * quantity
  product.querySelector('.subtotal span').innerText = sumSubtotal

  return sumSubtotal
}

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);


  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product')

  // ITERATION 3
  //... your code goes here
  let total = 0
  for (let i = 0; i < products.length; i++){
    total += updateSubtotal(products[i])
  }

  document.querySelector('#total-value span').innerText = total
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
