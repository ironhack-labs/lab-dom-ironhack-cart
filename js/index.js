// ITERATION 1


function updateSubtotal(product) {

let price = product.querySelector('.price span');
let quantity = product.querySelector('.quantity input');
let unitPrice = Number(price.innerHTML);
let quantityNumber = Number(quantity.value);

let subtotal = unitPrice * quantityNumber;
let subtotalNumber = product.querySelector('.subtotal span');
subtotalNumber.innerHTML = subtotal;
return subtotal;

  //... your code goes here
}


function calculateAll() {


  // ITERATION 2
  let allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    updateSubtotal(product);
  })
  

  // ITERATION 3
  let calculateAllPrices = [...allProducts].reduce((accumulator, currentValue) => {
    return accumulator + updateSubtotal(currentValue);
  }, 0);

  let total = document.querySelector('#total-value span');
  total.innerHTML = calculateAllPrices;
  return calculateAllPrices;
}

/*apuntes array.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;*/

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
