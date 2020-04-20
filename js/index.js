// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // const newPrice = parseFloat(price.innerHTML);
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  //... your code goes here
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = quantity * price;
  return quantity * price;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
    // ITERATION 2
  let total = 0;
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++){
    updateSubtotal(products[i]);
    total += updateSubtotal(products[i]);
    console.log(total);
    // total += product.querySelector('.price span').innerHTML;
  }
  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
  // ITERATION 3


  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  console.log('The target in remove is:', target);
  let products = document.querySelector('.product')

  //... your code goes here
}




// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const buttonArr = document.querySelectorAll('.btn-remove');
  for (let i = 1; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click', removeProduct);
  }
  

  //... your code goes here
});
