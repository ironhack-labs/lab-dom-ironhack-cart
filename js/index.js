// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity
  
  product.querySelector('.subtotal span').innerHTML = subtotal 

  return subtotal;
}
  

function calculateAll() {
  let sumaTotal = 0
   

  // ITERATION 2
  const product = cart.getElementsByClassName('product')

  for(let i = 0; i < product.length;i++) {
    updateSubtotal(product[i]) 
    sumaTotal += updateSubtotal(product[i])  
}

  // ITERATION 3
 
  document.querySelector('#total-value span').innerHTML = sumaTotal

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

});