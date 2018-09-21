

function deleteItem(){
  document.querySelector(".products").removeChild(event.target.parentNode.parentNode);

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){


}


function getTotalPrice() {  
  var acumulador = 0;
  for (i=0;i<document.querySelectorAll(".price").length;i++) {
    var price = document.querySelectorAll(".price")[i].innerText;
    var quantity= document.querySelectorAll("input")[i].value;
    var total = price * quantity;
    document.querySelectorAll(".sumPrice")[i].innerText = total;
    acumulador += total;
  }
  document.getElementById("totalsum").innerText = acumulador;
}
// document.getElementById("calc-prices-button").onclick = getTotalPrice


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
  var Standar = document.querySelector(".flex");
  var clone = Standar.cloneNode(true);
  clone.querySelector("span").innerText = document.getElementById("newName").value;
  clone.querySelector(".price").innerText = document.getElementById("newPrice").value;
  document.querySelector(".products").appendChild(clone);
  

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
