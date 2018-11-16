function deleteItem(e) {}
function getPriceByProduct(itemNode) {}
function updatePriceByProduct(productPrice, index) {}
function getTotalPrice() {}
function createQuantityInput() {}
function createDeleteButton() {}
function createQuantityNode() {}
function createItemNode(dataType, itemData) {}
function createNewItemRow(itemName, itemUnitPrice) {}
function createNewItem() {}

// cart data
var productList = [
  { name: '- select -', price: 0 },
  { name: 'shoes', price: 35 },
  { name: 'shirt', price: 21 },
  { name: 'hat', price: 33 },
  { name: 'gloves', price: 8 }
];

// product control elements
var txtProductPrice = document.getElementById('txtProductPrice');
var txtproductQty = document.getElementById('txtproductQty');
var lblTotal = document.getElementById('lblTotal');
var btnAddCart = document.getElementById('btnAddCart');

// populate select box
function loadSelectBox() {
  let selElement = document.getElementById('selProductName');
  for (let item of productList) {
    selElement.options[selElement.options.length] = new Option(item.name);
  }
}

function selectBoxChange() {
  var selectElement = document.getElementById('selProductName').value;
  var prodQty = document.getElementById('txtproductQty');
  prodQty.value = '';
  var priceLabel = document.getElementById('txtProductPrice');
  var [{ price: thePrice }] = productList.filter(element => element.name === selectElement);
  priceLabel.innerHTML = thePrice;
}

function txtProductQtyCalc() {
  let productQuantity = +document.getElementById('txtproductQty').value;
  let priceAmount = +document.getElementById('txtProductPrice').innerHTML;
  let total = 0;
  if (productQuantity && priceAmount) {
    total = priceAmount * productQuantity;
  } else {
    console.log('invalid data selected');
  }
  console.log(total);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var prodQty = document.getElementById('txtproductQty');
  prodQty.value = '';

  // load select box
  loadSelectBox();

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
