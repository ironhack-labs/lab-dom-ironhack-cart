function deleteItem(e){
var item = e.currentTarget.parentNode.parentNode;
var mainContainer = item.parentNode;
mainContainer.removeChild(item);
}

function getPriceByProduct(index){
  
  var amountForProduct = parseInt(document.getElementsByClassName("amountForProduct")[index].innerHTML ,10);
  var quan = parseInt(document.getElementsByClassName("quantity")[index].value,10);
  var subtotal = amountForProduct * quan;
  return subtotal;
}

function addUpdatePricePerProductListener(num){
  var priceCalculateForOne = document.querySelector("button.calc-prices-button");
    priceCalculateForOne.addEventListener("click", function change(){
    document.querySelectorAll("span.totalFortheOneTypeOfProducts")[num].innerHTML = (`$${getPriceByProduct(num)}.00`);
  });
}



function getTotalPrice() {

  
  // var a = document.querySelectorAll("span.totalFortheOneTypeOfProducts")[0].innerHTML;
  // var b = document.querySelectorAll("span.totalFortheOneTypeOfProducts")[1].innerHTML;
  // var b = document.querySelectorAll("span.totalFortheOneTypeOfProducts")[2].innerHTML;

  var total = 0;
  var subtotalItems = document.querySelectorAll("span.totalFortheOneTypeOfProducts");
  for(var i = 0; i < subtotalItems.length; i++) {
    total += getPriceByProduct(i);
  }

  return document.getElementsByClassName("total")[0].innerHTML = (`${total}.00`);
  
}



/*
var amountForProduct = parseInt(document.getElementsByClassName("amountForProduct")[1].innerHTML ,10);
var quan = parseInt(document.getElementsByClassName("quantity")[0].value,10);
var subtotal = amountForProduct * quan;

  var priceCalculateForOne = document.querySelector("button.calc-prices-button");
  priceCalculateForOne.addEventListener("click", function change(event){
    document.querySelector("span.totalFortheOneTypeOfProducts").innerHTML = (`$${subtotal}.00`);
  });
function amountQuantityProduct(amountForProduct,quan){
}
*/  






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
/*
function createNewItem(){
  var name = document.getElementById("nameOfProduct").value;
  var price = parseInt(document.getElementById("priceOfProduct").value, 10);
  createNewItemRow(name,price);

}
*/

window.onload = function(){
  addUpdatePricePerProductListener(0);
  addUpdatePricePerProductListener(1);


  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
};
