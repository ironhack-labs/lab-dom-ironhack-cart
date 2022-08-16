// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  console.log(price)
  console.log(quantity)

  const subtotalPrice = price * quantity

  console.log(subtotalPrice)

  //get the DOM element subtotal
  //set the subtotal price to the corresponding DOM element
  // return the value of the subtotal to use it later
  return product.querySelector('.subtotal span').innerText = subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // call the function updateSubtotal with every tr.product DOM node 
    // ITERATION 3
  // use the total value in the previous iteration and update the corresponding DOM element
  // calculate the total price (sum all subtotals)
  // display total price on DOM

  let totalPrice = 0
  const allProducts = document.getElementsByClassName('product') 
  
  for (let i = 0; i < allProducts.length; i++) {
    totalPrice += updateSubtotal(allProducts[i])
  }

  document.querySelector('#total-value span').innerText = '' + totalPrice
  console.log(totalPrice)
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

  const removeButtons = document.querySelector('.btn btn-remove')
  for (let i = 0; i < removeButtons; i++) {
    removeButtons.addEventListener('click', calculateAll)
  }
  
});
