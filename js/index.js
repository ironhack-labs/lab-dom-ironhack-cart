// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceRetrieve = price.innerHTML;
  const quantityRetrieve = quantity.value;
  const subtotal = priceRetrieve * quantityRetrieve;
  const subtotalSelector = product.querySelector(".subtotal span");
  subtotalSelector.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProductleP = document.querySelector('.product');
  // updateSubtotal(singroduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  let total = 0;
  Array.from(products).forEach((product) => {
    total += updateSubtotal(product);
  })

  const totalSelector = document.querySelector("#total-value span")
  totalSelector.innerHTML = total;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  targetParent = querySelector(".action")
  //yoksejeje
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeButton = document.querySelectorAll("#btn-remove")
  removeButton.forEach((btn)=>{
    btn.addEventListener("click", removeProduct)
  })
});
