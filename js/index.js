// ITERATION 1


function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input').value;

  let priceValue = price.innerHTML
  let totalPrice = priceValue * quantity;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = totalPrice;
  return totalPrice;

}

function fungsi() {
  console.log(inputs[0].value);
}

function calculateAll() {

  let allProducts = document.getElementsByClassName('product');
  let totalFinal = 0;
  for (let i = 0; i < allProducts.length; i++) {
    // updateSubtotal(allProducts[i]);
    //25
    totalFinal += updateSubtotal(allProducts[i]);
  }
  const totalSpan = document.querySelector('#total-value span');
  totalSpan.innerText = totalFinal;
}


/* const singleProduct = document.querySelector('.product');
 updateSubtotal(singleProduct);*/


// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3


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
