// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
    const price = product.querySelector('.price span');
    const priceValue = Number(price.innerText);
  
    const quantity = product.querySelector('.quantity input');
    const quantityValue = quantity.valueAsNumber;
    const subtotalId = product.querySelector(".subtotal span");
    subtotalId.innerText = priceValue * quantityValue;
    
    return subtotalId.innerText;
    
}
const calculate= document.getElementById('calculate')
function calculateAll() {
  const singleProduct = document.querySelectorAll('.product');
  let Total = 0;
  for (i=0; i<singleProduct.length; i++){
    updateSubtotal(singleProduct[i]);
    Total = Total + updateSubtotal;
  }
  const myTotal = document.querySelector('h2 span');
  myTotal.innerText = Total;
  calculate.addEventListener('click', calculateAll);
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
