// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");
  console.dir(quantityElement)
  const priceValue = priceElement.innerText;
  const quantityValue = quantityElement.value;

  const subtotalElement = product.querySelector(".subtotal span");
  const subtotalValue = priceValue * quantityValue;
  subtotalElement.innerText = subtotalValue;

    return subtotalValue
  console.log('Calculating subtotal, yey!');

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const productArray = document.getElementsByClassName("product");
  let totalValue = 0;

  for (let product of productArray) {
    const subtotalFunction = updateSubtotal(product);
    totalValue += subtotalFunction;
  }

  const totalElement = document.querySelector("#total-value span");
  totalElement.innerText = totalValue;
  
}

// ITERATION 4 >>>>Anytime I try to work in this it breaks the functionality - what's going on with that?!
/*
function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  const removeBtn = document.querySelectorAll(".button ")
  console.log('The target in remove is:', target);
  target.parentElement.removeChild(target);
  calculateAll();
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
*/