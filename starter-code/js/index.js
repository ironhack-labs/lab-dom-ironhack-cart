
function deleteItem(){
    var child = event.currentTarget.parentNode;
    child.parentNode.removeChild(child);
}


function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrice = document.getElementsByClassName("unitPrice");
  var qty = document.getElementsByClassName("qty");
  var totalPrice = document.getElementsByClassName("priceTotal");
  var totalPriceItems = 0;
  for(var i=0; i < unitPrice.length; i++) {
    var total = Number(unitPrice[i].innerHTML) * qty[i].value;
    totalPrice[i].innerHTML = total;
    totalPriceItems += total;
  }
  document.getElementById("totalPriceItems").innerHTML = totalPriceItems;
}

function createQuantityInput(){
  return '<input type="number" class="qty" value="0">';
}

function createDeleteButton(){
  return '<div class="btn-delete"  onclick="deleteItem()">Borrar</div>';
}

function createQuantityNode(){
  return '<div class="qtyInput"><label for="qty">QTY</label>'+ createQuantityInput() +'</div>';
}

function createItemNode(dataType, itemData){}

function createTotalPriceItem () {
  return '<div class="total">$<span class="priceTotal">0</span></div>';
}

function createNewItemRow(itemName, itemUnitPrice){
  var newItemRow = '<div class="row"><div class="product"><span>'+itemName+'</span></div><div class="price"><span class="unitPrice">'+"$ "+itemUnitPrice+'</span></div>'+createQuantityNode()+createTotalPriceItem()+createDeleteButton()+'</div>';
  var section = document.getElementById('parent');
  section.innerHTML += newItemRow;
}

function createNewItem(){
  var itemName = document.getElementById('itemName').value;
  var itemUnitPrice = document.getElementById('itemUnitPrice').value;
  createNewItemRow(itemName, itemUnitPrice);
}


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
