function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  /* Iteration 1 */
  /* 1. Acceder al valor del input qty */
  const qty = document.getElementById('qty').value
  console.log(qty)
  /* 2. Acceder al valor del precio por item */
  const price = document.getElementById('price').innerText
  console.log(price)

  /* 3. Calcular el precio total */

  const result = qty * price;
  console.log(result)
  /* 4. Mostar por pantalla el precio total */
  //document.getElementById('total-price').innerText = result
  const totalPrice = document.getElementById('total-price')
  totalPrice.innerText = result;
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

}

window.onload = function () {
  let calculatePriceButton = document.getElementById('calc-prices-button');
  //console.log(calculatePriceButton)
  /*   let createItemButton = document.getElementById('new-item-create');
    let deleteButtons = document.getElementsByClassName('btn-delete'); */

  calculatePriceButton.onclick = getTotalPrice;
  /* createItemButton.onclick = createNewItem; */

  /*   for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = deleteItem;
    } */



};