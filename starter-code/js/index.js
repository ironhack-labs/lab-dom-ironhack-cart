class poduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toHTML() {
    let container = document.createElement("div");
    let productname = document.createElement("div");
    productname.appendChild(document.createElement("span"));
    productname.getElementsByTagName("span")[0].className = "nombre-producto";
  }
}
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

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

let u = document.getElementById("cart-contents").innerHTML;
console.log(u);
//document.querySelector(".clase > p") regresa el primer elemento que cumpla la característica
//document.querySelector(".clase >div") regresa un HTMLCollection (no e sun arreglo propiamente dicho) con todos los elementos que cu con
