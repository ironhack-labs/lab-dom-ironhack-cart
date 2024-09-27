// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //... your code goes here

  const valueOfPrice = Number(price.innerHTML);
  console.log(valueOfPrice);

  const valueOfQuantity = Number(quantity.value);
  console.log(valueOfQuantity);
  

  let subtotalPrice = 0;
  if (valueOfPrice === valueOfPrice && valueOfQuantity === valueOfQuantity) {
    subtotalPrice = valueOfPrice * valueOfQuantity;
  } 
  else {
    return 0;
  }
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productElements = document.getElementsByClassName("product");

  let totalPrice = 0;

  for (let i = 0; i < productElements.length; i++) {
    const oneProduct = productElements[i];
    console.log(oneProduct);
    let productTotal = updateSubtotal(oneProduct);
    totalPrice += productTotal;
  }

  // ITERATION 3
  //... your code goes here
  let totalPriceElement = document.querySelector("#total-value span");
  totalPriceElement.textContent = totalPrice; 
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
