function deleteItem(e) {
  console.log("hola");
}

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

  productList = document.getElementsByClassName("product");

  function getTotalPrice() {
    /*var productOneQuantity = document
      .getElementById("product-one-quantity").value;
    var productOneTotal = (productOnePrice * productOneQuantity).toFixed(2)
    document.getElementById("price-one").innerHTML = productOneTotal;

    var productTwoQuantity = document
      .getElementById("product-two-quantity").value;
    var productTwoTotal = (productTwoPrice * productTwoQuantity).toFixed(2);
    document.getElementById("price-two").innerHTML = productTwoTotal;   
    
    var total = parseFloat(productOneTotal) + parseFloat(productTwoTotal)*/
    // document.getElementById("total-price").innerHTML = total.toFixed(2);
    var priceList = [];
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

  calculatePriceButton.onclick = getTotalPrice;

  //createItemButton.onclick = createNewItem;

  //Delete Items

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

//Delete buttons;

var deleteButton = document.getElementsByClassName("btn-delete");
