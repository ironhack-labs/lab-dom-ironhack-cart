// ITERATION 1

function updateSubtotal(product) {
  //Capture the price and quantity values and convert them as numbers
  const priceSpanElement = product.querySelector('.price span');
  const quantityInputElement = product.querySelector('.quantity input');
  const price = parseFloat(priceSpanElement.innerHTML);
  const quantity = quantityInputElement.value;
  console.log(Number(price), parseFloat(quantity));
  // get the subtotal value
  // Render the subtotal value in the element with ".subtotal" (class subtotal)
  const subtotal = Number(price) * parseFloat(quantity);
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;

  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  const productElements = document.getElementsByClassName('product');
  let totalValue = 0;
  for (productElement of productElements) {
    totalValue += updateSubtotal(productElement)
  }
  //updateSubtotal(singleProduct);
  // end of test



  // call the function updateSubtotal with every tr.product DOM node in the table#cart
  // get cart item elements getElementsByClassName
  //for product of products call updateSubtotal(product)

  // reuse total value of it 2
  // update dom element
  // calculate totalprice by summing all of subtotal returned by updateSubtotal()
  const totalValueSpan = document.querySelector('#total-value span').innerHTML = totalValue;

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