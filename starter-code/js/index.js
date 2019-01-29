function deleteItem(e){
  e.currentTarget.parentElement.parentElement.remove()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){


}

function getTotalPrice() {
  let productWrapper = document.getElementsByClassName('wrapper')[0];
  let items = productWrapper.getElementsByClassName('item-wrapper')[0];

  for(var i  =0; i<items.length; i++){
    let item = items[i]
    let price = items.getElementsByClassName('text-center')[1].innerHTML;
    let qnty = items.getElementsByClassName('qnty-info')[0].getElementsByClassName('qnty-input')[0].value;

    console.log(items.getElementsByClassName('text-center')[1].innerHTML)

  }
}

function createQuantityInput(){

}

function createDeleteButton(itemContainer){
  let div = document.createElement('div');
  let btn = document.createElement('button')
  btn.innerHTML = 'Delete'
  btn.setAttribute('class', 'btn btn-delete')
  div.appendChild(btn)
  itemContainer.appendChild(div)
  return itemContainer
}

function createQuantityNode(itemContainer){
  let newInput = document.createElement('input');
  let div = document.createElement('div');
  let label = document.createElement('label')
  newInput.setAttribute('class', 'qnty-input');
  newInput.setAttribute('id', 'qnty');
  newInput.setAttribute('type', 'number');

  label.innerHTML = 'Quantity'

  div.appendChild(label);
  div.appendChild(newInput);
  itemContainer.appendChild(div)
  return itemContainer

}

function createItemNode(div){
  let priceDiv = document.createElement('div');
  priceDiv.setAttribute('class', 'text-center');
  let itemPrice =  document.getElementById('new-item-price').value;

  priceDiv.innerHTML = '$'+itemPrice
  div.appendChild(priceDiv)
  return div
}
function createQuantityPrice(itemContainer){
  let div = document.createElement('div');
  div.setAttribute('class', 'item-price')
  div.innerHTML = '0.00'
  itemContainer.appendChild(div)
  return itemContainer
}

function createNewItemRow(itemDiv){
  let productNameDiv = document.createElement('div');
  let span = document.createElement('span');
  let itemName = document.getElementById('new-item-name').value;

  span.textContent = itemName

  productNameDiv.setAttribute('class', 'product-name text-center')
  productNameDiv.appendChild(span)
  itemDiv.appendChild(productNameDiv)

  return itemDiv

}

function createNewItem(e){
  e.preventDefault()
  let itemDiv = document.createElement('div')
  itemDiv.setAttribute('class', 'item-wrapper')

  itemDiv = createNewItemRow(itemDiv)
  itemDiv = createItemNode(itemDiv)
  itemDiv = createQuantityNode(itemDiv)
  itemDiv = createQuantityPrice(itemDiv)
  itemDiv = createDeleteButton(itemDiv)
  let newItemContainer = document.getElementsByClassName('wrapper')[0]
  newItemContainer.appendChild(itemDiv)

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
