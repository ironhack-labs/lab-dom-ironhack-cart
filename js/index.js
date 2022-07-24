// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const totalPrice = price*quantity
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = totalPrice
  return totalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  // comento la iteración 2 porque la iteración 3 también realiza lo mismo
  // for (element of products){
  // updateSubtotal(element)   
  // }


  // ITERATION 3
  let chartPrice = 0
  for (element of products){
    chartPrice+= updateSubtotal(element)  
  }
  console.log(chartPrice)
  const totalChartPrice = document.querySelector('#total-value span')
  totalChartPrice.innerHTML = chartPrice
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
