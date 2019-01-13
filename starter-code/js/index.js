function deleteItem(e){
  var currentRow = e.currentTarget.parentNode.parentNode;
  currentRow.parentNode.removeChild(currentRow);
}

function getTotalPrice() {
  var prices = document.getElementsByClassName("unit-cost");
  var quantities = document.getElementsByClassName("input");
  var totalPrice = document.getElementsByClassName("line-price");
  var grandTotal = 0;
  for(var row = 0; row < prices.length; row++) {
    var rowTotal = (prices[row].children[0].innerText.slice(1)) * (quantities[row].value);
    totalPrice[row].children[0].innerText = `€${rowTotal.toFixed(2)}`;
    grandTotal += rowTotal;
  }
  document.getElementsByTagName("h2")[0].innerText = `Total Price: €${grandTotal}`;
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
  var parent = document.getElementById('create').parentNode.parentNode;
  var firstChild = document.getElementById('create').parentNode;
  var newDiv = document.createElement('div');
  newDiv.setAttribute("class","product-row")
  parent.insertBefore(newDiv, firstChild);
}

function createNewItem(){
  var itemName = document.getElementsByClassName("new-product-name")[0].children[0].children[0].value;
  var itemUnitPrice = document.getElementsByClassName("new-unit-cost")[0].children[0].children[0].value;
  createNewItemRow(itemName, itemUnitPrice);
}

window.onload = function(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createButton = document.getElementById("create");
  calculatePriceButton.onclick = getTotalPrice;
  createButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}


