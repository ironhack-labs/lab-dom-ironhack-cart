function deleteItem(e) {
  let parent = document.body; 
  let child = e.currentTarget.parentNode.parentNode;
  parent.removeChild(child);
}

function getPriceByProduct(itemNode) {
  let price = itemNode.querySelector('.cost-unit').innerHTML;
  price = parseFloat(price.replace(/\$/g, "")).toFixed(2);
  return price;
}

function updatePriceByProduct(productPrice, index) {
  let qty = document.getElementsByClassName("product-qty")[index].value;
  let total = document.getElementsByClassName("cost-total")[index];
  total.innerHTML = "$" + parseFloat(productPrice*qty).toFixed(2);
  return parseFloat(productPrice*qty);
}

function getTotalPrice() {
  let product = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < product.length; i++){
    let productPrice = getPriceByProduct(product[i]);
    updatePriceByProduct(productPrice, i);
    let tmp = (product[i].querySelector('.cost-total').innerHTML).replace(/\$/g, "");
    totalPrice += parseFloat(tmp);
  }
  document.getElementById('value-total-price').innerHTML = totalPrice.toFixed(2);
}

function createQuantityInput() {
  let labelQty = document.createElement('label');
  labelQty.htmlFor = 'product-qty';
  labelQty.innerHTML = 'QTY ';
  let inputQty = document.createElement('input');
  inputQty.value = '0';
  inputQty.className = 'product-qty';
  let divQty = document.createElement('div');
  divQty.appendChild(labelQty);
  divQty.appendChild(inputQty);
  return divQty;
}

function createDeleteButton() {
  let deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-delete';
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = deleteItem;
  let divDeleteButton = document.createElement('div');
  divDeleteButton.className = 'product-btn-delete';
  divDeleteButton.appendChild(deleteButton);
  return divDeleteButton;
}

function createQuantityNode() {
  let costTotal = document.createElement('span');
  costTotal.className = 'cost-total';
  costTotal.innerHTML = '$0.00';
  let divCostTotal = document.createElement('div');
  divCostTotal.className = 'product-cost-total';
  divCostTotal.appendChild(costTotal);
  return divCostTotal;
}

function createItemNode() {
  let itemName = document.querySelector('#new-product-name').value;
  let itemCost = document.querySelector('#new-product-price').value;
  let newItem = createNewItemRow(itemName, itemCost);
  let qty = createQuantityInput();
  let itemTotal = createQuantityNode();
  let deleteButton = createDeleteButton();
  let divProduct = document.createElement('div');
  divProduct.className = 'product';
  divProduct.appendChild(newItem[0]);
  divProduct.appendChild(newItem[1]);
  divProduct.appendChild(qty);
  divProduct.appendChild(itemTotal);
  divProduct.appendChild(deleteButton);
  return divProduct;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let productName = document.createElement('span');
  productName.className = 'name';
  productName.innerHTML = itemName;
  let divProductName = document.createElement('div');
  divProductName.className = 'product-name';
  divProductName.appendChild(productName);
  let productCost = document.createElement('span');
  productCost.className = 'cost-unit';
  productCost.innerHTML = '$' + parseFloat(itemUnitPrice).toFixed(2);
  let divProductCost = document.createElement('div');
  divProductCost.className = 'product-cost-unit';
  divProductCost.appendChild(productCost);
  return [divProductName,divProductCost];
}

function createNewItem() {
 let lastNode = document.getElementById('new-product');
 let newProduct = createItemNode();
  document.body.insertBefore(newProduct, lastNode);
  document.querySelector('#new-product-name').value = '';
  document.querySelector('#new-product-price').value = '';
}

window.onload = function() {
  let calculatePriceButton = document.getElementById("calc-prices-button");
  let createItemButton = document.getElementById("new-item-create");
  let deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};


