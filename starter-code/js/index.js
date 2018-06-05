window.onload = function(){

var allDeleteButton = document.querySelectorAll("btn-delete");
function deleteItem(e){


}

var calculatePrice = document.querySelector(".btn-success");

var price = document.querySelector(".price").innerHTML;
var allPrice = document.querySelectorAll(".price");

var quantity = document.querySelector(".quantity");
var allQuantity = document.querySelectorAll(".quantity");

var totalSpan = document.querySelector(".total");
var allTotalSpan = document.querySelectorAll(".total");

var spanContent = document.querySelector(".total-span");
var allSpanContent = document.querySelectorAll(".total-span");

var theParent = document.getElementsByClassName(".container");

var oneWrapper = this.document.querySelector('.wrapper');
var allWrappers = document.querySelectorAll(".wrapper");

// theParent.addEventListener("click", getPriceByProduct, false);

function getPriceByProduct(itemNode){
  if (quantity.value < "0"){
    return;
  }
  spanContent.innerHTML = (parseFloat(price) * parseFloat(quantity.value)).toFixed(2) + " €";
  totalSpan.appendChild(spanContent);
}

function updatePriceByProduct(productPrice, index){
  for(var i=0; i < allWrappers.length; i++){
    if (allQuantity[i].value < "0"){
      return;
    }
    allSpanContent[i].innerHTML = (parseFloat(allPrice[i].innerHTML) * parseFloat(allQuantity[i].value)).toFixed(2) + " €";
    allTotalSpan[i].appendChild(allSpanContent[i]);
  }
}

calculatePrice.onclick = getTotalPrice;

function getTotalPrice() {
  var sum = 0;
  for(var i=0; i < allWrappers.length; i++){
    if (allQuantity[i].value < "0"){
      return;
    }
    allSpanContent[i].innerHTML = (parseFloat(allPrice[i].innerHTML) * parseFloat(allQuantity[i].value)).toFixed(2) + " €";
    allTotalSpan[i].appendChild(allSpanContent[i]);

    var totalBasket = document.querySelector("h2");
    var totalPrice = document.querySelector(".total-price");
    var inter = allSpanContent[i].innerHTML;
    var inter = parseFloat(inter);
    sum += inter;
    totalPrice.innerHTML = sum.toFixed(2) + " €";
    totalBasket.appendChild(totalPrice);
  }
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

};

