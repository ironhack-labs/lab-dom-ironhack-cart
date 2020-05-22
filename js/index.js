// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const calculateSubt = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  
  subtotal.innerText = calculateSubt;

  
}

function calculateAll() {

  
  // ITERATION 2
  
  const allProducts = document.getElementsByClassName('product');
  [...allProducts].map(product => updateSubtotal(product))

  // ITERATION 3

  const allSubtotals = document.querySelectorAll('.subtotal span');
  const calculateTotal = [...allSubtotals].reduce((acc, number) => acc + Number(number.innerText), 0);
  const total = document.querySelector('#total-value span')
  
  total.innerText = calculateTotal;

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
