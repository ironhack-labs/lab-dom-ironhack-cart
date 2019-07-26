let deleteButtons = [];
let productStructure = {};

function deleteItem(e) {
  let target = e.currentTarget;
  let product = target.parentElement;
  let allProducts = product.parentElement;
  allProducts.removeChild(product);

  getTotalPrice();
}

function getTotalPrice() {
  let products = document.getElementsByClassName("product");
  let arrayPrices = [];
  let finalPrice = 0;
  for (i = 0; i <= products.length - 1; i++) {
    let price = products[i].querySelector(".price");
    let priceValue = price.innerHTML;
    priceValue = parseFloat(priceValue.slice(1));
    let input = products[i].getElementsByTagName("input")[0];
    let totalPrice = priceValue * input.value;
    arrayPrices.push(parseFloat(totalPrice));
    let startingPrice = products[i].querySelector(".sum");
    startingPrice.innerHTML = "$" + totalPrice.toFixed(2);
  }
  for (i = 0; i < arrayPrices.length; i++) {
    finalPrice += arrayPrices[i];
  }
  let combinedPrice = document.getElementById("totalPrice");
  let newCalculation = combinedPrice.querySelector(".payablePrice");
  newCalculation.innerHTML = "$" + finalPrice.toFixed(2);
}

function deleteButton() {
  deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

function createNewItem() {
  let clone = productStructure.cloneNode(true);
  let parent = document.getElementsByTagName("body")[0];
  let nextProduct = document.createElement("div");
  nextProduct = clone;
  let newValues = document.getElementsByClassName("newProduct");
  let newInputName = newValues[0].getElementsByTagName("input")[0].value;
  let newInputPrice = newValues[0].getElementsByTagName("input")[1].value;
  newInputPrice = parseFloat(newInputPrice);
  let newProductPrice = nextProduct.querySelector(".price");
  newProductPrice.innerHTML = "$" + newInputPrice.toFixed(2);
  let newProductName = nextProduct.querySelector(".itemName");
  newProductName.innerHTML = newInputName;
  parent.insertBefore(nextProduct, parent.childNodes[2]);
  deleteButton();
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");

  productStructure = document.getElementsByClassName("product")[0];
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  deleteButton();
};
