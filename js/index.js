// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');

  const quantity = product.querySelector(".quantity input")

  const subtotal = product.querySelector(".subtotal span")

  const priceNumber = price.innerText

  const quantityNumber = quantity.value

  const subtotalNum = priceNumber * quantityNumber

  subtotal.innerText = subtotalNum;

  return subtotalNum;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // ITERATION 2
  var totalSum = 0;
  const products = document.querySelectorAll('.product');

   products.forEach( (product) => {
    
    subtotal = updateSubtotal(product);
    totalSum += subtotal});

  // ITERATION 3
  const total = document.querySelector("#total-value span")
  total.innerText = totalSum;
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
