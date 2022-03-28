// ITERATION 1

function updateSubtotal() {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const product = document.querySelector('.product')

  const price = product.querySelector('.price')
  const quantity = product.querySelector('.quantity')
  const subtotal = product.querySelector('.subtotal span')

  calculateSubtotal.forEach((quantityItem) => {

    quantityItem = quantity.value
    subtotal += quantityItem * price
    calculate += price
  })

}

updateSubtotal(calculateSubtotal.addEventListener('click', calculate) = `${total}`)



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
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
