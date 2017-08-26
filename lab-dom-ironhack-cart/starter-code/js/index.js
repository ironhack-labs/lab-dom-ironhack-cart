function deleteItem(e){
  var container = document.getElementsById('body')[0];
  var dProduct = e.currentTarget.parentNode;
  container.removeChild(dProduct);
}


function getPriceByProduct(product) {
  var price = Number(product.children[1].children[0].innerHTML);
  var quantity = Number(product.children[2].children[1].value);
  var totalPrice = product.children[3].children[0];

  updatePriceByProduct('$' + price * quantity, totalPrice);
}


// var price = itemNode.querySelector("span.#product-price");
//   return parseInt(price.innerHTML);
// }


function updatePriceByProduct(productPrice, totalPrice) {
  totalPrice.innerHTML = productPrice;
}

function getTotalPrice() {
  var product = document.getElementsByClassName('product');
  for (var i = 0; i < product.length; i++) {
    getPriceByProduct(product[i]);
  }

  var productsPrices = document.getElementsByClassName('total-price');
  for (sumPrices = 0; i < productsPrices.length; i++) {
    sumPrices += Number(productsPrices[i].innerHTML);
  }
  var totalPrices = document.getElementById('final-price');
  totalPrices.innerHTML = '$' + sumPrices;
}

function createQuantityInput() {
  var inputQuantity = document.createElement('input');
  inputQuantity.className = 'input';
  inputQuantity.setAttribute('type', 'number');
  inputQuantity.setAttribute('min', '0');
  inputQuantity.setAttribute('value', '0');

  return inputQuantity;
}

function createDeleteButton() {
  var buttonBox = document.createElement('article');
  buttonBox.className = 'box';

  var deleteButton = document.createElement('button');
  deleteButton.classList.add('btn');
  deleteButton.classList.add('btn-delete');
  deleteButton.innerHTML = 'Delete';

  deleteButton.onclick = function(e) {
    deleteItem(e);
  };

  buttonBox.appendChild(deleteButton);

  return buttonBox;
}

function createQuantityNode() {
  var dQuantity = document.createElement('article');
    dQuantity.setAttribute('class', 'box box-quantity');
  var labelQuantity = document.createElement('label');
    labelQuantity.className = 'quantity';
    labelQuantity.setAttribute('for', 'input-quantity');
    labelQuantity.innerHTML = 'QTY';

  dQuantity.appendChild(labelQuantity);
  dQuantity.appendChild(createQuantityInput());

  return dQuantity;
}

function createItemNode(dataType, itemData) {
  var itemNode = document.createElement(dataType);
  if(itemData != undefined) itemNode.innerHTML = itemData;

  return itemNode;
}

function createNewItemRow(itemName, itemUnitPrice){

}


function createNewItem() {
  var dProductName = createItemNode('article');
  dProductName.className = 'box';

  var productName =  createItemNode('span', document.getElementById('product-name-input').value);

  dProductName.appendChild(productName);

  var dProductPrice = createItemNode('article');
  dProductPrice.className = 'box';

  var productPrice = createItemNode('span', '$' + document.getElementById('product-price-input').value);
  productPrice.className = 'price';

  dProductPrice.appendChild(productPrice);

  var dTotalProductPrice = createItemNode('article');
  dTotalProductPrice.className = 'box';

  var totalProductPrice = createItemNode('span', '$0.00');
  totalProductPrice.className = 'total-price';

  dTotalProductPrice.appendChild(totalProductPrice);

  var dProduct = createItemNode('article');
  dProduct.className = 'product';

  dProduct.appendChild(dProductName);
  dProduct.appendChild(dProductPrice);
  dProduct.appendChild(createQuantityNode());
  dProduct.appendChild(dTotalProductPrice);
  dProduct.appendChild(createDeleteButton());

  var dContainerProducts = document.getElementById('body');
  var productsList = document.getElementsByClassName('product');
  dContainerProducts.insertBefore(dProduct, productsList[productsList.length - 1].nextSibling);
}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = function (){
    getTotalPrice();
  };

  createItemButton.onclick = function () {
    createNewItem();
  };

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = function(e) {
      deleteItem(e);
    };
  };
};
