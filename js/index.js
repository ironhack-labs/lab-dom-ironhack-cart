// ITERATION 1
function updateSubtotal(product) {
  
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input"); 
  const subtotal = product.querySelector(".subtotal span");
  
  const calculateSubtotal = price.innerHTML * quantity.value;
  
  subtotal.innerHTML = calculateSubtotal.toFixed(2);

  return calculateSubtotal;    
}
 
  // ITERATION 2
  function calculateAll() { 
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach(function(product) {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  }) 

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total.toFixed(2);  
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
