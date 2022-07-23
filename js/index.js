// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price * quantity;
  
  return parseInt(subtotal.innerHTML);
}

 // ITERATION 2

function calculateAll() {
  const products = document.getElementsByClassName("product");
  const arrProd = [...products];

  // ITERATION 3

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

  //... your code goes here
});
