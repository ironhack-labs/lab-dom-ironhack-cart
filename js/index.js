// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  //... your code goes here
  const subtottalProduct = price.innerHTML * quantity.value
  subtotal.innerHTML= subtottalProduct.toFixed(2)
  return parseInt(subtotal.innerHTML)
}


function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
   let sumTotal = 0
  allProducts.forEach(function(eachAllProducts) {
    
    sumTotal += updateSubtotal(eachAllProducts)
  })
  
  // ITERATION 3
   const total = document.querySelector('#total-value span')
   total.innerHTML = sumTotal.toFixed(2)
   return sumTotal
}

  //ITERATION 4


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
