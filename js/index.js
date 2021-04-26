// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = document.querySelector('.price span').innerHTML;
  const quantity = document.querySelector('.quantity input').value;
  subTotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;

}



function calculateAll() {

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;
  allProducts.forEach(product => {
    totalPrice += updateSubtotal(product)
  })
  document.querySelector('#total-value span').innerHTML = totalPrice;
  // Remarque : le 2è produit n'est pas affacté par cette fonction :( 
  // Q : Pourquoi ?

  // ITERATION 3
}

// ITERATION 4;k

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
