// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // Calculation of the Subtotal of each product
  const subtotalPrice = price.innerText * quantity.value;

  // Queryng the subtotal element where we want to update the subtotal $
  const subtotalResult = product.querySelector(".subtotal span");

  // Adding the subtotal price to the subtotal element
  subtotalResult.innerText = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {

  const cartProducts = document.querySelectorAll("tr.product");

  cartProducts.forEach(product => function(){
    updateSubtotal(product)
  })


  // ITERATION 2
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
