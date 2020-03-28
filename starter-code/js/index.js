// ITERATION 1

function updateSubtotal($product) {
  const productPrice = $product.querySelector('.price > span').innerHTML;
  let productQuantity = $product.querySelector('.quantity > input').value;

  //we get and set subtotal directly from its DOM element

  $product.querySelector('.subtotal > span').innerHTML =
    productPrice * productQuantity;

  return productPrice * productQuantity;
}

function calculateAll() {
  productArray = document.querySelectorAll('.product');
  totalSum = 0;

  productArray.forEach(product => {
    totalSum += updateSubtotal(product);
  });

  //totalSum gets rounded to 2 decimals (and converted into a string in the process but who's counting)

  totalSum = totalSum.toFixed(2);

  //and now we modify the total

  document.querySelector('#total-value > span').innerHTML = totalSum;
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

const removeButton = document.querySelectorAll(".btn-remove");


function productRemoveListener(event) {
  console.log("is this thing on");
}

for (let i = 0; i < removeButton.length;  i++) {
  removeButton[i].onclick = productRemoveListener;
}
// ITERATION 5

function createProduct(event) {
  // ...
}
