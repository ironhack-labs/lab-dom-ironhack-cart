// ITERATION 1
let maxTotal=0;

function updateSubtotal(product) {
  const price=product.querySelector(".price span")
  const quantity=product.querySelector(".quantity input")
  const subTotal=price.innerText*quantity.value
  product.querySelector(".subtotal span").innerText=subTotal
  maxTotal += subTotal;
  return subTotal;
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  const allProducts=document.getElementsByClassName("product");
  const allProductsArray=[...allProducts];
  let total=0;
  allProductsArray.forEach(product => {
     updateSubtotal(product)
  });

  document.querySelector('#total-value span').innerText = maxTotal;
  maxTotal = 0;
  /* const allTotals=document.getElementsByClassName("subtotal");
  const allTotalsArray=[...allTotals];
  
  allTotalsArray.forEach(subtotal => {
    updateSubtotal(subtotal)
    maxTotal+=0
  });
  return maxTotal */
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
