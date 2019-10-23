function deleteItem(e) {
  const parent = e.currentTarget.parentNode.parentNode;
  parent.removeChild(e.currentTarget.parentNode);
  getTotalPrice();
}

function getPriceByProduct(itemNode) {
  let totalProductPriceBox = itemNode.querySelector(".product-price-total");
  let totalProductPrice = 0;

  let currentPrice = itemNode
    .querySelector(".product-price-unit")
    .innerText.substr(1);
  let quantity = itemNode.querySelector("input").value || 0;

  totalProductPrice = Number(currentPrice) * quantity;
  totalProductPriceBox.innerText = `$${totalProductPrice.toFixed(2)}`;

  return totalProductPrice;
}

function updatePriceByProduct(productPrice, priceArray) {
  const totalPriceBox = document.querySelector(".product-total");

  priceArray.push(productPrice);
  let totalPrice = priceArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  totalPriceBox.innerText = `$${totalPrice.toFixed(2)}`;
}

function getTotalPrice() {
  const products = productsBlock.querySelectorAll(".product");
  let priceArray = [];
  [...products].forEach(product => {
    priceForProduct = getPriceByProduct(product);
    updatePriceByProduct(priceForProduct, priceArray);
  });
}

function createQuantityInput() {
  let newQuantityInput = document.createElement("input");
  newQuantityInput.classList.add("product-price-input");
  newQuantityInput.placeholder = "0";
  newQuantityInput.type = "number";

  return newQuantityInput;
}

function createDeleteButton() {
  const newDeleteButton = document.createElement("button");
  newDeleteButton.classList.add("btn", "btn-delete");
  newDeleteButton.innerText = "Delete";
  newDeleteButton.onclick = deleteItem;

  return newDeleteButton;
}

function createQuantityNode() {
  let newQuantityContainer = document.createElement("div");

  let newQuantityLabel = document.createElement("label");
  newQuantityLabel.classList.add("quantity");
  newQuantityLabel.innerText = "QTY";

  newQuantityContainer.appendChild(newQuantityLabel);
  newQuantityContainer.appendChild(createQuantityInput());

  return newQuantityContainer;
}

function createItemNode(dataType, itemData) {
  const newItemNode = document.createElement("span");
  newItemNode.classList.add(dataType);
  newItemNode.innerText = itemData;

  return newItemNode;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let newProduct = document.createElement("div");
  newProduct.classList.add("product", "product-wrapper");

  const newProductName = createItemNode("product-name", itemName);
  const newProductPrice = createItemNode("product-price-unit", itemUnitPrice);
  const newProductTotalPrice = createItemNode("product-price-total", "$0.00");

  newProduct.appendChild(newProductName);
  newProduct.appendChild(newProductPrice);
  newProduct.appendChild(createQuantityNode());
  newProduct.appendChild(newProductTotalPrice);
  newProduct.appendChild(createDeleteButton());

  return newProduct;
}

function createNewItem() {
  let nameInput = document.getElementById("product-add-name").value;
  let priceInput = document.getElementById("product-add-price").value;
  let priceInputValue = "$" + Number(priceInput).toFixed(2);

  if (nameInput.length > 0 && priceInput.length > 0) {
    productsBlock.prepend(createNewItemRow(nameInput, priceInputValue));
  }
}

const products = [
  {
    name: "IronBubble-head",
    price: "$25.00"
  },
  {
    name: "IronBubble-body",
    price: "$2.00"
  }
];

let productsBlock;

window.onload = function() {
  productsBlock = document.getElementById("products");

  for (let product of products) {
    let productItem = createNewItemRow(product.name, product.price);
    productsBlock.prepend(productItem);
  }

  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
