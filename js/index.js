// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  subTotalPrice = price * quantity;
  sub = product.querySelector('.subtotal span');
  sub.innerText  = subTotalPrice;


return(subTotalPrice);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product') 
    for (product of allProducts) {
      updateSubtotal(product)
    }
  

  // ITERATION 3
  let totalValue = document.querySelector('#total-value > span');
  const subTotals = document.querySelectorAll('.subtotal > span');
  let totalSum = 0;
  for (subTotalPrice of subTotals) {
    totalSum = totalSum + Number(subTotalPrice.innerText);
  }
  totalValue.innerHTML = totalSum;
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
