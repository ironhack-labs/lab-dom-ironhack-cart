// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  //create variables for the price and quantity
  const price = product.querySelector('.price span');
  //console.log(price)
  const quantity = product.querySelector('.quantity input').value;
  //console.log(price.innerText);
  //console.log(quantity);
  //create a variable to store the updated subtotal (quantity*price)
  const subTotal = Number(quantity * price.innerText);
  //console.log(subTotal)
  //updating the inner text of the subtotal
  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  //console.log(allProducts)
  for (let product of allProducts) {
    updateSubtotal(product);
  }

  // ITERATION 3
  //Store the sum of all the subtotals in a variable
  let sumAllSubTotals = 0;
  for (let product of allProducts) {
    sumAllSubTotals += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = sumAllSubTotals;
  //change the inner of the span with the total value with the variable
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  const parent = event.currentTarget.parentNode.parentNode.parentNode;
  console.log(parent)
  console.log('The target in remove is:', target);
  //... your code goes here
  parent.removeChild(target)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  //console.log(calculatePricesBtn)
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  //console.log(removeBtns)
  removeBtns.forEach(function (btn){
    btn.addEventListener('click', removeProduct)
  })
  //WHY does this not work??
  /*
  for (let btn in removeBtns){
    btn.addEventListener('click', removeProduct)
  }
  */
});

