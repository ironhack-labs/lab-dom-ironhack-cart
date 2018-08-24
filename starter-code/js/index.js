function deleteItem(e){
  //alert(e.currentTarget.parentNode.nodeName);;
  //var arrayOfProduct = document.getElementsByClassName("wrapper");
  //var outerParent = document.getElementById("outer-box");
  //var thisProduct = e.currentTarget.parentNode
  //var thisProduct = arrayOfProduct[e];
  //outerParent.removeChild(e.currentTarget.parentNode);
  e.onclick = alert("hola");
}

function getPriceByProduct(itemNode){
    var unitaryTag = document.getElementsByClassName("price");
    var unitaryPrice = parseFloat(unitaryTag[itemNode].innerHTML.slice(1));
    var quantityTag = document.getElementsByClassName("input-quantity");
    var quantityNumber = parseFloat(quantityTag[itemNode].value);
    var totalPrice = (quantityNumber * unitaryPrice).toFixed(2);
    document.getElementsByClassName("total-product")[itemNode].innerHTML = totalPrice;
    return parseFloat(totalPrice);
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var allProducts = document.getElementsByClassName("wrapper");
  var totalPrice = 0;
  for (var i = 0; i < allProducts.length; i++){
    totalPrice += getPriceByProduct(i);
  }
  document.getElementById("final-total-price").innerHTML = totalPrice.toFixed(2);
}


//
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
