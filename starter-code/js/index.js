let allProducts = document.getElementsByClassName("product")
let itemQuantity = document.getElementsByClassName("item-quantity")[0]
let itemPrice = document.getElementsByClassName("item-price")[0]
let quantity = itemQuantity.value
let price = itemPrice.innerHTML
console.log(price)

function getPrice() {
  return quantity * price
}
