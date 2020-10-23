// ITERATION 1

function updateSubtotal(product) {
console.log('Calculating subtotal, yey!');
let price = product.querySelector('.price span');
let quantity = product.querySelector('.quantity input');
//pasando price y quantity a numero
let priceNumber= parseFloat(price.innerText);  
let quantityNumber= quantity.valueAsNumber;
let subTotal = priceNumber * quantityNumber;
//primer elemento con class = subtotal
let subTotalClass = product.querySelector('.subtotal span');
subTotalClass.innerText= subTotal;
return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
let products = document.getElementsByClassName('product');
let totalValue = 0;
for(let i=0; i < products.length; i++){
  let total = products[i];
  totalValue = updateSubtotal(total);
}


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
