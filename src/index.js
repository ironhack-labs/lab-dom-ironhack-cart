// ITERATION 1
console.log('Js is running')
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  let total = price.innerHTML * quantity.value;
  
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = total;

  return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('tr.product');
  updateSubtotal(singleProduct);*/

  // end of test

  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');
  let arrayOfProducts = [...allProducts];
  
  let productsTotal = 0;

  arrayOfProducts.forEach((element)=>{
    productsTotal += updateSubtotal(element);
})



  // ITERATION 3
  let totalOfProducts = document.querySelector('#total-value span');
  totalOfProducts.innerHTML = productsTotal;
  
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let i=0; i < removeBtn.length; i++){
  removeBtn[i].addEventListener('click', removeProduct);
  }
});
