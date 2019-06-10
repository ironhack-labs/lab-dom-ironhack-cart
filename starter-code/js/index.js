function deleteItem(e){
  const productList = document.getElementById("product-list");
  productList.removeChild(e.currentTarget.parentNode.parentNode.parentNode);
}

function getPriceByProduct(itemNode){
  const units = itemNode.querySelector(".quantity input").value;
  const costString = itemNode.querySelector(".cost span").innerHTML;
  const cost = Number(costString.replace(/[^0-9.-]+/g,""));
  return units*cost;
}

function updatePriceByProduct(productPrice, index){
  const product = document.querySelectorAll(".product-wrapper")[index];
  const priceElem = product.querySelector(".price span");
  priceElem.innerHTML = `$${productPrice.toFixed(2)}`;
}

function getTotalPrice() {
  const products = [...document.querySelectorAll(".product-wrapper")];
  var totalPrice = 0;
  for (var i=0; i<products.length - 1; i++){
    var price = getPriceByProduct(products[i]);
    updatePriceByProduct(price, i);
    totalPrice += price;
  }
  const totalHeading = document.getElementById("total-price");
  //const total = products.reduce((accumulator, productNode) => accumulator + getPriceByProduct(productNode), 0);
  totalHeading.innerText = `$${totalPrice.toFixed(2)}`;
}

function createQuantityInput(){
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.classList.add("quantity");
  input.value = 0;
  return input;
}

function createDeleteButton(){
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("btn");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.onclick = deleteItem;
  return deleteBtn;
}

function createQuantityNode(){
  const qtyDiv = document.createElement("div");
  const label = document.createElement("label");
  label.innerText = "QTY";
  qtyDiv.appendChild(label);
  qtyDiv.appendChild(createQuantityInput());
  qtyDiv.classList.add("quantity");
  return qtyDiv;
}

function createItemNode(dataType, itemData){
  const item = document.createElement("div");
  item.classList.add(dataType);
  item.innerHTML = `<span>${itemData}</span>`
  return item;
}

function createNewItemRow(itemName, itemUnitPrice){
  const listItem = document.createElement("li");
  const productDiv = document.createElement("div");
  productDiv.classList.add("product-wrapper");
  productDiv.appendChild(createItemNode("name", itemName));
  productDiv.appendChild(createItemNode("cost", itemUnitPrice));
  productDiv.appendChild(createQuantityNode());
  productDiv.appendChild(createItemNode("price", "$0.00"));
  const deleteDiv = createItemNode("delete", "");
  deleteDiv.appendChild(createDeleteButton());
  productDiv.appendChild(deleteDiv);
  listItem.appendChild(productDiv);
  let productList = document.getElementById("product-list");
  productList.appendChild(listItem);
}

function createNewItem(){
  const nameElem = document.getElementById("new-product-name");
  const priceElem = document.getElementById("new-product-unit-price");
  createNewItemRow(nameElem.value, "$" + parseFloat(priceElem.value).toFixed(2));
  nameElem.value = "";
  priceElem.value = "";
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
