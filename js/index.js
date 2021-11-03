// ITERATION 1

function updateSubtotal(products) {
    const $price = document.querySelector('.price span');
   const $quantity = document.querySelector('.quantity input');
   const thePrice =  $price.textContent;
   const theQuantity = $quantity.value;
   let subTotal = document.querySelector('.subtotal span');

   let subTotalPrice = Number(thePrice) * theQuantity;
   subTotal.innerText = subTotalPrice;
    
   return subTotalPrice;
   //window.alert(subTotalPrice);
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test
  let products = document.getElementsByClassName('product');
  updateSubtotal(products);


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
