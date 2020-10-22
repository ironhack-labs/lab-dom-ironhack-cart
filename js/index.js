// goal is to calculate the subtotal price,


// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let $price = product.querySelector('.price span').innerHTML;
  let $quantity = product.querySelector(' input').value
  let price = Number($price);
  let quantity = Number($quantity);
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal
  // debugger
  // debugger
  // send.value
  // send =  subtotal
  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');

  // end of test

  // ITERATION 2
  //... your code goes here
  const $products = document.querySelector('tbody ').rows;
  let totalValue = 0
  for (let product of $products) {
    product;
    ////to call the function updateSubtotal with every tr.product DOM node in the table#cart.
    totalValue += updateSubtotal(product);
    // debugger
  }

  console.log(totalValue)

  // ITERATION 3
  //... your code goes here
  //At the end of the calculateAll() function, reuse the total value you just calculated in the previous iteration and update the corresponding DOM element.


  //Calculate the total price for the products in your cart by summing all of the subtotals returned by updateSubtotal() when it was called with each product.

  //Lastly, display that value on your DOM.
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
