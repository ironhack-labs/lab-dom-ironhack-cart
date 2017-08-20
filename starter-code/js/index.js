
//var calcular = document.getElementById("calculate");

//function calcular(){

//var price = document.getElementsByClassName('price');
  //var quantity = document.getElementsByTagName('input').value;

//for(var i =0; i<price.length;i++){
  //var totalPrice = price[i].innerHTML * quantity[i];
//}return document.getElementsByClassName('total')[0].innerHTML = totalPrice;

//}

//var price = document.getElementById('price').innerHTML;
//var quantity = document.getElementById('number').value;
//console.log(price);
//console.log(quantity);
//var totalPrice = parseInt(price) * quantity;
//return document.getElementsByClassName('total')[0].innerHTML = totalPrice;



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
    console.log(finalPrice);
}
return finalPrice;
}

  function getTotalPrice(){
    getPrice();
    

    document.getElementById('showTotal').innerHTML = ("<h2>Total Price: " + getTotal() + "</h2>");



  }


  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
