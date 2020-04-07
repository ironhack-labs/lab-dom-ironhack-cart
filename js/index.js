// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = Number(product.querySelector('.price span').innerText)
  const quantity = Number(product.querySelector('.quantity input').value)
  let subtotal = product.querySelector('.subtotal > span')
  subtotal.innerHTML = price * quantity
  return price * quantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0
  let x = document.getElementsByClassName('product')
  for(i=0;i<x.length;i++)
  {
    updateSubtotal(x[i])
    total = total + parseFloat(x[i].querySelector('.subtotal span').innerText);
  }
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = total.toFixed(2)
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
