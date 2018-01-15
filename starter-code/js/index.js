function deleteItem(e){

e.target.parentElement.parentElement.remove();

}

function getPriceByProduct(){
  var totalisimo = 0;
  for (var i = 0; i< document.querySelectorAll(".product").length; i++){
    var price = document.querySelectorAll(".cost")[i].innerHTML;
    var multiplier = document.querySelectorAll(".input")[i].value;
    var total = price * multiplier;
    document.querySelectorAll(".price")[i].innerHTML = total;
    
    totalisimo += total;
  
  
  }
  getTotalPrice(totalisimo)
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(totalisimo) {

  document.querySelectorAll(".result")[0].innerHTML = totalisimo + '$';



  // var price = document.getElementById("cost").innerHTML;
  // var multiplier = document.getElementById("input").value;
  // var total = price * multiplier;
  // document.getElementById("price").innerHTML = total + '$';

  // var price2 = document.getElementById("cost2").innerHTML;
  // var multiplier2 = document.getElementById("input2").value;
  // var total2 = price2 * multiplier2;
  // document.getElementById("price2").innerHTML = total2 + '$';

  // var totalisim = total + total2;
  // document.getElementById("result").innerHTML = totalisim + '$';
  // 
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

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
