// getTotalPrice for 1st iteration
// just a single product

// function getTotalPrice() {
//   var price = document.querySelectorAll(".price")[0].innerHTML;
//   var quantity = document.querySelectorAll(".quantity")[0].value;
//   var total = price * quantity;
//   document.querySelectorAll(".subTotal-price")[0].innerHTML = "$ " + total;
// }

// getTotalPrice for 2nd iteration
// 2 products

function getTotalPrice() {
  
  var sumPrice = 0;
    for (var i=0; i< document.querySelectorAll(".product").length; i++) {
      var price = document.querySelectorAll(".price")[i].innerHTML;
      var quantity = document.querySelectorAll(".quantity")[i].value;
      var total = price[i] * quantity[i];
      sumPrice += total
      document.querySelectorAll(".subTotal-price")[i].innerHTML = "$ " + total;
    }
 }  

  // var price = document.getElementsByClassName("price");
  //   for(i=0; i<price.length;i++) {
  //     var productPrice = price[i].innerHTML;
  //   }


  // var quantity = document.getElementsByClassName("quantity");
  //   for(i=0; i<quantity.length;i++) {
  //     var quantityProduct = quantity[i].innerHTML;
  //   }





// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
//createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
 //   deleteButtons[i].onclick = deleteItem;
  }
};
