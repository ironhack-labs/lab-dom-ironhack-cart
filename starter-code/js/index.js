//Make less dumb later.
function deleteItem(e){
  var container = e.currentTarget.parentNode.parentNode.parentNode.parentNode;
  var item = e.currentTarget.parentNode.parentNode.parentNode;
  container.removeChild(item);
}

function getPriceByProduct(currentPrice, quantity){
  return currentPrice.innerHTML * quantity.value;
}

function updatePriceByProduct(productPrice, index, priceArray){
  priceArray[index].innerHTML = productPrice.toString();
}

function getTotalPrice() {
  var wrappers = document.querySelectorAll(".wrapper");
  var currentPrice = document.querySelectorAll(".item-price");
  var quantity = document.querySelectorAll(".quantity");
  var totalPrice = document.querySelectorAll(".total-price");
  var finalPrice = document.querySelector(".final-price");
  var price = 0;
  var sum = 0;
  for (var i = 0; i < wrappers.length; i++)
  {
    price = getPriceByProduct(currentPrice[i], quantity[i]);
    sum += price;
    updatePriceByProduct(price.toFixed(2), i, totalPrice)
  }
  finalPrice.innerHTML = sum.toString();
}

//I didn't use these - I think I needed to split things up more rather than using wrapper.innerHTML with a gigantic string
//but it works as is so I'm submitting and checking the solution.

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){
  
// }

function createNewItemRow(itemName, itemUnitPrice){
  var parent = document.querySelector(".container");
  var firstChild = document.querySelector("#footer");
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  wrapper.innerHTML = "<div class='row'><div class='col-2'><span>" + itemName + "</span></div><div class='col-2'>$<span class='item-price'>" + itemUnitPrice + "</span></div><div class='col-4'><label for='price-input'>QTY</label><input class='quantity' type='number' name='price-input'></div><div class='col-2'>$<span class='total-price'>0.00</span></div><div class='col-2'><button class='btn btn-default btn-delete'>Delete!</button></div>";
  parent.insertBefore(wrapper, firstChild);
  var deleteButton = document.querySelectorAll(".btn-delete");
  deleteButton[deleteButton.length-1].onclick = deleteItem;
}

function createNewItem(){
  var itemName = document.querySelector("#input-name").value;
  var itemPrice = document.querySelector("#input-price").value;
  createNewItemRow(itemName, itemPrice);
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
