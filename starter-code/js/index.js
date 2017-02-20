// Use at least 3 onclick events
// Use at least once getElementById
// Use at least once getElementsByTagName
// Use at least once getElementsByClassName



// qty

function getQty() {
    var qty = document.querySelector("#qty").value;
    document.querySelector("#total").innerHTML = qty;
    return qty;
}

getQty();


// qty2

function getQty2() {
    var qty2 = document.querySelector("#qty2").value;
    document.querySelector("#total2").innerHTML = qty2;
    return qty2;
}

getQty();


// Price

function getPrice() {
    var price = parseInt(document.querySelector("#product").innerHTML);
    document.querySelector("#total").innerHTML = price * getQty();
}

getPrice();

// Price 2

function getPrice2() {
    var price2 = parseInt(document.querySelector("#product2").innerHTML);
    document.querySelector("#total2").innerHTML = price2 * getQty2();
}

getPrice2();




//Romve Item

function removeItem() {
    var remove = document.querySelector("#itemSubject").remove("itemSubject");
    setTimeout(function() { alert("Your shopping cart is empty"); }, 1000);
}
removeItem();




// itemSubject


// if (getPrice() >= 100) {
//   alert("that is a lot");
// }

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
