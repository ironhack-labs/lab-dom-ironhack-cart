

//document.getElementsByClassName("qnt price").onclick=multiplyQntAndPrice();

var input = document.getElementsByTagName('input').value;

var price = document.getElementsByClassName("price")[0];

var productPrice = document.getElementsByClassName("price-product")[0];

var currentQntCost = document.getElementsByClassName("qnt-cost");

var total;



function inner(){
  currentQntCost[0].innerHTML = String(total);
}




  function multiplyQntAndPrice(quantity, price){

    total = quantity*price;




   inner();
}





//document.getElementsByClassName("btn-success").onclick = multiplyQntAndPrice( input , productPrice  );

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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
