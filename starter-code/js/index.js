



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


function getPrice(){
  var price = document.getElementsByClassName('price');

  var quantity= document.getElementsByTagName('input');

  //var totalPrice = price * quantity;

  for(var i = 0; i < price.length; i++){
      var totalPrice = price[i].innerHTML * quantity[i].value;
      document.getElementsByClassName('total')[i].innerHTML = totalPrice;
  }
}

var getTotal = function(){
  var prices = document.getElementsByClassName('total');
  var finalPrice = 0;
  for(var i=0; i < prices.length; i++){
    finalPrice += parseInt(prices[i].innerHTML);

}
return finalPrice;
}

  function getTotalPrice(){
    getPrice();

    document.getElementById('showTotal').innerHTML = ("<h2>Total Price: " + getTotal() + "</h2>");

  }

  function createNewItem(){



  }

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
function deleteItem(e){
  var clear = e.currentTarget.parentNode.parentNode;
  clear.innerHTML="";

}

};
