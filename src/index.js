// ITERATION 1

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

let sum = 0;


function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.getElementsByTagName('input')[0].value;
  console.log(parseInt(price.textContent)*parseInt(quantity));
  const subTotal = product.querySelector('.subtotal span');//IMPORTANTER ACORDARSE DE PONER BIEN LA CLASE
  const total = subTotal.textContent = parseInt(price.textContent)*parseInt(quantity);
  sum = sum + total;
  }
 



function calculateAll() {
  
  const listProdcut = document.querySelectorAll('.product');
  
  //const r = listProdcut.map(updateSubtotal);
 
 // Array.prototype.forEach.call(listProdcut, function(singleProduct) {
 //   console.log(singleProduct);
    //updateSubtotal(singleProduct);
//});


for(var i = 0; i < listProdcut.length; i++)
{
  
  updateSubtotal(listProdcut[i]);
  
}
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  const result = document.querySelector('#total-value span');
  result.textContent = sum;
  





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
