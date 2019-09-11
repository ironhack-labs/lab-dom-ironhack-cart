
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

  return document.getElementsByClassName('total')[0].innerHTML = (`${total}.00`);
}

function createNewItemRow() {
  debugger
  //create new div product
  var newDivProduct = document.createElement('div');
  var previousElem = document.getElementById('newItem');
  var parent = previousElem.parentNode;
  parent.insertBefore(newDivProduct, previousElem);
  newDivProduct.setAttribute('class', 'product');

  //get a value from inputs
  var valueInsi = document.getElementById('nameOfProduct').value;
  var price = parseInt(document.getElementById('priceOfProduct').value, 10);

  //create a new element for name of product
  var newDivName = document.createElement('div');
  //newDivName.setAttribute('class','productName');

  //create a new element for price of product
  var newDivPrice = document.createElement('div');
  //newDivPrice.setAttribute('class','amountForProduct');

  //create a form
  var newForm = document.createElement('div');

  //create a totalPrice
  var pricesum = document.createElement('div');

  //create a delete-button
  var deleteB = document.createElement('div');

  //add for DOM
  newDivProduct.appendChild(newDivName);
  newDivProduct.appendChild(newDivPrice);
  newDivProduct.appendChild(newForm);
  newDivProduct.appendChild(pricesum);
  newDivProduct.appendChild(deleteB);

  //Add information inside the divs
  var newProductName = newDivName.innerHTML = `<span class="productName">${valueInsi}</span>`;
  var newPrice = newDivPrice.innerHTML = `<span>$</span><span class="amountForProduct">${price}</span><span>.00</span>`;
  var formInput = newForm.innerHTML = '<form><label>QTY<input type="text" class="quantity" value="0"></label></form>';
  pricesum.innerHTML = '<span class="totalFortheOneTypeOfProducts">$0.00</span>';
  deleteB.innerHTML = '<button class="btn btn-delete">Delete</button>';

}


window.onload = function () {

  //addUpdatePricePerProductListener(0);
  //addUpdatePricePerProductListener(1);
  //addUpdatePricePerProductListener(2);
  //addUpdatePricePerProductListener(3);

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;

  debugger
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
