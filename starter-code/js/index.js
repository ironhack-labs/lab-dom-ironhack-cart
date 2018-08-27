function deleteItem(e){

}

function getPriceByProduct(){
  var str = document.getElementById("cost-item").innerHTML;
  var price = str.slice(1, str.length)
  var priceItem = parseInt(price)

  var qty = document.getElementById("qty").value;
  var qtyNum = parseInt(qty)
  var totalItem= priceItem*qtyNum;

  document.getElementById("total-cost-item").innerHTML = "$" + totalItem;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(){
  var itemName = document.getElementById("newItem").value
  var itemPrice = document.getElementById("newPrice").value
  var itemUnitPrice = parseInt(itemPrice)

 var cart = document.getElementsByClassName("items")
 var item  = document.getElementById("product")
 var button = document.getElementById("add-btn")
  
 var div = document.createElement("div")
    div.appendChild(item)
    cart.appendChild(div)
}

//function createNewItem(){
 // var input = document.getElementsByTagName("input");
 // input.removeAttribute("hidden")
//}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
