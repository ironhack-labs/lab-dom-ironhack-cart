// Settings for the functions
var masterContainer = document.getElementById("master-container-div");
var containers = document.querySelectorAll(".div-container");
var productName = document.querySelectorAll(".product-name");
var productPrice = Number(
  document.querySelectorAll(".product-price").textContent
);
var quantity = document.querySelectorAll(".quantity");
var totalPrice = document.querySelectorAll(".total-price");
var newProductName = document.querySelector(".new-product").textContent;
var newProductPrice = Number(document.querySelector(".new-product-price"));
var createNewItem = document.querySelector("#new-item-create");

function wrapper() {
  // var masterContainer = document.getElementById("master-container-div");
  deleteItem(masterContainer);
  getPriceByProduct(masterContainer);
  getTotalPrice(masterContainer);
  createItem(masterContainer);
}

createNewItem.addEventListener("click", wrapper);

// delete Item from the button
// newItem
function createItem(masterContainer) {
  var newItem = document.createElement("div");
  newItem.className = "div-container";
  masterContainer.append(newItem);
  var newProductName = document.querySelector(".new-product").value;
  console.log(newProductName);
  var newProductPrice = document.querySelector(".new-product-price").value;
  newItem.innerHTML += `<div>
      <span class="product-name">${newProductName}</span>
    </div>
    <div>$<span class="product-price">${newProductPrice}</span></div>
    <div>
      <label for="quantity" class="qty">QTY</label>
      <input
        type="number"
        name="quantity"
        min="0"
        value="0"
        class="quantity"
      />
    </div>
    <div><span class="total-price">$0</span></div>
    <div><button class="btn btn-delete">Delete</button></div>`;
  getPriceByProduct();
  getTotalPrice();
  deleteItem();
}
// delete Item from the button
function deleteItem() {
  containers.forEach(function(container) {
    var deleteButtons = container.querySelector(".btn-delete");
    deleteButtons.addEventListener("click", function() {
      container.remove(container);
    });
  });
}
// call the function
deleteItem();

// print the price for each item
function getPriceByProduct() {
  containers.forEach(function(container) {
    var productPrice = container.querySelector(".product-price").textContent;
    var quantity = container.querySelector(".quantity").value;
    var total = Number(productPrice) * Number(quantity);
    container.querySelector(".total-price").innerHTML = `$${total}`;
  });
}
getPriceByProduct();

// print the total price
function getTotalPrice() {
  getPriceByProduct();
  var totalByProduct = 0;
  containers.forEach(function(container) {
    var productPrice = container.querySelector(".product-price").textContent;
    var quantity = container.querySelector(".quantity").value;
    var total = Number(productPrice) * Number(quantity);
    totalByProduct += total;
    document.querySelector(".total").innerHTML = `$ ${Number(totalByProduct)}`;
  });
}
getTotalPrice();

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.querySelector("#new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
window.onload();
