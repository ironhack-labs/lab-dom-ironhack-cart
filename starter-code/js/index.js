/* const products = [{
    name: 'ironbubble-head',
    price: 25.00
  },
  {
    name: 'iron shirt',
    price: 15.00
  },
] */


function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

  /* 0. Construir el array de todos mis productos */

  /* 0.1. Accedo a todas las cantidades y las incluyo en el array productsQtys */
  const productsQtys = document.getElementsByClassName('quantity')
  /* 0.2. Accedo a todas los precios y las incluyo en el array productsPrices */
  const productsPrices = document.getElementsByClassName('price')
  /* 0.3. Accedo a todas los precios totales y las incluyo en el array totalPrices */
  const totalPrices = document.getElementsByClassName('total-price')

  /* 1. Accedemos a los valores unitarios de cada producto */

  for (let i = 0; i < productsQtys.length; i++) {
    /* 1.1 Calculamos el totalPrice para cada producto */
    const totalPrice = (productsPrices[i].innerText * productsQtys[i].value).toFixed(2);
    /* 1.2 Actualizamos el totalPrice en el elemento html para que se muestre */
    totalPrices[i].innerText = totalPrice;
  }

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