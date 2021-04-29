// ITERATION 1

function updateSubtotal(product) {
    //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = Number(price.innerHTML) * Number(quantity.value)
  const subtotalDispĺay = product.querySelector('.subtotal span')
  subtotalDispĺay.innerHTML = subtotal 
  return subtotal
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here 
  const products = document.getElementsByClassName('product')
  let total = 0;
  //No pude utilizar el metodo forEach en el arreglo products ¿Por que pasa esto?
  for(let i = 0; i < products.length; i++) {total += updateSubtotal(products[i])}

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total;

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
