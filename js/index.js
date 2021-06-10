// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  console.log('Calculating subtotal, yey!');

  const subtotal = price * quantity
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

 // ITERATION 2

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let total = 0

  const products = document.querySelectorAll('.product');

  for (let i=0; i < products.length; i+=1){
    const outroSubtotal = updateSubtotal(products[i]);
    total += outroSubtotal
  }

   // products.forEach((product) => (total += updateSubtotal(product))) outro exemplo de escrever


  // ITERATION 3

  document.querySelector('#total-value span').innerText = total.toFixed(2) // toFixed para colocar 2 casas dps da virgulaisminjjj


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
