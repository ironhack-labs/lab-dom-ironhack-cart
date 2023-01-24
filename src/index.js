// ITERATION 1

function updateSubtotal(product) {
   //... your code goes here
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const subtotalText = price * quantity;
  subtotal.innerText = subtotalText;
  return subtotalText
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  const products = document.getElementsByClassName('product');
    let total = 0;
    for (let i=0;i<products.length;i++){
      total += updateSubtotal(products[i]);
    }
    document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target1 = event.currentTarget;
  console.log('The target in remove is:', target1);

  
const target2 = event.currentTarget;
const product = target2.closest('.product');
product.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName('action');
for (let i = 0; i < removeButtons.length; i++){
  removeButtons[i].addEventListener('click', removeProduct)}
});
