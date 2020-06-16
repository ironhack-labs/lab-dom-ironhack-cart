// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  var price = product.querySelector('.price span').innerHTML;
  var quantity = product.querySelector('.quantity input').value;
  var subtotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal;
  //console.log(subtotal)
  return subtotal
  
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
var subtotal2 = 0
    document.querySelectorAll('.product').forEach(function (ele) {
    subtotal2 = subtotal2 + updateSubtotal(ele)
    //console.log(updateSubtotal(ele))
  });
 
  // ITERATION 3
  //... your code goes here
    document.querySelector('#total-value span').innerHTML = subtotal2
    //console.log(subtotal2)
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
