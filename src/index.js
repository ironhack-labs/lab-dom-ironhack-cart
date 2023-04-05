// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText ;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price  * quantity;
product.querySelector('.subtotal span').innerHTML = subtotal; 
}




function calculateAll() {

  const allProducts = document.querySelectorAll('.product')
    allProducts.forEach((productsToUpdate) => {
    updateSubtotal(productsToUpdate);
  });
let totalPrice = 0;
   allProducts.forEach(product => {
   let subtotalEl = product.querySelector('.subtotal span')
   totalPrice += Number(subtotalEl.innerHTML)
    
   })
 let total = document.querySelector('#total-value span');
 total.innerHTML = totalPrice
 return totalPrice
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
