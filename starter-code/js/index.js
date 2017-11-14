function deleteItem(e){
var itemToDelete = e.currentTarget.parentNode;
// var itemToDeletePrice = Number(itemToDelete.getElementById("idTotalPrice").innerHTML.replace(/[^a-zA-Z 0-9.]+/g,' '));
itemToDelete.parentNode.removeChild(itemToDelete);
// var showPriceOnHtml = document.getElementById("total-products-price").innerHTML = "$" + (allProductPricesToShow - itemToDeletePrice);
}

function getPriceByProduct(itemNode){
  var productPrice = "";
  var productQuantity = "";
  var totalProductPrice = "";
  var i=[];
  for ( i = 0; i < itemNode.length; i++){
    productPrice = document.getElementsByClassName("productPrice")[i].innerHTML;
    productQuantity = document.getElementsByClassName("quantity")[i].value;
    totalProductPrice = document.getElementsByClassName("totalPrice")[i].innerHTML = "$" + (productPrice * productQuantity);
  }
  return totalProductPrice;

}

// function updatePriceByProduct(productPrice, index){
//
// }
var allProductPricesSum = Number();

function getTotalPrice() {
  var item = document.getElementsByClassName("item");
  var itemToGetPrice = getPriceByProduct(item);

  for(var a = 0; a < document.getElementsByClassName("totalPrice").length; a++){
    var allProductPrices = Number(document.getElementsByClassName("totalPrice")[a].innerHTML.replace(/[^a-zA-Z 0-9.]+/g,' '));
      allProductPricesSum = allProductPrices + allProductPricesSum;
}
var showPriceOnHtml = document.getElementById("total-products-price").innerHTML = "$" + allProductPricesSum;
}

// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//   deleteButtons.onclick = deleteItem;
// }

function createQuantityNode(){
getTotalPrice();
}

function createItemNode(dataType, itemData){
  var itemToClone = dataType.cloneNode(true);
  var cloneToHtml = itemData.appendChild(itemToClone);
//   var list = cloneToHtml.insertBefore(newItem, list.childNodes[0]);
return itemToClone;
}

function createNewItemRow(itemName, itemUnitPrice){
var item = document.getElementsByClassName("item")[0];
var itemFather = document.getElementById("all-items");
var clon = createItemNode(item, itemFather);

var newProductName = clon.getElementsByClassName("productName").innerHTML = itemName;
var newProductPrice = clon.getElementsByClassName("productPrice").innerHTML = itemUnitPrice;

return newProductName, newProductPrice;
}

function createNewItem(){
  var newProductName = document.getElementById("idAddProductName").value;
  var newPriceName = document.getElementById("idAddProductPrice").value;
    createNewItemRow(newProductName, newPriceName);
    createQuantityNode();
    // createDeleteButton();
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  deleteButtons.onclick = deleteItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
