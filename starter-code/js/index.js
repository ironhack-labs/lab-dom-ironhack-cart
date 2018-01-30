
function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var cost = itemNode.querySelector(".cost > span").innerHTML;
  var quantity = itemNode.querySelector("#quantity").value;
  var product = parseInt(cost) * parseInt(quantity);

  return product;
}

console.log(getPriceByProduct());

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var cost = document.getElementsByClassName("cost");
  var quantity = document.getElementsByClassName("quantity");
  var product = document.getElementsByClassName("product");
  var totalPrice = document.getElementsByClassName("totalPrice");
  totalPrice = quantity * cost;

    
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

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
