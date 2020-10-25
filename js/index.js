// ITERATION 1
 //... your code goes here
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price=product.querySelector('.price span').innerHTML;
  const quantity=product.querySelector('.quantity input').value;

  let subtotal=price*quantity;
  product.querySelector('.subtotal span').innerText;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.getElementsByClassName ('.product');
  for(let i=0; i<multipleProducts.length;i++){
    updateSubtotal(multipleProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
  let total=0;
  const priceProducts = document.getElementsByClassName ('.subtotal');
  for(let i=0; i<priceProducts.length;i++){
    total=total + priceProducts.innerText;
  }
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
