function deleteItem(e){
  
}

function getPriceByProduct(itemNode){ 
  var prices = itemNode[0].children;
  for(var i = 0; i<prices.length;i++){
    console.log(prices[i].innerHTML)
  }
}


function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var productPrices = document.getElementsByClassName("section-two");
  var quantity = document.getElementsByTagName("input");
  var totalPrices = document.getElementsByClassName("section-four");
  var final = document.getElementById("section-final");
  var prices = productPrices[0].children;
  var subtotals = totalPrices[0].children;
  var acumulador = 0;
  for(var i = 0; i<prices.length;i++){
    var num = prices[i].innerHTML.substring(1,12);
    console.log(num);
    subtotals[i].innerHTML = ("$"+parseFloat(quantity[i].value) * parseFloat(num));
    acumulador = acumulador+ parseFloat(subtotals[i].innerHTML.substring(1,12));
  }
  final.innerHTML=("$"+acumulador);
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
  var valores = document.getElementById("nuevos");
  var texto = valores[0].value;
  var precio = valores[1].value;

}

window.onload = function(){
  var calculatePriceButton = document.getElementsByClassName('btn-success');
  var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton[0].onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  /*for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }*/
}

