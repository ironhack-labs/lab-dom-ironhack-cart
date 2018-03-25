function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");
  
  var productOnePrice = document
    .getElementById("product-one-price")
    .getAttribute("value");
    
  var productTwoPrice = document
    .getElementById("product-two-price")
    .getAttribute("value");


    //function getTotalPrice

  function getTotalPrice() {


    var productOneQuantity = document
      .getElementById("product-one-quantity").value;
<<<<<<< HEAD
    var productOneTotal = (productOnePrice * productOneQuantity).toFixed(2)
    document.getElementById("price-one").innerHTML = productOneTotal;

    var productTwoQuantity = document
      .getElementById("product-two-quantity").value;
    var productTwoTotal = (productTwoPrice * productTwoQuantity).toFixed(2);
    document.getElementById("price-two").innerHTML = productTwoTotal;

    var total = parseFloat(productOneTotal) + parseFloat(productTwoTotal)
    document.getElementById("total-price").innerHTML = total.toFixed(2);
=======
      var totalPriceOne = (productOnePrice * productOneQuantity).toFixed(2);
    document.getElementById("price-one").innerHTML = totalPriceOne

    var productTwoQuantity = document
      .getElementById("product-two-quantity").value;
      var totalPriceTwo = (productTwoPrice * productTwoQuantity).toFixed(2);
    document.getElementById("price-two").innerHTML = totalPriceTwo;


    prices = [parseFloat(totalPriceOne), parseFloat(totalPriceTwo)];
 
    var totalPrice = 0;

    for (i = 0; i < prices.length; i ++) {
      totalPrice += prices [i]
    }

    document.getElementById ("total-price").innerHTML = "$" + totalPrice;
  
>>>>>>> 0c7463f52af89978da9d8340b44bf608c303e1bd
  }


  calculatePriceButton.onclick = getTotalPrice;


  //createItemButton.onclick = createNewItem;


  //Delete Items
function deleteItem(i){

}

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};



//Delete buttons;

var deleteButton = document.getElementsByClassName ("btn-delete");

