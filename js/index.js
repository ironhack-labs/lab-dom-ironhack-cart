// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  
  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2 and 3
  let productList = document.querySelectorAll('.product');
  
  let total = 0;
  
  // iterating through the product list
  productList.forEach(function (product) {
    let totalProduct = updateSubtotal(product)
    total += totalProduct;
  });
  
  let totalPrice = document.querySelector('#total-value span').innerHTML;
  totalPrice = total;
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
