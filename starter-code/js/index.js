function deleteItem(e){

}


function getPriceByProduct(itemNode){

  var unitPriceString = itemNode.querySelector(".unit-price").innerText

  var unitPrice = unitPriceString.slice(1)

  unitPrice = parseFloat(unitPrice).toFixed(2)

  return unitPrice

}



function getTotalPrice(e) {

  var items = document.getElementById("items").children;

  var total = 0
  	
	for (var i = 0; i < items.length; i++) {

    var price = getPriceByProduct(items[i]);

    var quantity = items[i].querySelector(".input").value
    
    var updatedPrice = price * quantity

    updatedPrice = updatedPrice.toFixed(2)

    items[i].querySelector(".total-price").innerHTML = updatedPrice

    total += parseFloat(updatedPrice)

  }

  document.querySelector("#total span").innerHTML = "$" + total

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
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
