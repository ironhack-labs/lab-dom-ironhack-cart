function deleteItem(e) {
  const selectedItem = e.currentTarget.parentNode.parentNode;
  const parent = selectedItem.parentNode;
  parent.removeChild(selectedItem);
  getTotalPrice();
}

function getPriceByProduct(itemNode) {
  let price = itemNode.querySelector(".product-cost").innerText;
  price = Number(price.substring(1));
  const quantity = itemNode.querySelector(".quantity").value;
  const calculatedPrice = quantity * price;
  const totalPrice = itemNode.querySelector('.total');
  totalPrice.innerText = `$${calculatedPrice}`;
  return calculatedPrice;
}


function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;
  products.forEach(product => {
    const currentPrice = getPriceByProduct(product);
    totalPrice += currentPrice;
  });
  console.log(totalPrice);
  totalPrice = totalPrice.toFixed(2);
  const totalCart = document.getElementById('total-cart');
  totalCart.innerText = `$${totalPrice}`;
  return totalPrice;
}

function createQuantityInput() {
  let newQuantityInput = document.createElement('div');
  newQuantityInput.classList.add('quantity-container');
  let newLabel = document.createElement('label');
  newLabel.innerText = 'QTY';
  let newInput = document.createElement('input');
  newInput.classList.add('quantity');
  newInput.type = 'number';
  newInput.placeholder = '0';
  newQuantityInput.appendChild(newLabel).appendChild(newInput);
  return newQuantityInput;
}

function createDeleteButton() {
  const newDeleteButton = document.createElement('div');
  const buttonToAdd = document.createElement('button');
  buttonToAdd.classList.add('btn', 'btn-delete');
  buttonToAdd.innerText = "Delete";
  buttonToAdd.onclick = deleteItem;
  newDeleteButton.appendChild(buttonToAdd);

  return newDeleteButton;
}

function createQuantityNode() {
  const newQuantityNode = document.createElement('div');
  const newQuantitySpan = document.createElement('span');
  newQuantitySpan.classList.add('total');
  newQuantitySpan.innerText = '$0.00';
  newQuantityNode.appendChild(newQuantitySpan);
  return newQuantityNode;
}

function createItemNode(dataType, itemData) {


}

function createNewItemRow(itemName, itemUnitPrice) {
  let productsList = document.querySelector('#products');
  let newProduct = document.createElement('div');
  newProduct.classList.add('wrapper', 'product');

  const newProductName = document.createElement('div');
  const newProductNameSpan = document.createElement('span');
  newProductName.appendChild(newProductNameSpan);
  newProduct.appendChild(newProductName);
  newProductNameSpan.innerText = itemName;

  const newProductPrice = document.createElement('div');
  const newProductPriceSpan = document.createElement('span');
  newProductPriceSpan.classList.add('product-cost');
  newProductPrice.appendChild(newProductPriceSpan);
  newProduct.appendChild(newProductPrice);
  const itemPriceFixed = parseFloat(itemUnitPrice).toFixed(2);
  newProductPriceSpan.innerText = "$" + itemPriceFixed;

  newProduct.appendChild(createQuantityInput());
  newProduct.appendChild(createQuantityNode());
  newProduct.appendChild(createDeleteButton());

  productsList.appendChild(newProduct);

}

function createNewItem() {
  const itemName = document.getElementById('item-name').value;
  const itemPrice = document.getElementById('unit-price').value;
  createNewItemRow(itemName, itemPrice);
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};