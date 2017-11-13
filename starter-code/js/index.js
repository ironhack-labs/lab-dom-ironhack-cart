var productName = document.getElementsByClassName("item");

//productName[0].addEventListener("click", function(){
  //productName[0].innerHTML = "FUNCIONO, COÑO!";
//});

//productName.addEventListener("click", );


function deleteItem(e){

}

function getPriceByProduct(itemNode){

return parseInt(itemNode.innerHTML.replace("$",""));

}


function updatePriceByProduct(productPrice, index){

  var amountOfProduct = document.getElementsByClassName("quantity");
  var totalPricePerProduct = document.getElementsByClassName("total-price-per-product");


  if (amountOfProduct[index].value > 0) {

    totalPricePerProduct[index].innerHTML = "$ " + (amountOfProduct[index].value * productPrice).toFixed(2);

  }

  return parseInt(totalPricePerProduct[index].innerHTML.replace("$",""));

}




function getTotalPrice() {
  
  var itemNode = document.getElementsByClassName("price-per-unit");
  var totalPrice = 0;
  for(var i = 0; i < itemNode.length; i++){
    totalPrice += updatePriceByProduct(getPriceByProduct(itemNode[i]), i);
  }
  var totalMoneyNode = document.getElementById("total-price");
  
  totalMoneyNode.innerHTML = totalPrice.toFixed(2);

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

function createNewItem(newItem){
    list = document.getElementById("product-list");
    list.appendChild(newItem);
  }

window.onload = function(){
var calculatePriceButton = document.getElementById("calc-prices-button");
var createItemButton = document.getElementById("new-item-create");
var deleteButtons = document.getElementsByClassName("btn-delete");

calculatePriceButton.onclick = getTotalPrice;
createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
