function deleteItem(e){

    e.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName("product");
    console.log(e.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName("product"));
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  var quantityDiv, totalQuantity, singleProductPrice, price, totalPrice, finalPrice;
  var counter = 0;
  finalPrice = document.getElementById("total");
  for(var i = 0; i<products.length; i++){
    quantityDiv = products[i].getElementsByClassName("quantity")[0];
    totalQuantity = parseInt(quantityDiv.getElementsByTagName("input")[0].value);

    price = products[i].getElementsByClassName("inline")[1];
    singleProductPrice = parseInt(price.getElementsByTagName("span")[0].getAttribute("data-price"));

    totalPrice = products[i].getElementsByClassName("inline")[3].getElementsByTagName("span")[0];
    counter += singleProductPrice*totalQuantity;
    totalPrice.innerHTML = "$" +singleProductPrice*totalQuantity +".00";
    console.log(counter);
  }
  finalPrice.innerHTML = "$" + counter;
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
var calculatePriceButton, deleteButtons;

window.onload = function(){

  deleteButtons = document.getElementsByClassName('btn-delete');
  calculatePriceButton  = document.getElementById('calculate');
  var createItemButton = document.getElementById('new-item-create');


  calculatePriceButton.onclick = getTotalPrice;

  //createItemButton.onclick = createNewItem;

   for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }

};
