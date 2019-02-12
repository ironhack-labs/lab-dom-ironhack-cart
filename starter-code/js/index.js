/* ----- My Functions ----- */ 

function convertToArray (htmlCollection) {
  return [].slice.call(htmlCollection);
};

function convertToNumber (text) {
  return parseFloat(text.slice(1,6));
};

function wrapper(element) {
 return element.parentElement.parentElement;
};


/* ----- Exercise funtion's ----- */

function deleteItem(e){
  var product = wrapper(e.currentTarget);
  product.parentNode.removeChild(product);
  getTotalPrice();
};

function getPriceByProduct(itemNode){
  var product = wrapper(itemNode);
  var qty = itemNode.value
  var unitPrice = convertToNumber(product.querySelector('.unitCost').textContent);
  if (qty === 0) {
  } else if (qty >= 0) {
    product.querySelector('.totalCost').innerHTML = "$"+ (unitPrice * qty).toFixed(2);
  }
}

/*   Ya lo actualizo automáticamnte con la función anterior
function updatePriceByProduct(productPrice, index){
}
*/

function getTotalPrice() {
  var arrayPrice = convertToArray(document.getElementsByClassName('totalCost'));

  var subTotalArray = arrayPrice.map(function (subTotals) {
    return convertToNumber(subTotals.innerHTML)
  });

  var total = subTotalArray.reduce(function(acc, subTotal){
    return acc + subTotal;
  });

  document.getElementById('totalPrice').innerHTML = total.toFixed(2) + "$";
}


function createQuantityInput(){

}

function createDeleteButton(parent, firstChild){
  var btnTag = document.createElement('button').setAttribute('btn', 'btn-delete');
  var text = document.createTextNode('Delete');
  pTag.appendChild(text);
  parent.insertBefore(pTag, firstChild);

}

function createQuantityNode(){
  var divTag = document.createElement('div');
  var labelTag = document.createElement('label');
  var inputTag = document.createElement('input');

  var textLabel = document.createTextNode('QTY');
  pTag.appendChild(text);
  parent.insertBefore(pTag, firstChild);

}

function createItemNode(dataType, itemData){
  var tagElement = document.createElement(dataType);
  var nodeElement = document.createTextNode(itemData);
   tagElement.appendChild(nodeElement);
   return tagElement;
}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var newLine = wrapper();
  createDeleteButton(newLine, newLine.firstChild)
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
