
// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.product .price span').textContent
  const quantity = product.querySelector(".quantity input[type='number']").value
  const subTotal = product.querySelector('.product .subtotal span').textContent = price*quantity
  

  return subTotal

}

function calculateAll() {
 
  let total = 0
  // Seleccionamos todos los elementos con la clase "product"
  const products = document.querySelectorAll('.product');

  // Iteramos sobre cada producto y actualizamos el subtotal
  for(let value of products) {
    total += updateSubtotal(value)
  }

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
