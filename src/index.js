// ITERATION 1
console.log("JS is connected");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  //como input não tem class/id tem de se ir pela tag name
  const quantity = product.getElementsByTagName("input")[0];

  let total = price.innerHTML * quantity.value;

  let subTotal = product.getElementsByClassName("subtotal")[0];

  subTotal.innerHTML = total.toString();

  return total;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  

let totalProducts = document.getElementsByClassName("product");

  let pricesTotal = 0
for(let i =0; i<totalProducts.length;i++){
pricesTotal +=updateSubtotal(totalProducts[i])
};
let total = document.querySelector("#total-value span")
total.innerHTML = pricesTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode)
  target.parentNode.parentNode.remove();       
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButton = document.getElementsByClassName('btn-remove');
  for(let i =0; i<removeButton.length; i++){
    removeButton[i].addEventListener('click', removeProduct);  
  }

})
