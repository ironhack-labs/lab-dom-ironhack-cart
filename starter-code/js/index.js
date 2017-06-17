function deleteItem(e){
  e.currentTarget.parentNode.remove();
  getTotalPrice();
}

function getTotalPrice() {
  var forms = document.getElementsByClassName("form-inline");
  var quantity = 0;
  var price = 0;
  var total = 0;
  var subTotal = 0;
  for (var i=0; i<forms.length; i++) {
     quantity = forms[i].getElementsByClassName("input")[0].value;
     price = forms[i].getElementsByClassName("label-price")[0].innerText;
     price = price.substr(1, price.length);
     subTotal = quantity * parseFloat(price);
     forms[i].getElementsByClassName('label-total-price')[0].innerText = '$' + subTotal;
     total += subTotal;
  }

  document.getElementById('totalPrice').innerText = '$' + total;

}


function createDeleteButton(parent){
  var deleteButton = createItemNode(parent, 'input', 'class', 'btn btn-delete');
  deleteButton.setAttribute('type', 'submit');
  deleteButton.setAttribute('value', 'Delete');
  deleteButton.onclick = deleteItem;

}

function createSubTotalNode(parent) {
  var subTotalNode = createItemNode(parent,'span', 'class', 'label-total-price');
  subTotalNode.innerText = "$0";
}

function createQuantityInput(parent) {
  createItemNode(parent,'input', 'class', 'input');
  
}

function createQuantityLabel(parent) {
  var qtyLabel = createItemNode(parent,'label', 'for', 'QTY');
  qtyLabel.innerText = "QTY";
}

function createQuantityNode(parent){
  var quantityNode = createItemNode(parent,'div', 'class', 'input-price');
  return quantityNode;
}

function createPriceNode(parent) {
  var priceNode = createItemNode(parent,'span', 'class', 'label-price');
  var price = document.getElementById('inputPrice').value;
  priceNode.innerText = '$' + price;
}

function createNameNode(parent){
  var nameNode = createItemNode(parent,'span', 'class', 'label-productname');
  var productName = document.getElementById('productName').value;
  nameNode.innerText = productName;
}

function createItemNode(parent, dataType, itemAttribute, itemData){
  var newElement = document.createElement(dataType);
  newElement.setAttribute(itemAttribute, itemData);
  return parent.appendChild(newElement);
}

function createNewItemRow(){
  var form = document.getElementById('form');
  return createItemNode(form, 'div', 'class', 'form-inline');
}

function createNewItem(){
  var newElement = createNewItemRow();
  createNameNode(newElement);
  createPriceNode(newElement);
  var parentQuantityNode = createQuantityNode(newElement);
  createQuantityLabel(parentQuantityNode);
  createQuantityInput(parentQuantityNode);
  createSubTotalNode(newElement);
  createDeleteButton(newElement);

  //clean values
  document.getElementById('productName').value = '';
  document.getElementById('inputPrice').value = '';
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
