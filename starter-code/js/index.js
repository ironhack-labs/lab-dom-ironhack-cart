function deleteItem(e){

}
function productPriceRetrieve(){
  var price = document.getElementById("productPrice").innerHTML;
  productPrice= Number(price);
  console.log(price);
  console.log(productPrice);
  return productPrice;
}

function getPriceByProduct(itemNode){

}

// function updatePriceByProduct(productPrice, index){
//
// }
// function updatePriceByProduct(){
//
// }

function getTotalPrice() {
  var totalPriceperProduct=createQuantityInput()*productPriceRetrieve();
  console.log(totalPriceperProduct);
  document.getElementById("qtyxPrice").innerHTML=totalPriceperProduct;

}

function createQuantityInput(){
  var quantity = document.getElementById("quantityid");
  var valueQty=quantity.value;
  console.log(quantity);
  console.log(valueQty);
  return valueQty;

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

// window.onload = function(){
//   // var calculatePriceButton = document.getElementById('calc-prices-button');
//   // var createItemButton = document.getElementById('new-item-create');
//   // var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
