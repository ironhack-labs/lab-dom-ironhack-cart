// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //const price = document.querySelector('.price span').innerText;
  //const quantity = document.querySelector('.quantity input').value;

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
}

console.log(document.querySelector('.price span').innerText);
console.log(document.querySelector('.quantity input').value);



function calculateAll() {

  var products = document.getElementsByClassName("product");
  let sum = 0;

  for(i = 0; i < products.length; i++) {

    sum += updateSubtotal(products[i]);

  }
  document.querySelector('#total-value span').innerText = sum;

  //document.getElementById("total-value").innerText = sum;

  console.log(sum);

  window.alert('Clicked!');

  return sum;


  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

//console.log(document.getElementsByClassName('product'));

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

  let buttons = document.querySelectorAll("btn btn-remove");

  document.querySelectorAll("btn btn-remove").addEventListener('click', () =>

    for(i=0; i < buttons.length; i++) {  
      removeProduct;
      button
    })

  //... your code goes here
});
