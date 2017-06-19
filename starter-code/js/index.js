function deleteItem(e){
  console.log(e.target.parentNode.parentNode.parentNode)
  e.target.parentNode.parentNode.parentNode.remove()
  getTotalPrice()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var total = 0

  for(i = 0; i < document.getElementsByClassName('price').length; i++) {
    var rawPrice = document.getElementsByClassName('price')[i].innerHTML
    var price = parseFloat(rawPrice.substring(rawPrice.indexOf('$') + 1, rawPrice.length))

    var unit = rawPrice.substring(rawPrice.indexOf('$'), rawPrice.indexOf('$') + 1)

    var rawQuantity = document.getElementsByClassName('quantity')[i].value
    var quantity = parseInt(rawQuantity)

    if (isNaN(quantity)) {
      break;
    }

    var pricesByItemType = parseFloat(price * quantity).toFixed(2)
    total += parseFloat(price * quantity)
    document.getElementsByClassName('totalPrice')[i].innerHTML = unit + pricesByItemType
  }

  document.getElementsByTagName('h2')[1].childNodes[1].innerHTML = unit + total

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var name = document.getElementById('itemName').value;
  var price = document.getElementById('itemPrice').value;

  var divColX31 = document.createElement("div");
  divColX31.className = 'col-xs-3'

  var spanName = document.createElement("span");
  spanName.innerHTML = name
  divColX31.appendChild(spanName)

  var divColX21 = document.createElement("div");
  divColX21.className = 'col-xs-2'

  var spanPrice = document.createElement("span");
  spanPrice.innerHTML = price

  divColX21.appendChild(spanPrice)

  var divColX32 = document.createElement("div");
  divColX32.className = 'col-xs-3'

  var qtyLabel = document.createElement("label");
  qtyLabel.innerHTML = 'QTY'

  var input = document.createElement("input");
  input.className = 'quantity'

  divColX32.appendChild(qtyLabel)
  divColX32.appendChild(input)

  var divColX33 = document.createElement("div");
  divColX33.className = 'col-xs-3'

  var spanTotalPrice = document.createElement("span");
  spanTotalPrice.innerHTML = '$0.00'

  var divColX11 = document.createElement("div");
  divColX11.className = 'col-xs-1'

  var removeButton = document.createElement("button");
  removeButton.className = 'btn btn-delete'
  removeButton.innerHTML = 'Delete'

  divColX11.appendChild(removeButton)

  var spanTotalPrice = document.createElement("span");
  spanTotalPrice.innerHTML = '$0.00'
  divColX33.appendChild(spanTotalPrice)

  var divRow = document.createElement("div");
  divRow.className = 'row'

  divRow.appendChild(divColX31)
  divRow.appendChild(divColX21)
  divRow.appendChild(divColX32)
  divRow.appendChild(divColX33)
  divRow.appendChild(divColX11)

  var article = document.createElement("article");
  article.className = 'item'

  article.appendChild(divRow)

  document.getElementsByClassName('info-container')[0].insertBefore(article, document.getElementsByClassName('item')[0]);

  document.getElementById('itemName').value = '';
  document.getElementById('itemPrice').value = '';

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
