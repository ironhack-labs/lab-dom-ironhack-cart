function renumeraItems(){
  var lineItems = document.getElementsByClassName("item");
  var rowCount = lineItems.length;
  for (var i=0; i < lineItems.length; i++){
    lineItems[i].id="item"+i;
    lineItems[i].firstChild.nextSibling.firstChild.id="itemName"+i;
    sibling=lineItems[i].firstChild.nextSibling;
    console.log("iteracion: " + i + " "+sibling);
    console.log(sibling);
    sibling=sibling.nextSibling;
    sibling=sibling.nextSibling;
    console.log("iteracion: " + i + " "+sibling);
    console.log(sibling);
    sibling.firstChild.id="itemPrice"+i;
    sibling=sibling.nextSibling;
    sibling=sibling.nextSibling;
    console.log("iteracion: " + i + " "+sibling);
    console.log(sibling);
    sibling.firstChild.nextSibling.id="itemQty"+i;
    sibling=sibling.nextSibling;
    sibling=sibling.nextSibling;
    console.log("iteracion: " + i + " "+sibling);
    console.log(sibling);
    sibling.firstChild.id="itemTotal"+i;
    sibling=sibling.nextSibling;
    sibling=sibling.nextSibling;
    console.log("iteracion: " + i + " "+sibling);
    console.log(sibling);
    sibling.firstChild.id="delete"+i;

  }
}

function deleteItem(e){
  var selectDelete=e.currentTarget;
  var rowDelete=selectDelete.parentNode.parentNode;
  var parentRowToDelete=rowDelete.parentNode;
  parentRowToDelete.removeChild(rowDelete);
  renumeraItems();

}

/*function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}*/

function getTotalPrice() {
  var itemElement = document.getElementsByClassName("item");
  var price = 0;
  var subTotal = 0;
  var total = 0;
  var qty = 0;
  for (var i=0; i < itemElement.length; i++){
      elementPrice=document.getElementById("itemPrice"+i);
      price = parseFloat(elementPrice.innerHTML.split("$")[1]);
      elementQty=document.getElementById("itemQty"+i);
      qty = parseFloat(elementQty.value);
      subTotal=parseFloat(qty*price);
      elementSubTotal = document.getElementById("itemTotal"+i);
      elementSubTotal.innerHTML = "$"+ subTotal.toString();
      total=parseFloat(total+subTotal);
    }
    elementTotal=document.getElementById("totalOrder");
    elementTotal.innerHTML = "$"+parseFloat(total).toString();
}

/*function createQuantityInput(){
        <div class="delete"><button class="btn btn-delete" id="delete1">Delete</button></div>
} */

function createDeleteButton(index){
  var deleteParent=document.createElement('div');
  deleteParent.setAttribute('class', 'delete');
  var deleteButton=document.createElement('button');
  deleteButton.setAttribute('class','btn btn-delete');
  deleteButton.id="delete"+index;
  deleteButton.innerHTML="Delete";
  deleteParent.appendChild(deleteButton);
  deleteButton.onclick = deleteItem;
  return deleteParent;
}

function createQuantityNode(index){
  var quantityParent=document.createElement('div');
  quantityParent.setAttribute('class', 'itemQty');
  var quantityLabel=document.createElement('label');
  quantityLabel.innerHTML="QTY";
  var inputQty=document.createElement('input');
  inputQty.setAttribute('class', 'input quantity');
  inputQty.setAttribute('type', 'number');
  inputQty.id="itemQty"+index;
  quantityParent.appendChild(quantityLabel);
  quantityParent.appendChild(inputQty);
  return quantityParent;
}

/*function createItemNode(dataType, itemData){

}*/

function createNewItemRow(itemName, itemUnitPrice, index){
  // Crea contenedor div para los items
  var itemRow=document.createElement('div');
  itemRow.setAttribute('class', 'item');
  itemRow.id="item"+index;

  // Crea contenedor div para el nombre de los productos
  var itemNameDiv=document.createElement('div');
  itemNameDiv.setAttribute('class', 'itemName');
  var itemNameSpan=document.createElement('span');
  itemNameSpan.id="itemName"+index;
  itemNameSpan.innerHTML=itemName;
  itemNameDiv.appendChild(itemNameSpan);

  // Crea contenedor div para el precio
  var itemPriceDiv=document.createElement('div');
  itemPriceDiv.setAttribute('class', 'itemPrice');
  var itemPriceSpan=document.createElement('span');
  itemPriceSpan.id="itemPrice"+index;
  itemPriceSpan.innerHTML="$"+itemUnitPrice;
  itemPriceDiv.appendChild(itemPriceSpan);

  // Crea contenedor div para cantidad
  itemQtyDiv = createQuantityNode(index);

  // Crea contenedor div para total 
  var itemTotalDiv=document.createElement('div');
  itemTotalDiv.setAttribute('class', 'itemTotal');
  var itemTotalSpan=document.createElement('span');
  itemTotalSpan.id="itemTotal"+index;
  itemTotalSpan.innerHTML="$0.00";
  itemTotalDiv.appendChild(itemTotalSpan);

  // Crea boton de Delete
  itemDeleteDiv = createDeleteButton(index);



  // Adhiere los hijos al padre div que contendrá la nueva fila
  itemRow.appendChild(itemNameDiv);
  itemRow.appendChild(itemPriceDiv);
  itemRow.appendChild(itemQtyDiv);
  itemRow.appendChild(itemTotalDiv);
  itemRow.appendChild(itemDeleteDiv);

  return itemRow;

}

function createNewItem(){
  var inputName = document.getElementById("addItemName");
  var inputPrice = document.getElementById("addItemPrice");
  var itemElement = document.getElementsByClassName("item");
  var lastItem = itemElement.length;
  var parentItemElement = itemElement[0].parentNode;
  var newRow = createNewItemRow(inputName.value, inputPrice.value, lastItem);
  parentItemElement.appendChild(newRow);


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
