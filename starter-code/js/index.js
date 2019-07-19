let input = document.getElementsByClassName('quantity')
let itemUnitPrice = document.getElementsByClassName("unit-price")
let totalPerProduct = document.getElementsByClassName('totalPrice')
//let grandTotal = document.getElementById("grand-total")
let itemDiv = document.getElementsByClassName('item')



function deleteItem(e) {

  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()

  //  itemsContainer.removeChild(e.currentTarget.parentNode)

  getTotalPrice()

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) { };

function getTotalPrice() {

  let total = 0;
  let totalSum = 0;
  for (let i = 0; i < input.length; i++) {
    let result = parseFloat(input[i].value) * parseInt(itemUnitPrice[i].innerHTML);
    totalPerProduct[i].innerHTML = result;
    totalSum = totalSum + result;

  }
  document.getElementById("grand-total").innerHTML = totalSum
}

function getGrandTotal() {


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
  let newRow = document.createElement('div')
  let itemsContainer = document.getElementById("items-container")
  //itemsContainer.appendChild(newRow);
  newRow.classList.add('itemDiv')

  let newRowContents = `<div class="item">
<div>
  <span>${itemName}</span>
</div>
<div>$<span class="unit-price">${itemUnitPrice}</span></div>
<div>
  <label for="quantity">QTY</label>
  <input name="quantity" class="quantity" value="" />
</div>
<div>$<span class="totalPrice">0.00</span></div>
<div>
  <input
    class="btn btn-delete"
    type="button"
    onclick=""
    value="Delete"
  />
</div>
</div>`
  newRow.innerHTML = newRowContents
  itemsContainer.append(newRow)
  newRow.getElementsByClassName('btn-delete')[0].addEventListener('click', deleteItem)

}


function createNewItem() {
  let titleInput = document.getElementsByClassName('new-item-name')[0].value;
  let priceInput = document.getElementsByClassName('unit-price')[0].value;
  createNewItemRow(titleInput, priceInput)

}

//when create new item, need to create an on-click handle. 

window.onload = function () {

  /* var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete')

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  } */

  let createItemButton = document.getElementById('btn-create');
  createItemButton.onclick = createNewItem;

  let deleteButtons = document.getElementsByClassName('btn-delete')
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  let calculatePriceButton = document.getElementsByClassName("btn-sucess")[0];
  calculatePriceButton.onclick = getTotalPrice;

};

