
function deleteItem(e) {
  var item = e.currentTarget.parentNode.parentNode;
  var mainContainer = item.parentNode;
  mainContainer.removeChild(item);
}

function getPriceByProduct(index) {
  var amountForProduct = parseInt(document.getElementsByClassName('amountForProduct')[index].innerHTML, 10);
  var quan = parseInt(document.getElementsByClassName('quantity')[index].value, 10);
  var subtotal = amountForProduct * quan;
  return subtotal;
}

function addUpdatePricePerProductListener(num) {
  var priceCalculateForOne = document.querySelector('button.calc-prices-button');
  priceCalculateForOne.addEventListener('click', function change() {
    document.querySelectorAll('span.totalFortheOneTypeOfProducts')[num].innerHTML = (`$${getPriceByProduct(num)}.00`);
  });
}

function getTotalPrice() {
  var homManyProducts = document.querySelectorAll('div.product');
  for (var i = 0; i < homManyProducts.length; i++) {
    addUpdatePricePerProductListener(i);
  }
  var total = 0;
  var subtotalItems = document.querySelectorAll('span.totalFortheOneTypeOfProducts');
  for (var i = 0; i < subtotalItems.length; i++) {
    total += getPriceByProduct(i);
  }

  return document.getElementsByClassName('total')[0].innerHTML = (`${total}.00`) ;
}

function createNewItemRow() {
  var newDivProduct = document.createElement('div');
  var previousElem = document.getElementById('newItem');
  var parent = previousElem.parentNode;
  parent.insertBefore(newDivProduct, previousElem);
  newDivProduct.setAttribute('class', 'product');

  var valueInsi = document.getElementById('nameOfProduct').value;
  var price = parseInt(document.getElementById('priceOfProduct').value, 10);

  var newDivName = document.createElement('div');
  var newDivPrice = document.createElement('div');
  var newForm = document.createElement('div');
  var pricesum = document.createElement('div');
  var deleteB = document.createElement('div');


  newDivProduct.appendChild(newDivName);
  newDivProduct.appendChild(newDivPrice);
  newDivProduct.appendChild(newForm);
  newDivProduct.appendChild(pricesum);
  newDivProduct.appendChild(deleteB);

  newDivName.innerHTML = `<span class="productName">${valueInsi}</span>`;
  newDivPrice.innerHTML = `<span>$</span><span class="amountForProduct">${price}</span><span>.00</span>`;
  newForm.innerHTML = '<form><label>QTY<input type="text" class="quantity" value="0"></label></form>';
  pricesum.innerHTML = '<span class="totalFortheOneTypeOfProducts">$0.00</span>';
  deleteB.innerHTML = '<button class="btn btn-delete">Delete</button>';

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}


window.onload = function () {

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
