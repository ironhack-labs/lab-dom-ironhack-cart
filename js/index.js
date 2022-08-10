// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subTotalPrice = quantity * price;
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = subTotalPrice;
  return subTotalPrice;
}


// ITERATION 2-3

function calculateAll() {
  let priceTotal = 0;
  const priceTotalInnerText = document.querySelector("#total-value span");
  const productArray = [...document.getElementsByClassName("product")];
  for (let i=0; i < productArray.length; i++){
      updateSubtotal(productArray[i]);
      priceTotal += updateSubtotal(productArray[i]);
  }
  priceTotalInnerText.innerText = priceTotal;
}

// ITERATION 4
const removeButtons = [...document.getElementsByClassName("btn btn-remove")];
removeButtons.forEach(element => {element.addEventListener("click", removeProduct)});

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.querySelector(".quantity input").value = 0;
  calculateAll();  
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
