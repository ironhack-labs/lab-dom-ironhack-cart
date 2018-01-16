
function deleteItem(e){
  e.target.parentElement.parentElement.remove();
}

function getPriceByProduct(itemNode){
  var len = document.getElementsByClassName("productname");
  
  for (var i = 0; i < len; i++){
    var getPriceforOne = document.getElementsByClassName("priceforone")[1].innerText;
    var numberItems = Number(document.querySelectorAll(".quantity-input")[1].value);

    var price = Number(getPriceforOne.slice(1));

    var totalItem = price * numberItems;
    
    document.getElementsByClassName("prices-total")[1].innerText = "$" + totalItem.toFixed(2);
  }

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalItems = Number(document.querySelectorAll(".priceforone").innerText);

  var totaly = function(totalItems){
    for(var)
    totaly+= totalItems[i];
  }
}
  document.querySelector("#totality").innerText = "$" + totaly.toFixed(2);

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
  var inputs = document.querySelectorAll(".number-Items").value;

  calculatePriceButton.onclick = getTotalPrice;
  inputs.addEventListener("input", getPriceByProduct());
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


// document.body.appendChild(myCard);