// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const mult = price * quantity;
  const subtotal = product.querySelector('.subtotal span') 
  subtotal.innerText = mult
  return mult                  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const totalProducts = document.querySelectorAll('.product')
  let totalPrice = 0
  totalProducts.forEach(product => {totalPrice +=  updateSubtotal(product)})
  console.log(totalPrice)
  
  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = totalPrice
}

// ITERATION 4

window.addEventListener('load', () =>{  const removeButton = document.getElementsByClassName('btn-remove');  
const removeButtonArray = [...removeButton];  
removeButtonArray.forEach((remove) =>{    
  remove.addEventListener('click', removeProduct);  });});
function removeProduct(event) {  const target = event.currentTarget;  
  console.log('The target in remove is:', target);  
  //... your code goes here  
  this.parentNode.parentNode.remove();      
  const total = document.getElementById('calculate');   total.click();}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
