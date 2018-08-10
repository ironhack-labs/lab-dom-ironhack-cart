function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  
  var price = document.querySelectorAll(".product-price");
  var quatity = document.querySelectorAll(".quantity");  
  var totalPrice = document.querySelectorAll(".total-price");


   totalPrice.forEach(function(values, index) {
    var total = price[index].innerHTML * quatity[index].value;
    var parent = values.parentNode;
   parent.innerHTML = total + " <span class= 'total-price'</span>";
  });
    // console.log(price)
    // console.log(quatity)
    // console.log(totalPrice)

  var containPrices = document.querySelectorAll(".container-prices");
  var span = containPrices.childNodes;
  span.reduce(function(acc, cur, index) {
   acc[index] + cur[index];
    }, 0);
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
   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

      calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

