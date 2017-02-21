var getProduct = document.getElementsByClassName('productName');
var getUnitPrice = document.getElementsByClassName('productCost');
var getUnitQty = document.getElementsByClassName('qty');
var getTotalProductPrice = document.getElementsByClassName('totalProductPrice');
var deleteButtons = document.getElementsByClassName('btn-delete');

for(i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function (e) {
      e.currentTarget.parentNode.parentNode.style.display= "none";
    });

  }


function getPriceByProduct(itemNode){
}

function updatePriceByProduct(productPrice, index){

}
function addTotalProductPrice(a, b) {
  return a + b;
}

function getTotalPrice() {
  var priceArray = [];
  for(i = 0; i < getProduct.length; i++) {
    var productPriceValue = parseInt(getTotalProductPrice[i].innerHTML);
    priceArray.push(productPriceValue);
  }
  document.getElementById('spanTotal').innerHTML = priceArray.reduce(addTotalProductPrice, 0);
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

var getValueofProductName = document.getElementById('productNameValue').value;
var getValueofProductCost = document.getElementById('productCostValue').value;

var getCreateBtn = document.getElementById('createBtn');
var getCreateDiv = document.getElementById('create');

function createNewItemRow(itemName, itemUnitPrice) {

}


getCreateBtn.addEventListener('click', function (e) {
  var newProductRow = document.createElement('div');
  newProductRow.setAttribute('class','row');
  var text = document.createTextNode('hi');
  newProductRow.appendChild(text);
  document.getElementsByClassName('container')[0].insertBefore(newProductRow, getCreateDiv.parentNode);
});

function calculatePrices() {
  for( i = 0; i < getProduct.length; i++ ) {
    var totalPrice = Number(getUnitPrice[i].innerHTML.replace(/[^0-9\.]+/g,"")) * getUnitQty[i].value;
    document.getElementsByClassName('totalProductPrice')[i].innerHTML = totalPrice;
  }
  getTotalPrice();
}
