// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const calcSubTotal = price * quantity
  const subTotal = product.querySelector('.subtotal span')
  subTotal.textContent = `${calcSubTotal}`
  
  // console.log(price)
  // console.log(quantity)
  // console.log(calcSubTotal)
  // console.log(subTotal)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelectorAll('.product')
  const childProduct = document.querySelector('.product').nextElementSibling;
  singleProduct.forEach(element => {
    updateSubtotal(singleProduct)
    updateSubtotal(childProduct)
    console.log(singleProduct)
  });

  // end of test

  // ITERATION 2

  // ITERATION 3

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
