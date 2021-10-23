// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  let subtotal = product.querySelector('.subtotal span')

  let subtotalValue = price * quantity;
  subtotal.innerText = subtotalValue;

  console.log(subtotalValue)

  return subtotalValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName("product"); 

  let subtotalsuma = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    subtotalsuma += updateSubtotal(product);
  }


  // ITERATION 3
  
  let total = document.getElementById("total-value").querySelector("span");
  total.innerText = subtotalsuma;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
