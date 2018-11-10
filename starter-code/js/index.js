function deleteItem(e){

}

function getPriceByProduct(){
  var ItemPrice = document.getElementById("itemNode");
   return ItemPrice.innerText;
}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
  var price = getPriceByProduct().replace('$','');
  var quantity = document.getElementById("quantity").value;  
  var totalP = "$" + ((price * quantity).toFixed(2));
  var Total = document.getElementById("Total");
  zero = 0;
  isNaN(quantity) ? Total.innerText = ('$' + zero.toFixed(2)) : Total.innerText = totalP;
}


function getPriceByProduct1(){
  var ItemPrice1 = document.getElementById("itemNode1");
   return ItemPrice1.innerText;
}


function getTotalPrice1() {
  var price1 = getPriceByProduct1().replace('$','');
  var quantity1 = document.getElementById("quantity1").value;  
  var totalP1 = "$" + ((price1 * quantity1).toFixed(2));
  var Total1 = document.getElementById("Total1");
  zero = 0;
  isNaN(quantity1) ? Total1.innerText = ('$' + zero.toFixed(2)) : Total1.innerText = totalP1;
}

function getTotalPriceT(){
  getTotalPrice();
  getTotalPrice1();
  Total();
}

function Total(){
  var totalp1 = document.getElementById("Total").innerText;
  var totalp2 = document.getElementById("Total1").innerText;
  var sum = parseInt((totalp1.replace('$',''))) + parseInt((totalp2.replace('$','')));
  var sumTotal = document.getElementById("GrandToltal");
  zero = 0;
  isNaN(sum) ? sumTotal.innerText = ('$' + zero.toFixed(2)) : sumTotal.innerText = '$'+(sum.toFixed(2));
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
  getPriceByProduct();
  getTotalPriceT();
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPriceT;
  //addbutton.onclick = createQuantityInput;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  
};
