// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span") .innerText;
  const quantity = product.querySelector(".quantity input") .value;
  //console.log(Number(price.innerText), quantity.value);
  let subtotal = price * quantity;
  //console.log("here is the subtotal", subtotal);
  product.querySelector('.subtotal span').innerHTML=subtotal;
  return subtotal;
}

function calculateAll() {
 let total=0;
let subtotal=document.querySelectorAll('prodcut');
for (oneproduct of subtotal) total += updateSubtotal(oneproduct);
document.querySelector('h2 span').innerText=total;
}

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


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
