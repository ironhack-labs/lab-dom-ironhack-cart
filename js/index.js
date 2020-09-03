// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // INIT VARIABLE
  let price = 0;
  let quantity = 0;
  let unitPrice;
  console.log(product);

  quantity = product.querySelector('.quantity input').value;
  unitPrice = product.querySelector('.price span').innerHTML;
  let subtotal =  product.querySelector('.subtotal span');

  unitPrice = Number(unitPrice);
  // console.log(unitPrice, typeof unitPrice);
  price = (quantity * unitPrice);
  console.log('fixed', price);
  let transFormPrice = price.toFixed(2);
  subtotal.innerHTML = transFormPrice;
  
  return price;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // let subtotalLine = updateSubtotal(singleProduct);
  //console.log('in calculate all, subtotalline: ', subtotalLine);
  // end of test

  // ITERATION 2
  //... your code goes here

  let products = document.querySelectorAll('.product');
  console.log('les prducts: ', products);
  var total = 0;
  for(let i = 0; i < products.length; i++ ) {
    //execute
    let subtotalLine = updateSubtotal(products[i]);
    console.log(subtotalLine);
    total += subtotalLine;
  }
  console.log('total value after loop: ', total);

  let transformTotal = total.toFixed(2);
  console.log('transform total: ', transformTotal)
  document.querySelector('#total-value span').innerHTML = transformTotal;
  // ITERATION 3
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
