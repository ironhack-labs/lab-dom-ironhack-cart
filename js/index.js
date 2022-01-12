// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span' )

  const priceNum = price.innerHTML;
  const quantityNum = quantity.value; 

   const subtotalNum = priceNum * quantityNum;
  subtotal.innerHTML = subtotalNum

console.log(subtotalNum)
  return subtotalNum
}

function calculateAll() {
  // ITERATION 2
  let totalSum = 0;
  const products = document.querySelectorAll('.product');

  products.forEach(singleProduct => {
    subtotal = updateSubtotal(singleProduct);

    totalSum += subtotal
  });
  

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;
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
