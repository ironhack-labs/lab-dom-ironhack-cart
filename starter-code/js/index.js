function deleteItem(e){
  //var parent = document.getElementsByClassName('product');
  //e.currentTarget.parentNode.parentNode.remove(parent);
  e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  return itemNode.getElementsByClassName("prod-cost")[0].innerHTML.replace('$','') || 0;
}

function getQuantityByProduct(itemNode){
  return itemNode.getElementsByClassName("number")[0].value || 0;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  var totalProducts = 0;
  for(var i = 0; i < products.length; i++){
    var price = getPriceByProduct(products[i]);
    var quantity = getQuantityByProduct(products[i]);
    var total = price * quantity;
    products[i].getElementsByClassName("result")[0].innerHTML = '';
    products[i].getElementsByClassName("result")[0].appendChild(document.createTextNode('$'+total));

    totalProducts += total;
  }

  document.getElementById("total-price").innerText = '$'+totalProducts;
}

function createNameInput(name) {
  var prodCell = document.createElement('div');
  prodCell.classList.add('product_element');
  var name = document.createTextNode(name);
  var prodContainer = document.createElement('span');
  prodContainer.classList.add('prod-name');
  prodContainer.appendChild(name);

  prodCell.appendChild(prodContainer);
  return prodCell;
}

function createPriceInput(price) {
  var pricCell = document.createElement('div');
  pricCell.classList.add('product_element');
  var price = document.createTextNode("$" + price.toFixed(2));
  var pricContainer = document.createElement('span');
  pricContainer.classList.add('prod-cost');
  pricContainer.appendChild(price);

  pricCell.appendChild(pricContainer);
  return pricCell;
}

function createQuantityCell(){
  var quantityCell = document.createElement('div');
  quantityCell.classList.add('product_element');
  quantityCell.classList.add('quantity');

  var label = document.createElement('label');
  label.appendChild(document.createTextNode("QYT"));

  quantityCell.appendChild(label);
  quantityCell.appendChild(createQuantityInput());
  return quantityCell;
}

function createQuantityInput() {
  var quantityInput = document.createElement('input');
  quantityInput.classList.add('number');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('name', 'quantity');
  quantityInput.setAttribute('min', '0');
  quantityInput.setAttribute('value', '0');
  return quantityInput;
}

function createTotalCell() {
   var totalCell = document.createElement('div');
   totalCell.classList.add('product_element');

  var priceContainer = document.createElement('span');
  priceContainer.classList.add('result');
  priceContainer.appendChild(document.createTextNode("0"));

  totalCell.appendChild(priceContainer);
  return totalCell;
}

function createDeleteButton(){
  var buttonCell = document.createElement('div');
  buttonCell.classList.add('product_element');
  var deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', '.btn btn-delete');
  deleteBtn.appendChild(document.createTextNode('Delete'));
  deleteBtn.onclick = deleteItem;

  buttonCell.appendChild(deleteBtn);
  return buttonCell;
}

function createClearFix(){
  var clearFix = document.createElement('div');
  clearFix.classList.add('clearfix');
  return clearFix;
}

function createNewItemRow(itemName, itemUnitPrice){

    product = document.createElement('div');
    product.classList.add('product');

    product.appendChild(createNameInput(name));
    product.appendChild(createPriceInput(price));
    product.appendChild(createQuantityCell());
    product.appendChild(createTotalCell());
    product.appendChild(createDeleteButton());
    product.appendChild(createClearFix());

    productList = document.getElementById('products');
    productList.appendChild(product);

}

function createNewItem(){
    name = document.querySelector(".add-new-product input[name='name']").value;
    price = parseFloat(document.querySelector(".add-new-product input[name='price']").value);
    if (name && price >= 0){
      createNewItemRow(name, price);
    }
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
