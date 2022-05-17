// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const numInput = product.querySelector('.quantity input');
  const quantity = numInput.value;

  const calc = (price * quantity);

  const subtotal = product.querySelector('.subtotal span').textContent = `${calc}`;

  return calc ;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  const totalInput = document.querySelector('h2#total-value span');
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach((element) => (total += updateSubtotal(element)));

 totalInput.textContent = total

console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
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
