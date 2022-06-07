// ITERATION 1


function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  console.log(price); 
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity); 
  let subtotal = Number(price) * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  console.log(subtotal); 
  return subtotal;
}

function calculateAll() { 
  const allProduct = document.querySelectorAll('.product');
  let total = 0;
  for (let product of allProduct) {
    total += updateSubtotal(product); 
  } 
  console.log(total);
  document.querySelector('#total-value span').innerText = total;
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
