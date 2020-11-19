// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const update = product.querySelector(".subtotal span");
  let sum = price.textContent*quantity.value;
  update.textContent = sum;
  return sum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll("#cart .product");
  const totalPrice = document.querySelector("#total-value span");
  let summary = 0;
  for (let i=0; i<products.length; i++){
    updateSubtotal(products[i]);
    summary += updateSubtotal(products[i]);
  }
  
  // ITERATION 3
  //... your code goes here
  // console.log(typeof totalPrice);
  totalPrice.textContent = summary;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const getParent = target.parentNode.parentNode;

  //... your code goes here
  // console.log(target.parentNode.parentNode);
  getParent.parentNode.removeChild(getParent);

;}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const buttons = document.querySelectorAll(".action .btn.btn-remove");
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // console.log(buttons);
  for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', removeProduct);
  }
});
