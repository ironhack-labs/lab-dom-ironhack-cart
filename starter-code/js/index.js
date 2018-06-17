function deleteItem(e){
  var selectDelete=e.currentTarget;
  var rowDelete=selectDelete.parentNode.parentNode;
  var parentRowToDelete=rowDelete.parentNode;
  parentRowToDelete.removeChild(rowDelete);

}

/*function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}*/

function getTotalPrice() {
  var itemElement = document.getElementsByClassName("item");
  var priceElements = [];
  var price = 0;
  var subTotal = 0;
  var total = 0;
  var qty = 0;
  for (var i=0; i < itemElement.length; i++){
      elementPrice=document.getElementById("itemPrice"+i);
      price = parseFloat(elementPrice.innerHTML.split("$")[1]);
      elementQty=document.getElementById("itemQty"+i);
      qty = parseInt(elementQty.value);
      subTotal=qty*price;
      elementSubTotal = document.getElementById("itemTotal"+i);
      elementSubTotal.innerHTML = "$"+ subTotal.toString();
      total=total+subTotal;
 /*     priceElement.push({"price": price, "qty": qty, "total": total}); */
    }
    elementTotal=document.getElementById("totalOrder");
    elementTotal.innerHTML = "$"+total.toString();
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
  console.log("Entre a createNewItem");

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
