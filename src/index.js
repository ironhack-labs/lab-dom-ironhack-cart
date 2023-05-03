// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerHTML);

  const quantity = product.querySelector('.quantity>input');
  const quantityValue = parseInt(quantity.value, 10);


  const resultado = quantityValue*price
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = resultado


  return resultado

}

function calculateAll() {
  let allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach((product)=>{
    const subtotal = updateSubtotal(product);
    total += subtotal
  })


  return console.log(total)
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
