// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  
  price.innerHTML 
  quantity.innerHTML 
  
  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = price * quantity;
  
  return subtotal
  
}

function calculateAll() {
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  
  let suma = 0

  products.forEach(function (product) {

    let total = updateSubtotal(product)
    suma += parseInt(total.innerText)
  });
   
  // ITERATION 3
  let totalCart = document.querySelector('#total-value span');

  totalCart.innerText = suma;

  
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
