function deleteItem(e){
  var itemtoDelete = e.currentTarget.parentNode.parentNode;
  itemtoDelete.removeChild(itemtoDelete);

}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){


}

function getTotalPrice() {
  var unitPrice = document.getElementsByClassName("unit-price");
  var qtyItems = document.getElementsByClassName("input");
  var total = document.getElementsByClassName("total-price");
  var totalPriceItems = document.getElementsByClassName("total-price-items");
  var totalPrice = 0;
  var totalCost = 0;

  for(var i = 0; i < total.length; i++){
    totalCost = unitPrice[i].innerHTML*qtyItems[i].value;
    total[i].innerHTML = parseInt(totalCost);
    totalPrice = totalPrice + totalCost;

    var totalCost = 0;

  }
  totalPriceItems[0].innerHTML = totalPrice;
}

function createQuantityInput(){

}

function createDeleteButton(){
  var deleteButton = document.createElement('button');
  deleteButton.setAttribute('class','btn btn-delete');
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  var div = document.createElement('div');
  div.className = 'item';
  var box = document.querySelector('.item');
  box.parentNode.insertBefore(div,box.nextSibling);

  div.innerHTML = '<span class="item-name"></span></div><div><span class="unit-price"></span></div><div><label>QTY<input type="number" value="0" class="input"></label></div><div>$<span class="total-price">0.00</span></div><div><button class="btn btn-delete">Delete</button>';

  var newItemName = itemName;
  var itemUnitPrice = itemUnitPrice;
  document.getElementsByClassName("item-name").innerHTML = newItemName;
  document.getElementsByClassName("unit-price").innerHTML = itemUnitPrice;

  }

function createNewItem(){

  var name = document.getElementsByClassName('item-name').value;
  var price = document.getElementsByClassName('unit-price').value;
  
  createNewItemRow(name, price);
}

window.onload = function(){
  var calculatePriceButton = document.querySelector('.btn-success');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.querySelector('.btn-delete');

  calculatePriceButton.addEventListener('click', getTotalPrice);
  createItemButton.addEventListener('click', createNewItem);

   for(var i = 0; i<deleteButtons.length ; i++){
     deleteButtons[i].addEventListener('click', deleteItem);
   }
};
