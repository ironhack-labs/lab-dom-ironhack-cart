productList = document.getElementsByClassName("product");
var priceList = [];

function deleteItem(e) {
  var toEliminate = e.currentTarget.parentNode.parentNode;
  document.body.removeChild(toEliminate);
}

function getTotalPrice() {
  for (var i = 0; i < productList.length; i++) {
    var value = productList[i]
      .querySelector(".product-price")
      .getAttribute("value");
    var quantity = productList[i].querySelector(".quantity").value;
    itemTotal = value * quantity;

    productList[i].querySelector(".price").innerHTML =
      "$ " + itemTotal.toFixed(2);
    console.log(quantity);
    priceList.push(itemTotal);
    console.log(priceList);
  }
  var total = priceList.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log(total)
  document.getElementById("total-price").innerHTML = total.toFixed(2)
}


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


  calculatePriceButton.onclick = getTotalPrice;

  //createItemButton.onclick = createNewItem;

  //Delete Items

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

//Delete buttons;


