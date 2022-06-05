// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  //with or without 'input'?

  const subTotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subTotal
  //what happens without the span tag? .innerText without span tag?

  return subTotal

}

function calculateAll() {


  //test starts here-------------
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test-----------------


  // ITERATION 2
  //... your code goes here

  // cómo funciona ".getElementsByClassName"

  let allProducts = document.querySelectorAll('.product')

  let total = 0

  for (let i = 0; i < allProducts.length; i++ ) {
    total += updateSubtotal(allProducts[i])
  }  

  // ITERATION 3
  //... your code goes here

let totalResult = document.querySelector('#total-value span')
totalResult.innerText = total


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
