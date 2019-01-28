var grandTotal = 0;

function getTotalPrice() {
  let products = document.getElementsByClassName("product");
  let prices = document.getElementsByClassName("price");
  let qties = document.getElementsByClassName('qty');
  let tprices = document.getElementsByClassName('totalPrice');

  for(let i=0; i<products.length; i++){
    window.product = products[i];
    let qty = qties[i].value;
    let price = prices[i].innerText;
    let tprice = tprices[i];
    let totalPrice = qty*price;
    grandTotal += totalPrice;
    product.getElementsByClassName("totalPrice")[0].innerText = totalPrice;
  }
  document.getElementById("grandTotal").innerText = "Total Price: $" + grandTotal;
  grandTotal = 0;
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

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

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
