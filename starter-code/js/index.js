/*function deleteItem(e){
  e.getElementByClassName("quantity").value --
}*/

function getPriceByProduct(itemNode){
  var x = document.getElementById("price");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("total").innerHTML = text;
}

  // var price = document.getElementsByClassName("unit-price");
  //  price = parseInt(price[itemNode].innerText);
  //  return price;
  

function updatePriceByProduct(productPrice, index){
 
  var productPrice = document.querySelectorAll("price");
      for (i=0; i < productPrice.length; i++) {
      var quantityUnity = Number(document.querySelectorAll("input-qty")[i].value);
      var total = quantityUnity * getPriceByProduct();
      document.querySelectorAll("total-price")[i].innerText = total;
    }
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

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
