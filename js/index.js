// ITERATION 1

function updateSubtotal(product) {
  // Step 1 get the values of the product price and quantity
  // Step 2 make sure the values are numbers, because we want to calculate with them
  const price = Number(product.querySelector('.price span').innerHTML);
  
  const quantity = product.querySelector('.quantity input').value;
  

  // decline a variable with the calulation
  const subTotal = price * quantity;


  //change the dom bei putting out the calculated sum
  document.querySelector('.subtotal span').innerHTML = subTotal;

  //return the calculation result of subTotal
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
console.log(allProducts);
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }
  console.log(total);
return total;

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