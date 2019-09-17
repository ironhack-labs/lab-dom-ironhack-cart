function deleteItem(e){
  console.log(e);
  var productList = document.querySelector('#product-list')
  productList.removeChild(e.target.parentElement.parentElement)
}
// onclick="deleteItem(this.parentNode.parentNode)
function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var price = document.getElementsByClassName('unit-price')
  var qnt = document.getElementsByClassName('qnt')
  var itemTotalPrice = document.getElementsByClassName('item-total-price')
  var cartTotalPrice = document.getElementById("cart-total-price")
  var cont = 0

  for(var i = 0; i<itemTotalPrice.length ; i++){
    cont += price[i].innerHTML * qnt[i].value
    itemTotalPrice[i].innerHTML = "$"+price[i].innerHTML * qnt[i].value;
  }
cartTotalPrice.innerHTML = cont


}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(tagType, dataType, name){
  var newNode = document.createElement(tagType)
  newNode.setAttribute(dataType, name)
  return newNode
}

function createNewItemRow(itemName, itemUnitPrice){
var list = document.getElementById("product-list")
var newRow = createItemNode('div', 'class', 'product')
var newName = createItemNode('span', 'class', 'item-name')
var newPrice = createItemNode('span', 'class', 'unit-price')

newName.innerHTML = itemName.value
newPrice.innerHTML = itemUnitPrice.value

newRow.appendChild(newName)
newRow.appendChild(newPrice)

list.appendChild(newRow)
}

function createNewItem(){
  var price = document.getElementById("new-price")
  var name = document.getElementById("new-name")

  
  createNewItemRow(name, price)
  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  console.log(createItemButton);
  

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
