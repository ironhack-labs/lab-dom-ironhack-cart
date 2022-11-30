// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML;
  
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  
  const subtotal = price * quantity;

  const subtotalElm = product.querySelector('.subtotal span');
  
  subtotalElm.innerText = subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArray = [...products];  // convert html collection to an array
  productsArray.forEach(currentProduct => {
    updateSubtotal(currentProduct);
  });

  // ITERATION 3
  let totalPrice = 0;

  productsArray.forEach(currentProduct => {
   const price = currentProduct.querySelector('.price span').innerHTML;
    const quantity = currentProduct.querySelector('.quantity input').valueAsNumber;

    const subtotal = price * quantity;

    totalPrice += subtotal;

  });
  
  const totalElm = document.getElementById('total-value');
  totalElm.innerText = totalPrice;
}

// ITERATION 4
//parentContainer.removeChild(myElm);
function removeProduct(event) {
  debugger;
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// window.addEventListener('click', (e) => {
//   const removeBtn = document.getElementsByClassName('btn btn-remove');
//   removeBtn.addEventListener('click', removeProduct(e));
// });

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
