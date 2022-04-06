// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  
  const quantity = product.querySelector(".quantity input")
  const subtotal = product.querySelector(".subtotal span")
  
  const priceNumber = parseFloat(price.innerText)
  const quantityNumber = parseFloat(quantity.value)
  
  const subtotalNumber = priceNumber * quantityNumber
  subtotal.innerText = subtotalNumber

  return subtotalNumber
}


function calculateAll() {

  const products = document.querySelectorAll('.product');
  let totalSum = 0;

  products.forEach( (product) => {
    subtotal =  updateSubtotal(product);
    totalSum += subtotal;
  });

  let total = document.querySelector("#total-value span");
  total.innerText = totalSum;
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target to remove is:', target);
  
}

// ITERATION 5
function createProduct() {
  document.createElement('product');
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
