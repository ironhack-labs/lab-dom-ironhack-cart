function deleteItem(e){

}

function getPriceByProduct(){
  var priceUnit = document.getElementById('price-unit');
  updatePriceByProduct(priceUnit);
}

//function updatePriceByProduct(productPrice, index){
function updatePriceByProduct(productPrice){
  var totalPrice = document.getElementById('total-price');
  var quantity = document.getElementById('quantityy');
  totalPrice.innerHTML = productPrice.innerHTML * quantity.value;
}



function getTotalPrice() {
  var listOfElements = [];
  listOfElements.push(document.getElementsByClassName('price-unit'));
  listOfElements.push(document.getElementsByClassName('qty'));
  listOfElements.push(document.getElementsByClassName('total-price'));
  getPriceByProduct(listOfElements);
}

function updatePriceTotal(totalPrice){
  document.getElementById('finalPricee').innerHTML = totalPrice;// = totalPrice;
}

function deleteItem(){
  this.parentNode.parentNode.parentNode.remove();
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

function createNewItem(newItem){
newItem.querySelector('.article-name').innerHTML=document.querySelector(".newItem").value;
divCopied.querySelector(".price-unit").innerHTML=document.querySelector(".priceNewItem").value;
divCopied.querySelector(".btn-dlt").onclick= function(){
  this.parentNode.parentNode.parentNode.remove();
};
divCopied.querySelector(".qty").onchange=function(){
  detectChangeQuantity();
};

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
