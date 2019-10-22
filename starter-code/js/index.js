function deleteItem(event) {
  console.log(event)
  const deleteItem = (event.currentTarget.parentNode.parentNode)
  document.querySelector("section").removeChild(deleteItem)
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  let finalSum = 0;
  document.querySelectorAll(".shoppingItem").forEach((item, index) => {
    const unitPrice = document.querySelector("section>div:nth-child(" + (index + 1) + ") .unitPrice span").innerText;

    let quantity = document.querySelector("section>div:nth-child(" + (index + 1) + ") input").value;

    const getTotalPrice = Number(quantity) * Number(unitPrice.slice(1));

    const totalSum = document.querySelector("section>div:nth-child(" + (index + 1) + ") .priceSum");

    totalSum.innerText = "$" + Number(getTotalPrice).toFixed(2);
    finalSum += getTotalPrice;
  });
  document.querySelector("h2 span").innerText = " $ " + finalSum.toFixed(2)
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
  const newName = document.querySelector("article .newItemName").value

  const newPrice = "$" + Number.parseFloat(document.querySelector("article .newItemPrice").value).toFixed(2);

  const container = document.querySelector("section");
  const newElement = document.createElement("div")
  newElement.setAttribute("class", "shoppingItem")
  newElement.innerHTML = `<div class="productName"><span>${newName}</span></div>
  <div class="unitPrice"><span>${newPrice}</span></div>
  <div class="quantity"><label for="text">QTY</label><input type="text" placeholder="How many?"></input></div>
  <div class="priceSum"><span>$0.00</span></div>
  <div><button class="btn btn-delete">Delete</button></div>`
  container.appendChild(newElement);
  window.onload()
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

  /*   getTotalPrice() */


};