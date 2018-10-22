// shopping cart functions 
var cart = [];

var Item = function(name, price, count) {
  this.name = name
  this.price = price
  this.count = count

  };

  function getTotalPrice(name, price, count) { 
    for(var i in cart){
      if(cart[i].name === name) {
        cart[i].count *= price;
        return;
      }
    }
  }

  
function addItemToCart(name, price, count) {
  for(var i in cart) {
    if(cart[i].name === name) {
      cart[i].count += count;
      return;
    }
  }


var item = new Item(name, price, count);
  cart.push(item);
  saveCart();
}



function removeItemFromCart(name) {
  for(var i in cart) {
    if(cart[i].name === name) {
      cart[i].count--;
      if(cart[i].count === 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  saveCart();
}

function removeItemFromCartAll(name) {
  for(var i in cart) {
    if(cart[i].name === name) {
      cart.splice(i, 1);
      }
      break;
    }
    saveCart();
  }

function clearCart() {
  cart = [];
  saveCart();

}


function countCart() {
  totalCount  = 0;
  for(var i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
} 
 



function totalCart() {
  var totalCost = 0;
  for(var i in cart) {
    totalCost += cart[i].price * cart[i].count;
  }
  return  document.getElementById('total-price').innerHTML = 'Total Price: $' + totalCost;
}
console.log(addItemToCart('iron', 3, 3));
 
function listCart() {
  var cartCopy = [];
  for(var i in cart) {
    var item = cart[i];
    var itemCopy = {};
    for(var p in item ) {
      itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}
console.log(listCart());

function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
}
var array = listCart();






function deleteItem(e){

}


function getPriceByProduct(itemNode){
  let e = document.getElementsByClassName("unitCost");
  console.log(e[1].innerHTML);
  e[1].innerHTML = "tttt";

}
getPriceByProduct();
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
