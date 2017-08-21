function deleteItem(event){
  var body = event.currentTarget.parentNode.parentNode.parentNode;
  var product = event.currentTarget.parentNode.parentNode;
  body.removeChild(product);
}

function getPriceByProduct(i){
  return parseFloat(document.getElementsByClassName("price")[i].innerHTML);
}

function updatePriceByProduct(){
  for (i = 0; i < document.getElementsByClassName("total").length; i++) {
  document.getElementsByClassName("total")[i].innerHTML = (getPriceByProduct(i) * parseFloat(document.getElementsByTagName("input")[i].value)).toFixed(2);
  }

}

function getTotalPrice() {
  var total = 0;
  for (i = 1; i < document.getElementsByClassName("total").length; i++) {
    total += parseFloat(document.getElementsByClassName("total")[i].innerHTML);
    console.log(total);
  }
  document.getElementById("totalprice").innerHTML = total.toFixed(2);
}


function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}


function createNewItemRow(){
  var newProduct = document.getElementById("hidden-product").cloneNode(true);
  newProduct.removeAttribute("id");
  newProduct.children[0].children[0].children[0].innerHTML = document.getElementById("newItemName").value;
  newProduct.children[1].children[0].children[0].innerHTML = document.getElementById("newItemPrice").value;
  newProduct.children[3].children[0].children[0].innerHTML = document.getElementById("newItemPrice").value;
  document.body.insertBefore(newProduct, document.getElementById("body").children[(document.getElementById("body").children.length) - 3]);
}

function createNewItem(){

}

window.onload = function(){
   getTotalPrice();

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
