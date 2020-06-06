// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotalInput = product.querySelector('.subtotal span') //GETTER

  let subtotal=price.innerHTML*quantity.value
  subtotalInput.innerHTML=subtotal //SETTER

  return subtotal
}

function calculateAll() {

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  const totalProducts = document.querySelectorAll('.product')
  
  let sum = 0
  
  totalProducts.forEach(function (elm) {
    sum= sum+updateSubtotal(elm)
  })
  
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML=sum
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
