function deleteItem(e){

  var child = e.target.parentElement.parentElement;
  // var parent = document.getElementsByClassName("container");
  // var child = document.getElementsByClassName("row")[e];
  child.parentNode.removeChild(child);
}


function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

function calculateprice() {
      var quantity = document.getElementsByClassName('quantityproduct');
      var price = document.getElementsByClassName('cost');
      var singleprice = document.getElementsByClassName('priceresult');
      var total = 0;
      for (var i = 0; i < quantity.length; i++) {
        var oneproduct = price[i].innerHTML * quantity[i].value;
        total += oneproduct;
        singleprice[i].innerHTML = oneproduct;
      }
      document.getElementById("totalprice").innerHTML = total;
}

// function calculateprice(){
//   var quantity = document.getElementById('quantityproduct').value;
//   var price = document.getElementById('cost').innerHTML;
//   var result = quantity * price;
//   document.getElementById('priceresult' ).innerHTML = result;
// }




window.onload = function(){
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
