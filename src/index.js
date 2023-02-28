// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`);
  const quantity = product.querySelector(`.quantity input`).value;
  const totPrice = price.innerHTML * quantity;
  product.querySelector(`.subtotal span`).innerText = totPrice;
  let subTotal =  product.querySelector(`.subtotal span`).innerText;
  
  
  
  return subTotal;
 


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  let products = [...document.getElementsByClassName("product")];
  for(let i=0 ;i< products.length; i++){
    
    total = total + parseFloat(updateSubtotal(products[i]));
  
  };
  //document.getElementById(`total-value`).innerHTML = total

  document.querySelector(`#total-value span`).innerHTML = total;
//console.log(total);

  //... your code goes here

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
