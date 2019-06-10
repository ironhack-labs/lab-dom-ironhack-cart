function getTotalPrice() {
  let allPrices = document.querySelectorAll(".price").length;
  let price = 0;
  let quantity = 0;
  let total = 0;
  for (let i = 0; i < allPrices; i++) {
    price = document.querySelectorAll(".price")[i].innerHTML;
    quantity = document.querySelectorAll(".quantity")[i].value;
    let rowPrice = price * quantity;
    document.querySelectorAll(".totalRow")[i].innerHTML = rowPrice; 
    total += price * quantity;
  }
  document.getElementById("totalPrice").innerHTML = total;
}

function deleteItem(){
  // var element = document.getElementById(e);
  // element.parentNode.removeChild(element);
  this.parentNode.parentNode.remove();
  getTotalPrice();
}

function createNewItem() {
  let item = document.querySelectorAll(".row")[0].cloneNode(true);
  document.querySelectorAll(".flex-items")[0].appendChild(item);
  let name = document.querySelectorAll("#product-name")[0].value;
  let price = document.querySelectorAll("#price-unit")[0].value;
  item.querySelector(".product").innerHTML = name;
  item.querySelector(".price").innerHTML = price;
  item.querySelector(".btn-delete").onclick = function() {
    this.parentNode.parentNode.remove();
  }
}


// window.onload = function() {

// function deleteItem(element) {
//   element.currentTarget.parentNode.parentNode.remove();
//   getTotalPrice()
  
// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

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

// window.onload = function(){
  // var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');
// 
  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
// 
  // for(var i = 0; i<deleteButtons.length ; i++){
    // deleteButtons[i].onclick = deleteItem;
  // }
// };