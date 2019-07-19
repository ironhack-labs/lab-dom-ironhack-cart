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

function createProductName(itemName) {
  let productDiv = document.createElement('div')
  productDiv.innerText = itemName
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].appendChild(productDiv)
}

function createDeleteButton() {
  let deleteButtonDiv = document.createElement('div')
  deleteButtonDiv.id = 'deleteButtonDiv'
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].appendChild(deleteButtonDiv)
  let deleteButton = document.createElement('button')
  deleteButton.classList.add('btn-delete')
  deleteButton.innerText = 'Delete'
  deleteButton.onclick = deleteItem
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].querySelector('#deleteButtonDiv').appendChild(deleteButton)
}

function createProductQuantity(itemUnitPrice) {
  let productQuant = document.createElement('div')
  productQuant.classList.add('costUnit')
  productQuant.innerText = itemUnitPrice + '$'
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].appendChild(productQuant)
}

function createHowMany() {
  let howMany = document.createElement('div')
  howMany.id = 'howMany'
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].appendChild(howMany)
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].querySelector('#howMany').appendChild(document.createElement('label'))
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].querySelector('label').innerText = "How Many?"
  let newInput = document.createElement('input')
  newInput.classList.add('quantity')
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].querySelector('#howMany').appendChild(newInput)
  let priceTimesQuantityDiv = document.createElement('div')
  priceTimesQuantityDiv.classList.add('priceTimesQuantity')
  document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper')[(document.querySelector('.containerOfWrappers').querySelectorAll('.wrapper').length - 1)].appendChild(priceTimesQuantityDiv)

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
  console.log(itemName + itemUnitPrice)
  let newRow = document.createElement('div')
  newRow.classList.add('wrapper')
  document.querySelector('.containerOfWrappers').appendChild(newRow)
  createProductName(itemName)
  createProductQuantity(itemUnitPrice)
  createHowMany()
  createDeleteButton()

  //document.querySelectors.('containerOfWrappers').querySelectors(div)[document.querySelector('containerOfWrappers').querySelector].classList.add('wrapper')
  // document.wrapperDiv.appendChild('div')
  // document.wrapperDiv.querySelector('div').innerHTML(document.querySelector('#productName').value)
  // document.wrapperDiv.appendChild('div')
  // document.wrapperDiv.querySelector('div')[1].innerHTML(document.querySelector('#productPrice').value)
  // document.wrapperDiv.appendChild('div')
  // document.wrapperDiv.querySelector('div')[2].appendChild('button')
  // document.wrapperDiv.querySelector('div')[2].querySelector('button').appendChild('label')
  // document.wrapperDiv.querySelector('div')[2].querySelector('button').querySelector('label').innerHTML('How Many?')
  // document.wrapperDiv.querySelector('div')[2].querySelector('button').appendChild('input')
  // document.wrapperDiv.querySelector('div')[2].querySelector('button').querySelector('input').classList.add('quantity')
  // document.wrapperDiv.appendChild('div')
  // document.wrapperDiv.querySelector('div')[3].classList.add('priceTimesQuantity')
  // document.wrapperDiv.appendChild('div')
  // document.wrapperDiv.querySelector('div')[4].appendChild('button')
  // document.wrapperDiv.querySelector('div')[4].querySelector('button').classList.add('btn-delete')

}

function createNewItem() {
  createNewItemRow(document.querySelector('#productName').value, document.querySelector('#productPrice').value)
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

