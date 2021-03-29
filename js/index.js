// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const productPrice = price.innerHTML
  const productQuantity = quantity.value

  const subTotal = productPrice * productQuantity

  const productSubTotal = product.querySelector('.subtotal span')

  productSubTotal.innerText = subTotal

  return subTotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  //... your code goes here
  let totalPrice = document.querySelectorAll('.product')


  total = 0


  totalPrice.forEach(product => {
    updateSubtotal(product)



    // ITERATION 3
    //... your code goes here

    total = total + updateSubtotal(product)
    document.querySelector('h2 span').innerHTML = total
  })
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
