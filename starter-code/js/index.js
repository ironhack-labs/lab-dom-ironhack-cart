function deleteItem(e){

}

function getPriceByProduct(itemPrice, itemQuantity){

  var price = parseFloat(itemPrice);
  var quantity = parseFloat(itemQuantity);
  return price * quantity;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product-wrapper");

  for(var i=0; i<products.length; i++){
    itemPrice = products[i].childNodes[3].getAttribute("value");
    itemQuantity = products[i].getElementsByClassName("quantity-text")[0].value;
  
    if(itemQuantity === ""){
      alert("Introduce una cantidad");
    } else {
      var total = getPriceByProduct(itemPrice, itemQuantity);
      products[i].childNodes[7].setAttribute("value", 2);
      products[i].childNodes[7].innerHTML = "$" + total;
    }
  }
  
  // total-price = products[0].childNodes[7].getAttribute("value")
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


