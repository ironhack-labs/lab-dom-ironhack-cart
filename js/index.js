// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span");
  let priceValue = price.innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = priceValue * quantity;
  return priceValue * quantity;
}
  // ITERATION 2
function calculateAll() {
  let allProducts = document.getElementsByClassName("product");
  let sum = 0;
  for(let i=0; i < allProducts.length; i++){
    
   sum += updateSubtotal(allProducts[i]);
  }
  
  let total = document.querySelector("#total-value span");
  total.innerHTML = sum;

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
