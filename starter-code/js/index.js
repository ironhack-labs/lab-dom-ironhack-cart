function deleteItem(e){
  this.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let unitPrice = document.getElementsByClassName('value');
  let unitQuantity = document.getElementsByClassName('unit');
  let total = 0;
  for (let i = 0; i < unitPrice.length; i += 1) {
    let totalPrice = unitPrice[i].textContent * unitQuantity[i].value;
    document.getElementsByClassName('total')[i].innerHTML = totalPrice;
  }
  for  (let i = 0; i < unitPrice.length; i += 1 ) {
    total += parseInt(document.getElementsByClassName('total')[i].innerHTML);
  }
  document.getElementById('totalPrice').innerHTML = total;
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

  let itens = document.getElementById('itens');
  let newItemDiv = document.createElement('div');
  newItemDiv.className = "flex";
  let newItem =
'<div class="item-name">'+itemName+'</div><div>$<span class="value">'+itemUnitPrice+'</span></div><div>QTY <input class="unit" type="number"></div><div>$<span class="total">0.00</span></div><div><a class = "btn btn-delete" href="#">delete</a></div>';
  newItemDiv.innerHTML = newItem;
  itens.append(newItemDiv);

  deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

function createNewItem(){
  let itemName = document.getElementById('new-name').value;
  let itemValue = document.getElementById('new-value').value;
  createNewItemRow(itemName, itemValue);  
}

let deleteButtons;
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  
  var createItemButton = document.getElementById('new-item-create');
  deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
  createItemButton.onclick = createNewItem;
};
