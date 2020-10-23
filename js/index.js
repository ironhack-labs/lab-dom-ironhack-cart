// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector(".quantity > input")
  const numberOfQuantity = quantity.value
  const subTotalPrice = price.innerText * numberOfQuantity
  const subTotal = product.querySelector(".subtotal > span")
  subTotal.innerText = subTotalPrice
  return subTotalPrice.innerText
}

function updateTotal(subtotal){
const subTotal = subtotal.querySelector(".subtotal")
const totalTag = document.querySelector("#total-value")
totalTag.innerText = subTotal.innerText
return totalTag.innerText
}

function calculateAll() {
  // ITERATION 2
  const singleProduct = document.querySelectorAll('.product');
  singleProduct.forEach(updateSubtotal);

  // ITERATION 3
  let total = 0
  const singleSubTotal = document.querySelectorAll(".subtotal > span");
  singleSubTotal.forEach(function callBack(currentValue,index){
    const subTotal = Number(currentValue.innerText)
    total += subTotal
  })
  const totalTag = document.querySelector("#total-value > span")
  totalTag.innerText = total
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //const cartTag = document.querySelector("#cart")
  //const singleProduct = document.querySelectorAll('.product');
  //console.log('The target in remove is:', target);
  //cartTag.removeChild(singleProduct)
  const tag = target.parentNode.parentNode;
  tag.parentNode.removeChild(tag);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelector(".btn-remove")
  removeBtn.addEventListener('click', removeProduct);

});
