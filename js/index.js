// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const priceElm = document.querySelector(".price span"); // to do: search inside "product" row, instead of "document"
  //const price = priceElm.innerText;
  const price = parseFloat(priceElm.innerText)
  console.log(price);

  const quantityElm= document.querySelector(".quantity input");
  //const quantity = quantityElm.value
  const quantity = parseFloat(quantityElm.value)
  console.log(quantity);

  const subtotal = price * quantity;
  //console.log(subtotal);

  const subTotalElm = document.querySelector(".subtotal span");
  subTotalElm.innerHTML = subtotal;

  return subtotal;


}

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
