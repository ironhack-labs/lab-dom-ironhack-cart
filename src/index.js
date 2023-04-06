// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  console.log(Number(price.innerText),quantity.value)
  let subtotal = price.innerText * +quantity.value
  console.log(subtotal)

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  

  // ITERATION 2
  //... your code goes here
  const newP = document. getElementsByClassName(product)
  for (let i = 0; i < newP.length; i++) {
    updateSubtotal(newP[i]);
}


  // ITERATION 3
  //... your code goes here
  let total =0;
  total += parseFloat(rows[i].querySelector('.subtotal span').innerText);
  const totalElement = document.querySelector('#total-value span');
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
