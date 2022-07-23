// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;

  return parseFloat(subtotal.innerHTML);
}

function calculateAll() {
  const products = document.getElementsByClassName("product");
  const arrProd = [...products];

  let total = 0;
  for (i in arrProd) {
    total += updateSubtotal(arrProd[i]);
    console.log(updateSubtotal(arrProd[i]));
  }
  console.log(total);
  document.querySelector('#total-value span').innerHTML = total;

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
  
  const removeElBtn = document.getElementsByClassName('.btn-remove');
  const arrRemove = [...removeElBtn];
  for(i in arrRemove) {
    arrRemove[i].addEventListener('click',removeProduct('click'));
  }

  //... your code goes here
});
