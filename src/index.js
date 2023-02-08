// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const resultado = price.innerHTML * quantity.value;
    const subtotal = product.querySelector('.subtotal span');
    subtotal.innerHTML = resultado;
    return subtotal.innerHTML
    // ... your code goes here
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let product = document.getElementsByClassName('product');
  let subResultado = 0;
  let resultadoFinal = 0;
  for(let i = 0; i < product.length; i++){
    
    subResultado = updateSubtotal(product[i])
    product[i].getElementsByClassName('subtotal')[0].getElementsByTagName('span')[0].innerHTML = subResultado
    
    resultadoFinal += parseFloat(subResultado)
    
  }

  document.querySelector('#total-value').querySelector('span').innerHTML = resultadoFinal;
  // ITERATION 2
  //... your code goes here

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
