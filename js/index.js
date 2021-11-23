// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value
  const subTotal = price*quantity
  product.querySelector('.subtotal span').innerText = subTotal
  return subTotal


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test
  
  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  console.log(allProducts)

  let sumTotal = 0
 for (let i = 0; i < allProducts.length; i++){
  
   sumTotal += updateSubtotal(allProducts[i]);
  }


  // ITERATION 3

  const total = document.querySelector('#total-value span');
  total.innerText = sumTotal
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
