function deleteItem(e){
   console.log(e);
   del = document.getElementsByClassName('content2');
   divs = document.getElementsByTagName('div');
   del.removeChild(divs);

}

function getPriceByProduct(itemNode){


}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  value = document.getElementById("value").value;
  price = document.getElementById("price1").innerText;
  document.getElementById("price2").innerHTML = price * value;
  console.log();

}

function createQuantityInput(){
  // var input = document.getElementsByClassName('quantity');
  // input.innerHTML = "hello";
  // // document.getElementById('serverTime').innerHTML='[text here]';
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
  // createItemButton.onclick = createNewItem;



  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
