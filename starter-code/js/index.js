function deleteItem(e){
  var deleteRow = (e.currentTarget.parentNode.parentNode.parentNode);
  console.log(deleteRow);
  deleteRow.innerHTML = "";
}

var createButton = document.getElementById("new-item-create");


// I tried

// function createNewItemRow(){
//   createButton.onclick(e) = function(){
//   var itemName = getElementById("text-input").value;
//   var itemUnitPrice = getElementById("price-input").value;
//   var newItemRow = document.createElement("div");
//   newItemRow.setAttribute("class", "row");
//   newItemRow.innerHTML = '<div class="col-xs-5"><span class="item-name">' + itemName + '</span></div><div class="col-xs-5">' +
//   '<span class="price">' + itemUnitPrice + '</span>' + '</div><div class="col-xs-5"><span>QTY <input class="quantity" type="text" name="qty" value="0"></span>' +
//   '</div><div class="col-xs-5"><span class="total-price"> 0 </span>' +
//   '</div><div class="col-xs-5"><span><button class="btn btn-delete" type="button" name="Delete" onclick="deleteItem(e)">Delete</button></span></div>';
//   document.getElementsByClassName("btn-create")[0].insertBefore(newItemRow, getCreateDiv.parentNode);
// };
// }

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  for(i = 0; i < document.getElementsByClassName("price").length; i++){
  var price = Number(document.getElementsByClassName("price")[i].innerHTML.replace(/[^0-9\.]+/g,""));
  var quantity = document.getElementsByClassName("quantity")[i].value;
  document.getElementsByClassName("total-price")[i].innerHTML = price * quantity;
}
grandTotal();
}

function grandTotal(){
  var grandTotal = 0;
  for(n = 0; n <document.getElementsByClassName("price").length; n++){
  grandTotal += Number(document.getElementsByClassName("total-price")[n].innerHTML);
  document.getElementById("total-price").innerHTML = grandTotal;
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


function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice();
  // createItemButton.onclick = createNewItemRow();

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
