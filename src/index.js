// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input")

  let itemCount = price.innerHTML * quantity.value; 
  console.log (itemCount); 

  const subTotal = product.querySelector(".subtotal span");

  subTotal.innerHTML = itemCount;
  console.log(itemCount)
}

  // ITERATION 2

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let totalSum = 0;

  for (let i = 0; i < allProducts.length; i++) { 
    totalSum += updateSubtotal(allProducts[i]); 
  }
  console.log(totalSum);

  let finalAmount = totalSum.document.getElementById('#total-value span').innerHTML += calculateAll();

  console.log(finalAmount);
  return finalAmount;
}

 // ITERATION 3

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
