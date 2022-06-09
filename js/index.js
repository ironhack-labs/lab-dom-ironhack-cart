// ITERATION 1

const { NetworkManager } = require("puppeteer");

function updateSubtotal(product) {

  const price = product.querySelector('.price span').textContent;;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalBox = product.querySelector('.subtotal span');

  let subtotal = Number(price) * Number(quantity);

  subtotalBox.textContent = subtotal;

  return subtotal;
}

function calculateAll() {

  // ITERATION 2 & 3

  const products = document.getElementsByClassName('product');
  let total = 0
  for (product of products) {
    total += updateSubtotal(product)
  }

  const totalValue = document.querySelector('#total-value span');
  totalValue.textContent = total;
  
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
  calculateAll() ;
}


// ITERATION 5

function createProduct() {
   let newproduct = document.querySelector('product')
   const inputName = document.querySelector('input[type="text"]').value;
   const unitPrice = document.querySelector('input[placeholder="Product Name"] ').value;
   
   
   
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.querySelectorAll('.btn-remove')

  for(button of removeButton) {
    button.addEventListener('click', removeProduct);
  } 

  const createBtn = document.querySelector('#create'); 
  createBtn.addEventListener('click', createProduct); 
});