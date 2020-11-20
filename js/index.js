// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector ('.price span');
  const quantity = product.querySelector ('.quantity input');
 // console.log('Calculating subtotal, yey!');
 // console.log(typeof price.innerHTML);
 // console.log(typeof quantity.value);
  let subTotal = Number(price.innerHTML) * Number(quantity.value);
  let sTotal = product.querySelector('.subtotal span');
  sTotal.innerHTML = subTotal;
 // console.log(typeof subTotal);
  return subTotal;
}

function calculateAll() {
  const listProduct = [...document.getElementsByClassName("product")];
  const finalPrice = document.querySelector('#total-value span');
  let total = 0; 
  listProduct.forEach(function(product){
    total += updateSubtotal(product);
  })
  console.log(total);
  finalPrice.innerHTML = total;
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
