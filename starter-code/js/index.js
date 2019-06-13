// Get the price by product (span)
function getPriceByProduct(itemNode) {
  let item = parseInt(itemNode.innerHTML)
  return item
}

//: Get Quantity Input from DOM.
function createQuantityInput() {
  let inputQuantity = document.getElementsByTagName('input')
  let quantity = parseInt(inputQuantity[0].value)
  return quantity
}

function deleteItem(e){

}

function updatePriceByProduct(productPrice, index) {
    return `${productPrice * index}.00`
}

function getTotalPrice() {
  let productPrice = document.querySelector('.price')
  let validation = document.querySelector('.validation')
  let inputQuantity = document.getElementsByTagName('input')
  let updatePriceQuantity = document.querySelector('.update-price-quantity')

  let productPriceTag = getPriceByProduct(productPrice)
  let QuantityInput = createQuantityInput()  

  // Validation
  if(!QuantityInput) {
    validation.innerHTML = "You should write a number"
    updatePriceQuantity.innerHTML = "0.00"
    inputQuantity[0].value = ''
  } else {
    validation.innerHTML = ""
    updatePriceQuantity.innerHTML = updatePriceByProduct(productPriceTag, QuantityInput)
  }
}

function createDeleteButton(){

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  let calculatePriceButton = document.getElementById('calc-prices-button');
  let createItemButton = document.getElementById('new-item-create');
  let deleteButtons = document.getElementsByClassName('btn-delete');

  let productNameTag = document.getElementById('product-name');

  calculatePriceButton.onclick = getTotalPrice
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
