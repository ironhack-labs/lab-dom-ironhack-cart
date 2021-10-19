// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");
  const price = parseFloat(priceElement.innerText);
  console.log(price);
  const quantity = quantityElement.valueAsNumber;
  const subTotal = price * quantity;
  const subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerText = subTotal;
  return subTotal;
}
  

function calculateAll() {
  //update subtotals of all products
  const cartRows = document.getElementsByClassName("product");
  let totalValue = 0;
  for(let value of cartRows){
   totalValue += updateSubtotal(value)
 }
 console.log(totalValue);
 document.querySelector("#total-value span").innerHTML = totalValue;
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