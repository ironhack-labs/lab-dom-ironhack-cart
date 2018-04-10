var createButton

var getProduct = ;
var getProductCost = ;
var getUnitPrice = //cost of item
var getUnitQuantity = document.getElementsByID('qty'); // gets the quanitity
var deleteButtons = ;


function calculatePriceButton(){
// Currently this function does the work of multiple other functions. I need to componentize this into the functions provided. 

  // var getPriceID = document.getElementById('cost-of-item'); // Gets the priceID
  // var itemPrice = getPriceID.innerHTML; // Gets the price from the ID.
  // itemPrice = itemPrice.replace("$",""); // Removes the $ from the price.
  // itemPrice = Number(itemPrice); // Turns price into a #.

  // getPriceByProduct(); ^

  var quantityInput = document.getElementById('qty-input').value;  // Grabs user input for quantity.
  quantityInput = Number(quantityInput); // Turns quantity into a #.

  var inputTotal = itemPrice * quantityInput; // inputTotal is the item price multiplied by quantity.

  // var totalPriceID = document.getElementById('total-price'); 
  // var currentQtyTotal = totalPriceID.innerHTML; // Gets the totalPrice. 

  // getTotalPrice(); ^

  currentQtyTotal = currentQtyTotal.replace("$",""); // Removes the $ from the total.
  currentQtyTotal = Number(currentQtyTotal); // Turns currentQtyTotal into a #.

  var updatedQtyTotal = currentQtyTotal + inputTotal;

  return document.getElementById('total-price').innerHTML = "$" + updatedQtyTotal;
};


function deleteItem(e){
  var productToBeRemoved = document.getElementsByClassName("product-wrapper");
  productToBeRemoved.parentNode.removeChild(productToBeRemoved);  
  
}

function getPriceByProduct(itemNode){
  var getPriceID = document.getElementById('cost-of-item'); // Gets the priceID
  var itemPrice = getPriceID.innerHTML; // Gets the price from the ID.
  itemPrice = itemPrice.replace("$",""); // Removes the $ from the price.
  itemPrice = Number(itemPrice); // Turns price into a #.

  return itemPrice;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPriceID = document.getElementById('total-price'); // Gets the totalPrice by the ID.
  var currentQtyTotal = totalPriceID.innerHTML; // Gets the totalPrice. 

}

function createQuantityInput(){
// Do I use this to create a quanitity input for the first product as well as the others that follow?
}

function createDeleteButton(){
  // QUESTION: Do I need to populate the delete button using this function on the first product as well as all the products that follow? Or do I need to get the products that are added to have a button created after the first by using a template.

  // div.parentNode.removeChild(div);
}

function createQuantityNode(){
 
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  // var newItem = document.getElementsByClassName('product-wrapper');
  // newItem.appendChild()
  // document.body.appendChild(newItem);
  // document.createElement(newItem);

  // I may need to use something like insertAdjacentHTML 
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


// https://stackoverflow.com/questions/14094697/how-to-create-new-div-dynamically-change-it-move-it-modify-it-in-every-way-po