// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

const price = product.querySelector('.price span');
const quantity = product.querySelector('.quantity input').value;
const subtotal = price.innerHTML* quantity;

const subtotalValue = product.querySelector('.subtotal span')

console.log(subtotalValue);

  
subtotalValue.innerHTML = subtotal; 

return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test
   
  const products = document.getElementsByClassName('product');
  const h2Tag = document.querySelector('#total-value span');

  let total = 0;

  for (i=0; i< products.length; i++) {
    let singleProduct = products[i];
    const subtotal = updateSubtotal(singleProduct);
    total += subtotal;
    
  }

  h2Tag.innerHTML= total;
  

  // ITERATION 2
  

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
