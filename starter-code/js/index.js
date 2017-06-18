function deleteItem(e){
  var products = e.target.parentElement;
  products.parentElement.removeChild(products);
}

/*function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}*/

function getTotalPrice() {
  var quantities = document.getElementsByClassName("quantities");
  var prices = document.getElementsByClassName("costs");
  var totalProductPrice = document.getElementsByClassName("price");
  var totalPrice = 0;
  for (var i=0; i<quantities.length; i++) {
    var eachProduct = quantities[i].value * prices[i].innerHTML;
    totalPrice += eachProduct;
    totalProductPrice[i].innerHTML = eachProduct;
  }
  document.getElementById("showTotal").innerHTML = totalPrice;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createNewItem(){

}

function createNewItem(){
  var itemName = document.getElementById("input-name").value;
  var itemPrice = document.getElementById("input-price").value;
  var parent = document.getElementById('all-items');
  var firstChild = document.getElementById('create-item');
  var createDiv = document.createElement('div');
  var text = document.createTextNode('This is a test');

  createDiv.appendChild(text);
  parent.insertBefore(createDiv, firstChild);
}

window.onload = function(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var calculatePriceButton = document.getElementById('btn-success');
  var createItemButton = document.getElementById("btn-create");
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
