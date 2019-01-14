function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

//  defining calculate calculate, add item and delete buttons
var calculatePriceButton = document.getElementById("calc-prices-button");
var createItemButton = document.getElementById("new-item-create");
var deleteButtons = document.getElementsByClassName("btn-delete");

/* 
  LA FONCTION POUR UNE SEULE LIGNE
*/
// // creating a event when button is clicked
// calculatePriceButton.onclick = function() {
//   // fetching item price between the two innerHTML and converting string to number
//   var itemPrice = document.querySelector(".item-price").innerHTML;
//   itemPrice = parseFloat(itemPrice);

//   // retrieves the quantity of items desired by fetching value propierty
//   var itemQty = document.querySelector("#item-qty").value;
//   itemQty = Number(itemQty);

//   // calculates the total price based on this data
//   var productTotalPrice = itemPrice * itemQty;

//   // Updates the total price in the DOM
//   var singleItemSum = document.querySelector(".single-item-sum");
//   singleItemSum.innerHTML = "$" + productTotalPrice;
// };

// selecting all the items and creating an array
var itemsArray = document.querySelectorAll(".item");

/* LA FUNCTION POUR UN PANIER A PLUSIEURS LIGNES (ITEMS) EN LOOP */

// when user click on the green button calculate
calculatePriceButton.onclick = function() {
  // initial total sum of the cart
  var cartTotalSum = 0;

  //for each item row in the cart (pour chaque ligne du panier)
  itemsArray.forEach(function(oneRow, i) {
    console.log("item n#" + i + "contenu html" + oneRow.innerHTML);

    var itemPrice = oneRow.querySelector(".item-price").innerHTML;
    itemPrice = parseFloat(itemPrice);

    // creating a dynamic css #id selector for each inpu (see html code)
    var itemId = "#item" + i + "-qty";

    // retrieves the quantity of items desired by fetching value propierty of EACH input
    var itemQty = document.querySelector(itemId).value;
    itemQty = Number(itemQty);

    // calculates the total price based on this data (for THIS row)
    var productTotalPrice = itemPrice * itemQty;

    // Updates the total price in the HTML (according to the number of desired items)
    var singleItemSum = oneRow.querySelector(".single-item-sum");

    // adding a dollar sign (becaaauuse)
    singleItemSum.innerHTML = "$" + productTotalPrice;

    // add it to the cart's total sum (initially 0)
    cartTotalSum += productTotalPrice;
  }); // end of my loop

  // getting total cart sum
  console.log(cartTotalSum);

  var cartTotalResult = document.querySelector(".cart-total-result");

  //calculating cart total price
  cartTotalResult.innerHTML = "$" + cartTotalSum;
};

/*
Iteration 3: Calculating the total price of all products

Now that you have each product's total price, you need to calculate the total price of the entire shopping cart.
Once you have that number, you need to display the result in the DOM.
*/
//calculatePriceButton.onclick = getTotalPrice;
//createItemButton.onclick = createNewItem;

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
}
