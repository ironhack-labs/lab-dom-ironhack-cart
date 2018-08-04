console.log("js is there");

function deleteItem(e) {}

function getPriceByProduct(itemNode) {
  //get ID of product
  const productNumber = itemNode.path[2].classList[1].split("-").slice(-1)[0];
  console.log(itemNode.path[2].classList[1].split("-"));
  const numberInput = document.querySelector("#input-" + productNumber); //access input
  const itemPrice = document.querySelector("#product-price-" + productNumber); //access single item price
  const totalItemPrice = document.querySelector("#sum-" + productNumber); //access total item price

  totalItemPrice.innerHTML = numberInput.value * itemPrice.innerHTML;
  getTotalPrice();
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let allPrices = Array.from(document.querySelectorAll(".sum")).map(el =>
    parseInt(el.innerHTML)
  );
  console.log(allPrices);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  allPrices = allPrices.reduce(reducer, 0);
  var calculatePriceButton = document.getElementById("total-price-value");
  calculatePriceButton.innerHTML = allPrices.toFixed(2);
  console.log("Get total price was fired ", calculatePriceButton);
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  let newProductName = document.querySelector("#new-product-name");
  let newProductPrice = document.querySelector("#new-product-price");
  const shop = document.querySelector("#shop");

  let div = document.createElement("div");
  div.innerHTML = `<div class="product product-${3}">
      <div>
        <span>${newProductName.value}</span>
        <span>$</span>
        <span id='product-price-${3}'>${newProductPrice.value}</span>
      </div>
      <div>
        <label for="product">QUANTITY</label>
        <input id='input-${3}' type="number" name="product" class="quantity" />
      </div>
      <div>
        <span>$</span>
        <span class="sum" id='sum-${3}'>0</span>
      </div>
      <button class="btn-delete">DELETE PRODUCT</button>
    </div>`;

  shop.appendChild(div);
  updateFields();

  console.log(newProductName, newProductPrice);

  newProductName.value = "";
  newProductPrice.value = "";
}

function updateFields() {
  var allQuantityInputs = Array.from(document.querySelectorAll(".quantity"));
  allQuantityInputs.forEach(el => (el.onkeyup = getPriceByProduct));
}
window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  updateFields();
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  calculatePriceButton.onclick = getTotalPrice;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
