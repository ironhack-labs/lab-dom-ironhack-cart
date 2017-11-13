function deleteItem(e){
  product = e.target.parentElement.parentElement;
  product.parentNode.removeChild(product);
  console.log(document);
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  products = document.getElementsByClassName("product");
  console.log(products.length);
  var finalPrice = 0;
  for(i = 0; i < products.length; i++) {
    var unitPrice = parseFloat(document.getElementsByClassName("product-unit-price")[i].innerText);
    var qty = parseFloat(document.getElementsByClassName("product-qty")[i].value);
    var totalItemPrice = unitPrice * qty;
    finalPrice += totalItemPrice;
    document.getElementsByClassName("total-price")[i].innerHTML = totalItemPrice;
  }
  document.getElementById("final-price").innerHTML = "<h2>Total Price: <span>$" + finalPrice + "</span></h2>"
  
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
  var calculatePriceButton = document.getElementById('calc-prices');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
