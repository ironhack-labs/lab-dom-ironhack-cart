// ITERATION 1

function updateSubtotal(product) {
  
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let subtotal = price.innerHTML * quantity.value

  product.querySelector('.subtotal span').innerHTML = subtotal;
  
  return subtotal
}

function calculateAll() {
  // ITERATION 2
 let products = document.querySelectorAll('.product');
 
 let subTotals = products.map((product) => {
    updateSubtotal(product);
 });

 subTotals.innerHTML.reduce(function (a, b) {
  return a + b
}, 0)

 document.querySelector('#total-values span').innerHTML = total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.removeChild(target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('btn-remove')
  removeBtn.addEventListener('click', removeProduct);

});
