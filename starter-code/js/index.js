function callingDelete() {
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  getTotalPrice()
}

function deleteItem(e){
  var currentButton = e.currentTarget;
  var div = currentButton.parentElement.parentElement.parentElement;
  div.removeChild(currentButton.parentElement.parentElement);
  callingDelete();
}


function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){
  var totalPrice = document.getElementsByClassName("totalPrice");
  var prices = document.getElementsByClassName("price");
  var quantity = document.getElementsByName("quantity");
  var sum = 0;
  var arrQty = [].slice.call(quantity)
  var arrPrices = [].slice.call(prices)
  arrPrices.forEach(function(element, i) {
    totalPrice[i].innerHTML = "$" + arrQty[i].value * parseInt(element.innerHTML.substr(1));
  });
}

function getTotalPrice() {
  updatePriceByProduct();
  var totalPrice = document.getElementsByClassName("totalPrice");
  var prices = document.getElementsByClassName("price");
  var totalPrices = document.getElementById("totalPrices")
  var sum = 0;
  var arr = [].slice.call(totalPrice)

  arr.forEach(function(element) {
    sum += parseInt(element.innerHTML.substr(1));
    totalPrices.innerHTML = "$" + sum;
  });

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
 var inputName = document.getElementById("productName");
 var inputPrice = document.getElementById("productPrice");
 var button = document.getElementById("new-item-create");
 var newName = inputName.value;
 var newPrice = inputPrice.value;
 var itemContainer = document.getElementById("clone");
 var clone = itemContainer.cloneNode(true);
 
 clone.querySelector(".name").innerHTML = newName;
 clone.querySelector(".price").innerHTML = "$" + newPrice;
 clone.querySelector(".quantity").value = "0";
 clone.querySelector(".totalPrice").innerHTML = "$0";
 clone.className = "itemContainer";

 var body = document.getElementsByClassName("bodyWrapper")[0];
 body.insertBefore(clone, body.lastChild);
 callingDelete();
}




window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  callingDelete();
};

