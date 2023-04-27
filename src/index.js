// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = parseFloat(product.querySelector('.price span').innerHTML);
  console.log(typeof price);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  console.log(typeof quantity);
  const subtotal = price * quantity;
  console.log(typeof subtotal);
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let singleProduct = document.getElementsByClassName("product");
  let total = 0;
  for (let i = 0; i < singleProduct.length; i++) {
    let subtotal = parseFloat(updateSubtotal(singleProduct[i]));

  // ITERATION 3
  //... your code goes here

   total += subtotal;
    console.log(typeof total);
  }
  document.getElementById('total-value').innerHTML = `Total: $${total.toFixed(2)}`;
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
