// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = +(product.querySelector('.price span').innerHTML)
  const quantity = +(product.querySelector('.quantity input').value)

  let result = price * quantity

  return product.querySelector('.subtotal span').innerHTML = result
}

function calculateAll() {
  const firstProduct = document.querySelector('.product')
  const secondProduct = document.querySelectorAll('.product')[1]

  let total = updateSubtotal(secondProduct) + updateSubtotal(firstProduct)

  return document.querySelector('#total-value span').innerHTML = total
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

/* 
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = +(product.querySelector('.price span').innerHTML);
  const quantity = +(product.querySelector('.quantity input').value);
  
  console.log(quantity)
  let result = price * quantity
    console.log(result)
  return product.querySelector('.subtotal span').innerHTML = result
}
*/
