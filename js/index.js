// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2 and 3
  let productList = document.querySelectorAll('.product');
  
  let total = 0;
  
  // iterating through the product list
  productList.forEach((product) => {
    total = total + updateSubtotal(product);
  });
  
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
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
