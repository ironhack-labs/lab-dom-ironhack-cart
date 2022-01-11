// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const  quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  const result = Number(price) * Number(quantity);
  subtotal.innerText = result;
  return result;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let counter = 0;
  for(let i = 0; i < allProducts.length; i++){
    counter += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = counter;
  
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
  const removeButtons = document.getElementsByClassName('btn btn-remove');
  console.log(removeButtons);
  removeButtons.addEventListener('click', removeProduct(removeButtons));
});
