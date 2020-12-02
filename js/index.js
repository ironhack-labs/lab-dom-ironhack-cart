// ITERATION 1

function updateSubtotal(product) {
  const subtotal = product.querySelector('.subtotal span');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  //const result = price.innerHTML * quantity.value;
  //console.log(price.innerHTML)
  //console.log(quantity.value)
  subtotal.innerHTML = price.innerHTML * quantity.value;
  return parseInt(subtotal.innerHTML);
  //console.log(subtotal.innerHTML);
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products= document.getElementsByClassName("product");
  const productsArray= [...products]
  const subTotals= productsArray.map((product)=>{return updateSubtotal(product)});


  // ITERATION 3
  
  const total= document.querySelector("#total-value span");
  total.innerHTML= subTotals.reduce((acc,v)=>{return acc + v},0);
  
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
