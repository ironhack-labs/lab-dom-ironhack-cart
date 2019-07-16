function deleteItem(e) {
  /*this looks more complicated than needed, but the exercise
  clearly demands we use e.currentTargent, parentNode and removeChild() */
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode)
}



function getPriceByProduct(i) {
  return parseInt(document.getElementsByClassName('costUnit')[i].innerHTML)
}


function updatePriceByProduct(index) {
  return document.getElementsByClassName('quantity')[index].value * getPriceByProduct(index)
}

function getTotalPrice() {
  let totalPrice = 0
  for (i = 0; (i < document.querySelectorAll('.wrapper').length); i++) {
    document.querySelectorAll('.wrapper')[i].querySelector('.priceTimesQuantity').innerHTML = updatePriceByProduct(i) + "$"
    totalPrice = totalPrice + updatePriceByProduct(i)
  }
  //I purposefully use getElementById and getElementsByTagName here instead of just querySelectorAll in order to train using them, too
  document.getElementById('totalPriceDiv').getElementsByTagName('h2')[0].getElementsByTagName('span')[0].innerHTML = totalPrice + "$"
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
  let wrapperDiv = document.createElement('div')
  wrapperDiv.classList.add('wrapper')
  wrapperDiv.appendChild('div')
  wrapperDiv.querySelector('div').innerHTML(document.querySelector('#productName').value)
  wrapperDiv.appendChild('div')
  wrapperDiv.querySelector('div')[1].innerHTML(document.querySelector('#productPrice').value)
  wrapperDiv.appendChild('div')
  wrapperDiv.querySelector('div')[2].appendChild('button')
  wrapperDiv.querySelector('div')[2].querySelector('button').appendChild('label')
  wrapperDiv.querySelector('div')[2].querySelector('button').querySelector('label').innerHTML('How Many?')
  wrapperDiv.querySelector('div')[2].querySelector('button').appendChild('input')
  wrapperDiv.querySelector('div')[2].querySelector('button').querySelector('input').classList.add('quantity')
  wrapperDiv.appendChild('div')
  wrapperDiv.querySelector('div')[3].classList.add('priceTimesQuantity')
  wrapperDiv.appendChild('div')
  wrapperDiv.querySelector('div')[4].appendChild('button')
  wrapperDiv.querySelector('div')[4].querySelector('button').classList.add('btn-delete')
  document.querySelector('.containerOfWrappers').appendChild(wrapperDiv)
}

function createNewItem() {
  createNewItemRow(document.querySelector('#productName').value, document.querySelector('#productPrize').value)
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //   var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //   createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

