// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector(`.price span`).innerText;
  const quantity = product.querySelector(`.quantity input`).value;
  const priceNumber = parseFloat(price);
  const quantityNumber = parseInt(quantity);

  const subtotal = priceNumber * quantityNumber;

  console.log(subtotal);

  const subtotalElm = product.querySelector(".subtotal span");

  subtotalElm.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  const totalValueElm = document.querySelector("#total-value span");
  let total = 0;
  
  for(let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  totalValueElm.innerText = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const rowToRemove = target.parentNode.parentNode;
  const parent = rowToRemove.parentNode;
  
  parent.removeChild(rowToRemove);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtnsCollection = document.getElementsByClassName("btn-remove");
  const removeBtnsCollectionCopy = [...removeBtnsCollection];

  removeBtnsCollectionCopy.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

});
