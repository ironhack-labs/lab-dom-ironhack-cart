function deleteItem(e) {

}



function getPriceByProduct(i) {
  let itemNode = document.getElementsByClassName('costUnit');
  return parseInt(itemNode[i].innerHTML)
}


function updatePriceByProduct(index) {
  let howMuch = document.getElementsByClassName('quantity')[index].value
  return howMuch * getPriceByProduct(index)
}

function getTotalPrice() {
  for (i = 0; (i < document.querySelectorAll('.wrapper').length); i++) {
    document.querySelectorAll('.wrapper')[i].querySelector('.priceTimesQuantity').innerHTML = updatePriceByProduct(i)
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
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //   var createItemButton = document.getElementById('new-item-create');
  //   var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //   createItemButton.onclick = createNewItem;

  //   for (var i = 0; i < deleteButtons.length; i++) {
  //     deleteButtons[i].onclick = deleteItem;
  //   } 
};

