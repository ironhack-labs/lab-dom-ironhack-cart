function deleteItem(e){
  var wrapper = e.currentTarget.parentNode.parentNode
  var container = document.querySelector("section.container")
  return container.removeChild(wrapper)
}

function getPriceByProduct(itemNode){
  var price = itemNode.querySelector("span.price")
  return parseInt(price.innerHTML)
}

function updatePriceByProduct(productPrice, qty, index){
  var total = productPrice * qty
  var product = document.getElementsByClassName("product")[index]
  return product.querySelector("span.total").innerHTML = total 
}

function getTotalPrice() {
  var product = document.getElementsByClassName("product")
  var total = 0
  for(var i=0; i<product.length; i++) {
    var price = product[i].querySelector("span.price").innerHTML
    var qty  = product[i].querySelector("#number-product").value
    updatePriceByProduct(price, qty, i)
    total += (price * qty)
  }
  return document.querySelector("span.total-price").innerHTML = total; 
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
