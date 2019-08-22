function deleteItem(e){
  e.target.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  let price = itemNode.querySelector("div:nth-child(2) > span").innerHTML;

  return Number(price);
}

function updatePriceByProduct(productNode){

  let price = getPriceByProduct(productNode);

  let qty = Number(productNode.querySelector("div:nth-child(3) > input").value);

  const totalCost = isNaN(price * qty) ? 0 : price * qty;

  productNode.querySelector("div:nth-child(4) > span").innerHTML = String(totalCost);

  return totalCost;
}

function getTotalPrice() {
  let products = document.getElementsByClassName("product");
  let sum = 0;

  // [].forEach.call(products, (product) => updatePriceByProduct(product));

  sum = [].reduce.call(products, (sum, product) => {
    return sum += updatePriceByProduct(product)} ,0)

  document.querySelector("#total").innerHTML = sum.toFixed(2);
}

function createQuantityInput(){
  let quantityInput = document.createElement("div");

  quantityInput.innerHTML = `<label for="qty" class="quantity">QTY</label>
  <input id="qty" type="number" class="input">`;

  return quantityInput;
}

function createDeleteButton(){
  let deleteButton = document.createElement("div");

  deleteButton.innerHTML = '<button type="button" class="btn btn-delete">Delete</button>';

  deleteButton.onclick = deleteItem;

  return deleteButton;
}

function createQuantityNode(){
  let quantity = document.createElement("div");

  quantity.innerHTML = `$<span>0.00</span>`;

  return quantity;
}

function createItemNode(dataType, itemData){
  let itemNode = document.createElement(dataType);
  let textNode = document.createTextNode(itemData);

  itemNode.appendChild(textNode);

  return itemNode;
}

function createNewItemRow(itemName, itemUnitPrice){
  let newRow = document.createElement("div");

  let nameSpan = document.createElement("div");
  nameSpan.appendChild(createItemNode("span", itemName));

  let priceSpan = document.createElement("div");
  priceSpan.appendChild(document.createTextNode("$"));
  priceSpan.appendChild(createItemNode("span", itemUnitPrice));

  newRow.setAttribute("class", "product");

  newRow.appendChild(nameSpan);
  newRow.appendChild(priceSpan);
  newRow.appendChild(createQuantityInput());
  newRow.appendChild(createQuantityNode());
  newRow.appendChild(createDeleteButton());

  return newRow;
}

function createNewItem(itemName = false, itemUnitPrice = false){
  let parentNode = document.querySelector("body");
  let createNode = document.querySelector(".create");

  if(itemName && itemUnitPrice){
    parentNode.insertBefore(createNewItemRow(itemName, itemUnitPrice), createNode);
  }

  else{
    let newProductName = document.querySelector("#new-product").value;
    let newProductPrice = document.querySelector("#new-cost").value;

    parentNode.insertBefore(createNewItemRow(newProductName, newProductPrice), createNode);
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  createNewItem("IronBubble-head", "25.00");
  createNewItem("IronShirt", "15.00");
  createNewItem("IronCup", "10.00");
  createNewItem("IronSticker", "1.00");
  createNewItem("IronAxe", "100.00");



  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }

};
