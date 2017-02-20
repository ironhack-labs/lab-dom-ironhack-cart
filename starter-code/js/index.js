// Use at least 3 onclick events
// Use at least once getElementById
// Use at least once getElementsByTagName
// Use at least once getElementsByClassName

// ------------------- PING --------------------



function getQty() {
    var qty = document.getElementById("qty1").value;
    document.getElementById("total-1").innerHTML = qty;
    return qty;
}

getQty();

function getPrice() {
    var price = parseInt(document.getElementById("priceTshirt").innerHTML);
    document.getElementById("total-1").innerHTML = price * getQty();
}

getPrice();

// function getPrice(price, qty) {
//   getPrice.call(this, price);
//   getQty.call(this, qty);
//     return this.price * this.qty ;
//   }
//
// getPrice();





// function getQty() {
//     var x = document.getElementById("qty1").innerHTML;
// }
//
// function getTotalPrice (price, qty) {
//   getPrice.call(this, price);
//   getQty.call(this, qty);
//   this.total = function() {
//     return this.price * this.qty;
//   };
// }
//
// function changePrice (price) {
//   getTotalPrice.call(this, price);
//   this.name = name;
//   this.receiveDamage =  function(damage) {
//    this.health -= damage;
//  };
//  }

  //   if (this.health > 0 ){
  //     return (this.name + ' has received ' + damage + ' points of damage');
  //   } else {
  //     return (this.name + ' has died in act of combat');
  //   };
  // }


//
// var totalToPay = document.getElementById('total-1');
// totalToPay.modify = getTotalPrice.total;

// function deleteItem(e){
//
// }
//
// function getPriceByProduct(itemNode){
//
// }
//
// function updatePriceByProduct(productPrice, index){
//
// }
//
// // function getTotalPrice() {
// //
// // }
//
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }
//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
