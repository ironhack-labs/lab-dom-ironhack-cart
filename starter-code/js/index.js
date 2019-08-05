

function deleteItem(e) {
  let toDelete = e.target.parentNode.parentNode;
  // console.log(`toDelete: ${toDelete.innerHTML}`);
  let parent = e.target.parentNode.parentNode.parentNode;
  // console.log(`parent: ${parent.innerHTML}`);
  parent.removeChild(toDelete);
}

function changePrice() {
  let total = 0;
  let products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    products[i].getElementsByClassName("subTotal")[0].innerText = parseInt(products[i].getElementsByClassName("unitPrice")[0].innerText) * parseInt(products[i].getElementsByTagName("input")[0].value);
    total += parseInt(products[i].getElementsByClassName("subTotal")[0].innerText);
  }
  document.getElementById("total").innerText = `Total Price: ${total}`;
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem(e) {
  let toInsert = document.createElement("div");
  toInsert.setAttribute("class", "product");
  // creating Node for name product
  let name__div = document.createElement("div");
  let name__span = document.createElement("span")
  name__span.innerText = e.target.parentNode.getElementsByClassName("input")[0].value;
  name__div.appendChild(name__span);
  toInsert.appendChild(name__div);
  // creating Node for priceUnit product
  let priceUnit__div = document.createElement("div");
  let priceUnit__span = document.createElement("span");
  priceUnit__span.setAttribute("class", "unitPrice")
  priceUnit__span.innerText = e.target.parentNode.getElementsByClassName("input")[1].value;
  priceUnit__div.appendChild(priceUnit__span);
  toInsert.appendChild(priceUnit__div);
  // creating Node label & input product
  let inputQtd__div = document.createElement("div");
  let inputQtd__label = document.createElement("label");
  inputQtd__label.setAttribute("for", "qtd");
  inputQtd__label.innerText = "QTY";
  let inputQtd__input = document.createElement("input");
  inputQtd__input.setAttribute("class", "input");
  inputQtd__input.setAttribute("name", "qtd");
  inputQtd__input.setAttribute("type", "number");
  inputQtd__div.appendChild(inputQtd__label);
  inputQtd__div.appendChild(inputQtd__input);
  toInsert.appendChild(inputQtd__div);
  // creating Node for subtotal product
  let subTotal__div = document.createElement("div");
  let subTotal__span = document.createElement("span");
  subTotal__span.setAttribute("class", "subTotal");
  subTotal__span.innerText = "$0.00";
  subTotal__div.appendChild(subTotal__span);
  toInsert.appendChild(subTotal__div);
  // creating Node for delete button product
  let delete__div = document.createElement("div");
  let delete__button = document.createElement("button");
  delete__button.setAttribute("class", "btn-delete");
  delete__button.innerText = "Delete";
  delete__div.appendChild(delete__button);
  toInsert.appendChild(delete__div);
  // insert Node to Products
  let parent = document.getElementsByClassName("products")[0];
  parent.appendChild(toInsert);
  delete__button.onclick = deleteItem;

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = changePrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

};
