// ITERATION 1

function updateSubtotal(product) {

  const price = parseFloat(product.querySelector(".price span").innerHTML);
  const quantity = product.querySelector(".quantity input").valueAsNumber;
  
  const subtotalNum = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotalNum;

  return subtotalNum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const availableItems = document.getElementsByClassName('product');
  

  // ITERATION 2
  let total = 0;

  for (item of availableItems) {
    total += updateSubtotal(item);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
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
