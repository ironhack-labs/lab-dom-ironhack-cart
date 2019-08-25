function deleteItem(e) {
  let divToDelete = e.currentTarget.parentNode.parentNode;
  document.querySelector(".products").removeChild(divToDelete);
}

function getPriceByProduct(itemNode) {
  let unitCost = itemNode.querySelector(".unit-cost").innerHTML;
  let quantity = itemNode.querySelector(".quantity").value;
  return unitCost * quantity;
}

// function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let orderTotal = 0;
  document.querySelectorAll(".product").forEach(product => {
    let productTotal = getPriceByProduct(product);
    product.querySelector(".total-price").innerHTML = productTotal;
    orderTotal += productTotal;
  });
  document.querySelector(".order-total").innerHTML = orderTotal;
}

// function createQuantityInput() {}

// function createDeleteButton() {}

// function createQuantityNode() {}

// function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {
  return `<div class="product">
  <div><span class="product-name">${itemName}</span></div>
  <div><span class="unit-cost">${itemUnitPrice}</span></div>
  <div><label>QTY</label><input class="quantity" type="number" placeholder="0"/></div>
  <div><span class="total-price">0.00</span></div>
  <div><button class="btn btn-delete">Delete</button></div>
  </div>`
}

function createNewItem() {
  let itemName = document.querySelector(".new-item-name").value;
  let itemPrice = document.querySelector(".new-item-price").value;
  let itemRow = createNewItemRow(itemName, itemPrice);
  document.querySelector(".products").innerHTML += itemRow;
  addDeleteEvents();
}

function addDeleteEvents() {
  var deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  addDeleteEvents();
};
