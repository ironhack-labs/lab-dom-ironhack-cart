function deleteItem(e){
  var items = e.target.parentElement.parentElement;
  items.parentElement.removeChild(items);
}

function toFixedPrice(number){
  return "$" + (number).toFixed(2);
}

function getTotalPrice() {
  var unitPriceSpans = document.getElementsByClassName("unitPrice");
  var quantitySpans = document.getElementsByClassName("quantity");
  var totalPriceSpans = document.getElementsByClassName("totalPrice");
  var totalPriceSpan = document.getElementById("totalPrice");

  var totalPrice = 0;

  for(var i = 0; i < unitPriceSpans.length ; i++){
    var units = parseInt( unitPriceSpans[i].innerHTML.replace(/[^0-9\.]+/g,"") );
    var qtyText = quantitySpans[i].value.replace(/[^0-9\.]+/g,"");
    var qty = (qtyText === "") ? 0 : parseInt(qtyText);

    if(qty === 0){
      quantitySpans[i].value = 0;
    }else{
      var partial = qty*units;
      totalPrice += partial;
      totalPriceSpans[i].innerHTML = toFixedPrice(partial);
    }
  }

  totalPriceSpan.innerHTML = toFixedPrice(totalPrice);
}

function createQuantityInput(){
  return '<input class="quantity" type="text" name="qty" placeholder="0">';
}

function createDeleteButton(){
  return '<div><input class="btn btn-delete" type="button" name="delete" value="Delete"></div>';
}

function createQuantityNode(){
  return '<div><label for="qty">QTY</label>' + createQuantityInput() + '</div>';
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var container = document.getElementById("container");

  var newItem = '<div class="item"><div><span>' + itemName + '</span></div><div><span class="unitPrice">' + toFixedPrice(itemUnitPrice) + '    </span></div>' + createQuantityNode() + '<div><span class="totalPrice">$0.00</span></div>' + createDeleteButton() + '</div>';

  container.innerHTML += newItem ;

  addDeleterListener();
}

function createNewItem(){
  var newNameInput = document.getElementById("new-name");
  var newPriceInput = document.getElementById("new-price");

  var newName = newNameInput.value;
  var newPrice = newPriceInput.value;
  var newPriceVal = parseInt(newPrice);

  if(isNaN(newPriceVal)){
    newNameInput.value = "";
    newPriceInput.value = "";
  }else{
    createNewItemRow(newName, newPriceVal);
  }
}

function addDeleterListener(){
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
};
