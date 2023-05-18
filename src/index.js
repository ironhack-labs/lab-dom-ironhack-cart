// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtota, yey!');
  const quantity = product.querySelector('.quantity span');
const price =  product.querySelector('.price span');
const contentPrice = Number(price.innerText);
console.log(typeof contentprice);
const contentQuantity = Number(quantity.innerText);
console.log(typeof contentQuantity);
const multiplied = contentPrice * contentQuantity;
const  subtotal=  product.querySelector('.subtotal span');
 
subtotal.innerText =multiplied;
return multiplied;
console.log(multiplied);
//... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
const productElements = documents.querySelectorAll(".product");
let totalPrice = 0;
productElements.forEach(function(oneProduct) {
  const productTotal = updateSubtotal(oneProduct); 
    totalPrice += productTotal; 
});
  
  const totalPriceElement = document.querySelector("#total-value span");
  
  totalPriceElement.textContent = totalPrice;
  //... your code goes here

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
