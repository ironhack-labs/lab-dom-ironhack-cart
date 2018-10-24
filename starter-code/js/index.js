let productDiv = document.getElementById('newProduct');
var createItemButton = document.getElementById('new-item-create');

function refreshDeleteButtons() {
  var deleteButtons = document.getElementsByClassName('btn-delete');

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

function getTotalPrice() {
  let productTotalsArr = [...document.getElementsByClassName('total')]

  let total = document.getElementById('total');

  let qtyArr = [...document.getElementsByClassName('qty')]
    .map(input => input.value);

  let pricesArr = [...document.getElementsByClassName('price')]
    .map(price => price.textContent)
    .map(price => price.trim());

  let finalPrices = [];

  for (let i = 0; i < pricesArr.length; i++) {
    finalPrices.push(pricesArr[i] * qtyArr[i]);
  }
  for (let i = 0; i < finalPrices.length; i++) {
    productTotalsArr[i].innerHTML = finalPrices[i].toFixed(2);
  }
  
  let totalPrice = finalPrices.reduce((sum, price) => sum + Number(price), 0);

  total.innerHTML = totalPrice.toFixed(2);
}

function createNewItem() {
  let productDiv = document.getElementById('newProduct');
  
  productDiv.classList.remove('hide');
  this.classList.add('hide');

}

function deleteItem(e) {
  var e = e || window.event;
  let container = document.getElementById('products');
  container.removeChild(e.target.parentNode);
  getTotalPrice();
}

function submitItem() {
  var container = document.getElementById('products');
  var productRow = document.createElement("div");
  var newProdName = document.getElementById('productName').value;
  var newProdPrice = Number(document.getElementById('productPrice').value).toFixed(2);

  productRow.classList.add('row', 'product');

  productRow.innerHTML =
    '<div class="productName">' +
    '<span>' + newProdName + '</span>' +
    '</div>' +
    '<div class="productPrice">' +
    '<span>$ </span>' +
    '<span class="price">' + newProdPrice + '</span>' +
    '</div>' +
    '<div class="quantity">' +
    '<form action="">' +
    '<label for="quantity">QTY</label>' +
    '<input type="text" name="quantity" placeholder="0" class="qty">' +
    '</form>' +
    '</div>' +
    '<div class="prodTotal">' +
    '<span>$ </span>' +
    '<span class="total">0.00</span>' +
    '</div>' +
    '<button class="btn btn-delete">Delete</button>';

  container.appendChild(productRow);

  refreshDeleteButtons();
  
  productDiv.classList.add('hide');
  createItemButton.classList.remove('hide');
}

function cancelSubmit(){
    createItemButton.classList.remove('hide');
  productDiv.classList.add('hide');
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var submitItemButton = document.getElementById('submit');
  var cancelButton = document.getElementById('cancel');

  refreshDeleteButtons();

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  submitItemButton.onclick = submitItem;
  cancelButton.onclick = cancelSubmit;
};
