// ITERATION 1

function updateSubtotal(products) {

  const price = products.querySelector('.price span');
  const quantities = products.querySelector('.quantity input');
  const subTotalTag = products.querySelector('.subtotal span');
  
  const updatedSubTotal = Number(price.innerText) * quantities.value;
  
  //console.log(quantities);
  //console.log(price);
  //console.log(subTotalTag);
  
  subTotalTag.innerText = updatedSubTotal;
  return updatedSubTotal; 
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let total = 0;
  const listProducts = document.getElementsByClassName('product');
  const totalsTag = document.querySelector('#total-value span');
  
  for(let i = 0; i<listProducts.length; i++){

    total += updateSubtotal(listProducts[i]);

  }

  // ITERATION 3
  totalsTag.innerHTML = total;
  
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
