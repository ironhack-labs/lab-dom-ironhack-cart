function deleteItem(e){
  var productToDelete = e.currentTarget.parentNode.parentNode;
  var parentOfProduct = productToDelete.parentNode;
  parentOfProduct.removeChild(productToDelete);
}

function getPriceByProduct(itemNode){
  /* console.log(itemNode);
    var productPrice = Number(itemNode.innerText);
    console.log(productPrice);
    var quantity = document.querySelectorAll('.quantity')[i].valueAsNumber;
    var totalField = document.querySelectorAll('.total-value')[i];
    var total = productPrice * quantity; 


  return total; */
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var numOfProducts = document.querySelectorAll('.product-list-item');
  var totalCartValue = 0;
  for (var i = 0; i < numOfProducts.length; i++) {
    var productPrice = Number(document.querySelectorAll('.value')[i].innerText);
    var quantity = document.querySelectorAll('.quantity')[i].valueAsNumber;
    var totalField = document.querySelectorAll('.total-value')[i];
    var total = productPrice * quantity;
    totalField.innerText = total;
    totalCartValue += total;
  }
  var totalValue = document.querySelector('.total-sum');
  totalValue.innerText = "$" + totalCartValue;
}

function createQuantityInput(){
  var inputField = document.createElement('input');
  inputField.setAttribute("type", "text");
  inputField.setAttribute("value", "0");
  return inputField;
}

function createDeleteButton(){
  var deleteButton = document.createElement('button');
  var deleteBtnText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteBtnText);
  deleteButton.classList.add('btn', 'btn-delete');
  return deleteButton;
}

function createQuantityNode(){
  var quantityContainer = document.createElement('div');
  var inputQuantity = createQuantityInput();
  var quantityText = document.createTextNode('QTY');
  quantityContainer.appendChild(quantityText);
  quantityContainer.appendChild(inputQuantity);
  return quantityContainer;
}

function createItemNode(dataType, itemName, itemUnitPrice){
  var itemWrapper = document.createElement('div');
  itemWrapper.classList.add('product-list-item');

  var itemNP = createNewItemRow(itemName, itemUnitPrice);
  console.log(itemNP);
  //itemWrapper.appendChild(itemNP);

  var quantityNode = createQuantityNode();
  itemWrapper.appendChild(quantityNode);

  var totalValueDiv = document.createElement('div');
  var totalValueSpan = document.createElement('span');
  var totalValueSpanValue = document.createTextNode('$0');
  totalValueSpan.appendChild(totalValueSpanValue);
  totalValueDiv.appendChild(totalValueSpan);
  itemWrapper.appendChild(totalValueDiv);

  var deleteNode = createDeleteButton();
  itemWrapper.appendChild(deleteNode);

  return itemWrapper;
}

function createNewItemRow(itemName, itemUnitPrice){
  var productNameContainer = document.createElement('div');
  var spanName = document.createElement('span');
  var productName = document.createTextNode(itemName);
  spanName.appendChild(productName);
  productNameContainer.appendChild(spanName);

  var productPriceContainer = document.createElement('div');
  var spanPrice = document.createElement('span');
  var productPrice = document.createTextNode("$" + itemUnitPrice);
  spanPrice.appendChild(productPrice);
  productPriceContainer.appendChild(spanPrice);

  return [productNameContainer, productPriceContainer];
}

function createNewItem(){
  var data = document.querySelectorAll('.create-input');
  var productList = document.querySelector('.wrapper-list');
  var newNode = createItemNode(undefined, data[0].value, data[1].value);
  productList.appendChild(newNode);
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
