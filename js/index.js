// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const price1 = parseInt(price.innerHTML);
  const quantity1 = parseInt(quantity.value);

  const subtotalPrecios = price1 * quantity1;
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotalPrecios;

  return subtotalPrecios
}




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  //it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = document.getElementsByClassName('product');
  console.log(products);
  let sumaTotal = 0;

  for(i=0; i<products.length; i++) {
    let element = products [i];

    sumaTotal += updateSubtotal(element);
    
  }

  // ITERATION 3
  let total = document.getElementById('total');

  total.innerHTML = sumaTotal;

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
