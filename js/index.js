// ITERATION 1

function updateSubtotal() {
  console.log('Calculating subtotal, yey!');
  const price = document.querySelector(".price span")
  const quantity = document.querySelector(".quantity input").value

  const multiply = price.innerHTML * quantity
  const subtotal = document.querySelector(".subtotal")
  return subtotal.innerHTML = multiply
}

function calculateAll() {

  const allProduct = document.querySelectorAll('.product')
  allProduct.forEach(products)
  function products(eachproduct) {
    let element = document.getElementsByClassName('.product')
    updateSubtotal(element)
  }


};

// it runs when only iteration 1 is completed. at later point, it can be removed.
//const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here


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
