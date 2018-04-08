
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('btn-create');
var deleteButtons = document.getElementsByClassName('btn-delete');

var deleteButtonsArray = [];
for(i = 0;  i < deleteButtons.length ; i++){
  deleteButtonsArray.push(deleteButtons[i]);
}

var products = document.getElementsByClassName('product');
var allProducts = document.getElementById('all-products');
var totalPrice = document.getElementById('total-price');
var priceUnit = document.getElementsByClassName('price-unit')
var qty = document.getElementsByTagName('input')
var totalValues = document.getElementsByClassName('total-value')

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  totalPrice.innerHTML = 0;

  for(var i = 0; i < products.length; i++){
    totalValues[i].innerHTML = priceUnit[i].innerHTML * qty[i].value;
    totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + parseInt(totalValues[i].innerHTML) 
    }
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
  var newNameDiv = document.createElement('div');
  var newPriceUnitDiv = document.createElement('div');
  var newNameSpan = document.createElement('span');
  var newPriceUnitSpan = document.createElement('span');
  var newTotalValueSpan = document.createElement('span');
  var new$pan = document.createElement('span');
  var new$ = document.createTextNode('$')
  var newProductNameInput = document.createTextNode(itemName.value);
  var newPriceUnitInput = document.createTextNode(itemUnitPrice.value);
  
  new$pan.appendChild(new$)
  newNameSpan.appendChild(newProductNameInput);
  newPriceUnitSpan.appendChild(newPriceUnitInput);
  newNameDiv.appendChild(newNameSpan);
  newPriceUnitDiv.appendChild(new$pan)
  newPriceUnitDiv.appendChild(newPriceUnitSpan);
  newDiv.appendChild(newNameDiv);
  newDiv.appendChild(newPriceUnitDiv);
  allProducts.appendChild(newDiv);
  newDiv.setAttribute('class','product');
  newPriceUnitSpan.setAttribute('class','price-unit');

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
  newQTYInput.setAttribute('class','qty')
  row.appendChild(newQTYDiv)
}

function createTotalValue(row){
  var newTotalValueDiv = document.createElement('div')
  var new$pan = document.createElement('span');
  var newTotalValue = document.createElement('span');
  var new$ = document.createTextNode('$')
  var valueMath = document.createTextNode(0);

  new$pan.appendChild(new$)
  newTotalValue.appendChild(new$)
  newTotalValue.appendChild(valueMath);
  newTotalValue.setAttribute('class','total-value')
  newTotalValueDiv.appendChild(newTotalValue)
  row.appendChild(newTotalValueDiv)
}

function createDeleteButton(row){
  var newDeleteButton = document.createElement('button');
  var buttonText = document.createTextNode('Delete');
  newDeleteButton.appendChild(buttonText);
  newDeleteButton.setAttribute('class','btn-delete btn');
  row.appendChild(newDeleteButton);
  for(i = deleteButtonsArray.length;  i < deleteButtons.length ; i++){
    deleteButtonsArray.push(deleteButtons[i]);
  }
}

function deleteItem(e){
  var products = document.getElementsByClassName('product');
  e.currentTarget.parentNode.parentNode.removeChild(products[deleteButtonsArray.indexOf(e.currentTarget)]);
  deleteButtonsArray.splice(products[deleteButtonsArray.indexOf(e.currentTarget)],1);

  getTotalPrice();
}


for(var i = 0; i < deleteButtonsArray.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}
calculatePriceButton.onclick = getTotalPrice;
createItemButton.onclick = createNewItem;


