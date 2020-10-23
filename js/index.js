// ITERATION 1 
// Calcular novo subtotal com alterações
// em Quantity. 

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
    let subtotal = 0;
    let price = product.querySelector('.price span').innerHTML
    let quantity = product.querySelector('.quantity input').value
    subtotal += price * quantity
    let subtotalElement = product.querySelector('.subtotal span')
    subtotalElement.textContent = subtotal
    return subtotal
}

/function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  

  // ITERATION 2
  
  /*function calculateAll() {
    const allProducts = document.getElementsByClassName('.price span')*document.getElementsByClassName('.quantity span')
updateSubtotal(product);  
  

  

  // ITERATION 3
  //... your code goes here
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
