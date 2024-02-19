
// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.product .price span').textContent
  const quantity = product.querySelector(".quantity input[type='number']").value
  const subTotal = product.querySelector('.product .subtotal span').textContent = price*quantity
  

  return subTotal

}

function calculateAll() {
 
  // Creamos variable para el valor total de nuestro carrito
  let total = 0

  // Seleccionamos todos los elementos con la clase "product"
  const products = document.querySelectorAll('.product');

  // Iteramos sobre cada producto y actualizamos el subtotal
  for(let value of products) {
    total += updateSubtotal(value)
  }

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span').textContent = total
}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove()

  calculateAll()
  
}

window.addEventListener('click', () => {
  const removeBtn = document.querySelectorAll('.btn-remove')
  
  for(let value of removeBtn) {
  
    value.addEventListener('click', removeProduct)
  }
  return removeBtn
})


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
