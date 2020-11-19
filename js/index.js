// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity; 
  const subtotalEl = product.querySelector('.subtotal');
  subtotalEl.innerHTML = "$" + subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const products = [...document.getElementsByClassName('product')];
  console.log(products);
  let total = 0;
  products.forEach(product => {
    const result = updateSubtotal(product);
    console.log(result);
    total = total + result;
  });
  console.log(total);
  // ITERATION 3
  const totalValue = document.getElementById("total-value");
  totalValue.innerHTML = "Total: $" + total; 
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
