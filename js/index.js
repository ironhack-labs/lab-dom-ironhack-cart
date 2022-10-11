// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let innerPrice = price.textContent;
  const quantity = product.querySelector('.quantity input');
  let innerQuantity = quantity.value;
  let calc = innerPrice * innerQuantity;
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = calc;
  return calc;
};

function calculateAll() {

  // ITERATION 2
  let arrayProducts = document.querySelectorAll(".product")
  let sum = 0;
  for (let i = 0; i < arrayProducts.length; i++) {
    sum += updateSubtotal(arrayProducts[i]);
  };

  // ITERATION 3

  let total = document.querySelector('#total-value span');
  total.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  let targetParent = target.parentNode; // tr

  targetParent.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

let arrRemoveProductsBtn;

window.addEventListener('click', () => {
  console.log("I am clicking.")
  arrRemoveProductsBtn = document.querySelectorAll(".action");
  for (let i = 0; i < arrRemoveProductsBtn.length; i++ ) {
    arrRemoveProductsBtn[i].addEventListener('click', removeProduct);
  };
  console.log(document.querySelectorAll(".action"));
});

