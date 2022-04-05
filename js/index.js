// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const priceNumb = parseFloat(price.innerText);
  const quantityNumb = parseFloat(quantity.value);
  const result = priceNumb * quantityNumb;
  
  const subText = product.querySelector('.subtotal span');
  subText.innerText = result;
  console.log(result);
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  let firstSubtotal = updateSubtotal(products[0]);
  let secondSubtotal = updateSubtotal(products[1]);
  let total = firstSubtotal + secondSubtotal;
  console.log(total);
  
  
  // ITERATION 3
  const totalText = document.querySelector('#total-value span');
  totalText.innerText = total;
  return total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
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
