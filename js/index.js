// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //Variables para precio y cantidad
  let price = product.querySelector('.price span');  
  let quantity = product.querySelector('.quantity input');
  //innerHTML no es un input, queremos lo que contiene el span
  console.log(price.innerHTML)
  // value, queremos el valor del input.
  console.log(quantity.value)

  // Calcular el subtotal
  let calculateSubTotal = price.innerHTML * quantity.value;  
  console.log(calculateSubTotal)
  //Colocar el subtotal en la casilla
  product.querySelector('.subtotal span').innerText = calculateSubTotal;

  return calculateSubTotal; 

}

function calculateAll() {
  // ITERATION 2  
  let total = 0;
  let products = document.querySelectorAll('.product');
  products.forEach((elem) => {
    total += updateSubtotal(elem);
  });

  // ITERATION 3  
  document.querySelector('#total-value span').innerHTML = total;
}
  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  window.addEventListener('click', removeProduct)
  
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
