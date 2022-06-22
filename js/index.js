// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span") 
  // --> Is this the best approach to get single strings, numbers, etc (not arrays)?
  const priceNum= parseInt(price.innerText)

  const quantity = product.querySelector(".quantity input")
  const quantityNum= parseInt(quantity.value)

  const subtotal = product.querySelector(".subtotal")
  subtotal.innerText = priceNum * quantityNum
}

function calculateAll() {
  
  // ITERATION 2

  const all = document.getElementsByClassName("product") 
  //--> if I want to get an array, is it better to use getElementsByID?
  const allArr = [...all];
  allArr.forEach((product) => updateSubtotal(product));
    
  // ITERATION 3

  const subtotal = document.getElementsByClassName("subtotal");
  const subtotalArr = [...subtotal];
  const total = subtotalArr.reduce((accumulator, currentValue) => Number(accumulator.innerText) + Number(currentValue.innerText))
  const totalValue = document.querySelector ("#total-value span")
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  // console.log (productRem);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProdBtn = document.querySelectorAll('.btn-remove');
  removeProdBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct)})

  //... your code goes here
});
