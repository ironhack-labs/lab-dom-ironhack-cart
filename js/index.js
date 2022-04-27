// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const subtotaField = Number(price.innerHTML) * Number(quantity.value)
  subtotal.innerHTML = subtotaField
  return subtotaField
}

function calculateAll() {

 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const getProducts = document.querySelectorAll('.product');
  let suma = 0;
  getProducts.forEach((product) => {
    suma += updateSubtotal(product);
  });

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  return (total.innerHTML = suma )
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);



  let child = document.querySelector(target);
  target.removeChild(child);
  


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
