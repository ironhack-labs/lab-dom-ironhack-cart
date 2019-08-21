const body = document.body;

let productPrice = Number(document.getElementById('product-price').innerHTML);

let productQuantity = Number(document.getElementById('product-quantity').value);

let totalProduct = Number(document.getElementById('total').innerHTML);

//let buttonCalculate = document.getElementById("calc-button");



//let totalProduct = productPrice * productQuantity;

//totalProduct.setAttribute("value");

//price.setAttribute(name, value);



function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  calculatePriceButton.addEventListener('click', function(event) {
    totalProduct = productPrice * productQuantity;
  });
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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
