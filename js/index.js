//Ö Testet
//console.log('Calculating subtotal, yey!');
var product = document.querySelector(".product")
var products = document.getElementsByClassName("product")
for(i=0; i<products.length; i++) {
  console.log(products[i])
}
  
  //... your code goes here
  //var products = document.getElementsByClassName("product")
  //console.log(products)
  //Hier unten passt alles
  //var product = document.querySelector('.product')
  //console.log(products)
  /*--
  var price = product.querySelector('.price span').innerHTML
  var quantity = product.querySelector('.quantity input').getAttribute("value")
  var subtotal= price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal
--*/
//Ö Testet nicht mehr



// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  var price = product.querySelector('.price span').innerHTML
  var quantity = product.querySelector('.quantity input').getAttribute("value")
  var subtotal= price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  var products = document.getElementsByClassName("product")
  for(i=0; i<products.length; i++) {
    updateSubtotal(products[i])
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

//Test for the Console
function print(){
console.log(document.getElementById('calculate'));
}
