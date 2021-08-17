// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // the string with the price is insie the span tag
  // the quantity number is a value attribute inside element qith the quantity class 
  const productPrice = price.innerText;
  const productQuantity = quantity.value;
  const subtotal = productPrice * productQuantity;
  const updatedProduct = product.querySelector('.subtotal span');
  updatedProduct.innerText = subtotal;
  return subtotal;

  //console.log("subtotal: ", subtotal)
  //console.log(quantity.value)
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.getElementsByClassName("product");
  //const arrayOfProducts = Array.from(multipleProducts);

  // calculate subtotal for each product
  let totalPrice = 0;

  for (element of multipleProducts) {
    updateSubtotal(element);
    totalPrice += updateSubtotal(element)
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = totalPrice;
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
