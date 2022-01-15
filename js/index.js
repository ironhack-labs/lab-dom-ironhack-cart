// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity input")
  const result = price.textContent * quantity.value;
  const subtotal = product.querySelector(".subtotal span")
  subtotal.textContent = result;
  return result;


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll(".product")
  let sum = 0;
  const totalValue = products.forEach(eachProduct => {

    sum += updateSubtotal(eachProduct)
  })
  console.log("this is " + sum)




  const value = document.querySelector('h2 span')
  value.textContent = sum;



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
