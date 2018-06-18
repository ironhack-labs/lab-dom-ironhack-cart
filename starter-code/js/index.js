function deleteItem(e){
  document.getElementById("cart-items").removeChild(e.currentTarget.parentNode.parentNode);
  getTotalPrice();  
}

function getPriceByProduct(itemNode){
  //Access itemNode (single-item) > child (item-price-field) >
  //child (item-price) and assign it's text value to price var.
  var price = itemNode.children[1].children[0].textContent;
  //Return numeric value of price without the $.
  return Number(price.substr(price.indexOf("$")+1));
}

function getQuantityByProduct(itemNode) {
  //Access itemNode (single-item) > child (item-quantity-field) >
  //child (item-quantity) > value and return it
  return Number(itemNode.children[2].children[1].value);
}

// function updatePriceByProduct(productPrice, index){

// }

function updatePriceByProduct(itemNode){
  var totalPrice = getPriceByProduct(itemNode) * getQuantityByProduct(itemNode);
  //Access itemNode (single-item) > child (item-total-field) >
  //child (item-total) and updte it's value to totalPrice, adding 
  //$ and two decimal places.
  itemNode.children[3].children[0].textContent = "$" + totalPrice.toFixed(2);
  return Number(totalPrice.toFixed(2));
}

function getTotalPrice() {
  //Access (cart-items) container and assign it's child containing
  //all line items to allItemsOnCart var.
  var allItemsOnCart = document.getElementsByClassName("cart-items")[0];
  
  var totalLabel = document.getElementById("total-price");
  var totalPrice = 0;

  //Loop through allItemsOnCart variable
  for(var i = 0; i < allItemsOnCart.children.length; i++) {
    //Access (single-item) and update prices for each
    totalPrice += updatePriceByProduct(allItemsOnCart.children[i]);
  }
  totalLabel.textContent = "$" + totalPrice.toFixed(2);
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

function createNewItem(e, cartItemTemplate){
  var newItemName = e.currentTarget.parentNode.parentNode.children[0].children[0].value;
  var newItemPrice = Number(e.currentTarget.parentNode.parentNode.children[1].children[1].value);

  if (newItemName !== "" && newItemPrice > 0) {
    //Make a copy of an existing object template and assign it to newItem variable.
    var newItem = cartItemTemplate.cloneNode(true);
    //Modify newItem var with new items's info
    newItem.children[0].children[0].textContent = newItemName;
    newItem.children[1].children[0].textContent = "$" + newItemPrice;

    //Add new item to cart
    document.getElementsByClassName("cart-items")[0].appendChild(newItem);
    //Add delete button functionality
    console.log(newItem.children[4].children[0].addEventListener("click", function() {
      deleteItem(event);
    }));
  } else {
    alert("Please enter the name and price for the new item");
  }  
}

window.onload = function(){
  //Generate a copy of the first item and keep copy for new item creation
  var cartItemTemplate = document.getElementsByClassName("cart-items")[0].children[0].cloneNode(true);

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = function(e) {
    createNewItem(e, cartItemTemplate);
  }

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};