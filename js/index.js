// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price=product.querySelector('.quantity input')
  const sub=product.querySelector('.subtotal span')
  const priceNumber=Number(price.innerHTML)
  const quantityNum=Number(quantity.value)
  const subtotal=(priveNumber*quantityNum)
  return subtotal;

   //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}const productsAdded = document.getElementsByClassName("product");
const totalValue = document.getElementById("total-value span");
let total = 0;

for (let i = 0; i <= productsAdded.length; i++) {
  total += updateSubtotal(productsAdded[i]);
  console.log(total);
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
