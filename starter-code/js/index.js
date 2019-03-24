function deleteItem(e) {
  e.preventDefault();
  console.log(e.target.classList)

  var product = document.querySelector(".wrapper")
  product.remove(e);

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

  var products = document.querySelectorAll(".wrapper")
  console.log(products)
  var acumTotal = 0;

  for (var i = 0; i < products.length; i++) {
    var units = document.getElementById("units-" + i).value
    console.log(units)
    var price = document.querySelector("#price-" + i).innerHTML
    console.log(price)
    var partialPrice = document.querySelector("#partialPrice-" + i)
    console.log(partialPrice)
    var sum = parseFloat(price.slice(1) * units)
    partialPrice.innerHTML = "$" + sum
    acumTotal += sum
  }

  var totalPrice = document.querySelector("#totalPrice")
  totalPrice.innerHTML = "$" + acumTotal

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

function createNewItem() {

  var nameProduct = document.querySelector("#nameProduct").value
  var priceProduct = document.querySelector("#priceProduct").value
  var containerWrapper = document.querySelector(".container")

  var newWrapper = document.createElement("div")
  newWrapper.className = "wrapper"
  var numId = document.getElementsByClassName('wrapper').length

  newWrapper.id = numId
  newValue = newWrapper.id



  newWrapper.innerHTML = `<div><span>${nameProduct}</span></span></div>    
                            <div><span id="price-${newValue}" >${"$" + priceProduct}</span></div>
                            <label for="text" class="quantity">QTY</label>
                            <input type="number" id="units-${newValue}" value="0">
                            <div><span id="partialPrice-${newValue}">$0</span></div>
                            <button id="btn-delete" class="btn btn-delete">delete</button>`
  //var newProduct = document.createTextNode(nameProduct)

  //newWrapper.appendChild(newProduct);

  containerWrapper.appendChild(newWrapper);

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }


}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};