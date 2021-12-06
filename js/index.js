// ITERATION 1

function updateSubtotal(product) {


const price = product.querySelector('.price span');
const quantity = product.querySelector('.quantity input') ;

const subTotalResult = price.innerHTML * quantity.value;

const subTotalElement = product.querySelector('.subtotal span');


return subTotalElement.innerHTML = subTotalResult;

  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

 const singleProduct = document.querySelector('.product');

 updateSubtotal(singleProduct);

 const totalProducts = document.getElementsByClassName('product');

 for (let i = 0; i < totalProducts.length; i++) {

  const allSubtotals = updateSubtotal(totalProducts[i]);
  
 }

 const totalValue = document.querySelector('#total-value span');
 const totalPrice = document.getElementsByClassName('subtotal');

 const calculatePrices = document.getElementById("calculate");

 for (let i = 0; i < totalPrice.length; i++) {
   totalValue.innerHTML = updateSubtotal(totalPrice[i]);
 }
  
calculatePrices.onclick = function() {  
  return totalValue.innerHTML = document.finalPrice;
}

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
