// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let quantity = Number(product.querySelector('.quantity input').value);
  console.log("Quantity :" + quantity)
  let price = Number(product.querySelector('.price span').innerText);
  console.log("Price :" + price);
  let total = quantity * price;
  console.log("Total :" + total);
  console.log("product",product);
  product.querySelector('.subtotal span').innerText = total;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const products = document.querySelectorAll('.product');
  products.forEach(product=>{
    updateSubtotal(product);
  });




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
