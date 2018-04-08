
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('btn-create');
var deleteButtons = [document.getElementsByClassName('btn-delete')[0], document.getElementsByClassName('btn-delete')[1]];
var products = document.getElementsByClassName('product');
var allProducts = document.getElementById('all-products');
function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPrice = document.getElementById('total-price');
  var priceUnit = [document.getElementsByTagName('span')[2],document.getElementsByTagName('span')[8]];
  var qty = [document.getElementsByTagName('input')[0], document.getElementsByTagName('input')[1]];
  var totalValues = [document.getElementsByTagName('span')[5], document.getElementsByTagName('span')[11]]

  totalPrice.innerHTML = 0;

  for(var i = 0; i < products.length; i++){
    totalValues[i].innerHTML = priceUnit[i].innerHTML * qty[i].value;
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(totalValues[i].innerHTML) 
    }
}




function createQuantityNode(){

}

// function createItemNode(dataType, itemData){
//   document.createElement(dataType);
//   document.createTextNode(itemData);
//   dataType.appendChild(itemData);
//   allProducts.appendChild(dataType);
//   caca.setAttribute('class','product')
// }

function createNewItemRow(itemName, itemUnitPrice){
  var newDiv = document.createElement('div');
  var newNameSpan = document.createElement('span');
  var newPriceUnitSpan = document.createElement('span');
  var newTotalValueSpan = document.createElement('span');
  var newProductNameInput = document.createTextNode(itemName.value);
  var newPriceUnitInput = document.createTextNode('$' + itemUnitPrice.value);

  newNameSpan.appendChild(newProductNameInput);
  newPriceUnitSpan.appendChild(newPriceUnitInput);
  newDiv.appendChild(newNameSpan);
  newDiv.appendChild(newPriceUnitSpan);
  allProducts.appendChild(newDiv);
  newDiv.setAttribute('class','product')

  createQuantityDiv(newDiv);
  createTotalValue(newDiv);
  createDeleteButton(newDiv);
}

function createNewItem(){
  var newProductName = document.getElementById('add-product-name');
  var newProductCost = document.getElementById('add-product-cost');
  createNewItemRow(newProductName,newProductCost);
}

function createQuantityDiv(row){
  var newQTYDiv = document.createElement('div')
  var newQTYSpan = document.createElement('span');
  var newQTYInput = document.createElement('input');
  var qtyText = document.createTextNode('QTY')
  newQTYSpan.appendChild(qtyText)
  newQTYInput.setAttribute('type','number');
  newQTYDiv.appendChild(newQTYSpan);
  newQTYDiv.appendChild(newQTYInput);
  row.appendChild(newQTYDiv)
}

function createTotalValue(row){
  var newTotalValue = document.createElement('span');
  var valueMath = document.createTextNode('$'+0)
  newTotalValue.appendChild(valueMath);
  row.appendChild(newTotalValue)
}

function createDeleteButton(row){
  var newDeleteButton = document.createElement('button');
  var buttonText = document.createTextNode('Delete');
  newDeleteButton.appendChild(buttonText);
  newDeleteButton.setAttribute('class','btn btn-delete');
  row.appendChild(newDeleteButton)
  deleteButtons.push(newDeleteButton)

}


for(var i = 0; i < deleteButtons.length ; i++){
  deleteButtons[i].onclick = function(e){
    var products = document.getElementsByClassName('product');
    e.currentTarget.parentNode.parentNode.removeChild(products[deleteButtons.indexOf(e.currentTarget)]);
    deleteButtons.splice(deleteButtons.indexOf(e.currentTarget),1);
    getTotalPrice();
}
}

calculatePriceButton.onclick = getTotalPrice;
createItemButton.onclick = createNewItem;
