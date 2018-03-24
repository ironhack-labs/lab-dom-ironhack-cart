function deleteItem(e){
  var product = e.target.parentNode.parentNode;
  var productsContainer = product.parentNode;

  productsContainer.removeChild(product);

  // e.target.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  var price = itemNode.innerHTML.split("$")[1];
  return Number(price);
}

function updatePriceByProduct(productPrice, index){
  var totalDisplay = productPrice.querySelector(".totalSpan");
  var spanPrice = productPrice.querySelector(".unitPrice");
  var quantityInput = productPrice.querySelector(".quantity");

  var totalPrice = getPriceByProduct(spanPrice) * quantityInput.value;
  totalDisplay.innerHTML = "$" + totalPrice.toFixed(2);
}

function getTotalPrice() {
  var productList = document.querySelectorAll(".product");
  var totalPrice = 0;

  productList.forEach(function(oneProduct, index) {
    updatePriceByProduct(oneProduct, index);
    totalPrice += Number(oneProduct.querySelector('.totalSpan').innerHTML.split('$')[1]);
  })

  document.querySelector('h2 > span').innerHTML = "$" + totalPrice.toFixed(2);
}

function createQuantityInput(){
  var input = document.createElement("input");

  input.className = "quantity";
  return input;
}

function createDeleteButton(){
  var div = document.createElement("div");
  var button = document.createElement("button");

  button.innerHTML = "Delete";
  button.className = "btn btn-delete";
  button.onclick = deleteItem;

  div.appendChild(button);
  div.style.margin = "0 1px 0";
  return div;
}

function createQuantityNode(){
  var div = document.createElement("div");
  var label = document.createElement("label");
  var input = createQuantityInput();

  label.innerHTML = "QTY ";

  div.appendChild(label);
  div.appendChild(input);
  div.style.margin = "0 3px 0 1px";

  return div;
}

// function createItemNode(dataType, itemData){
  
// }

function createNewItemRow(itemName, itemUnitPrice){
  var product = document.createElement("div");
  
  var quantity = createQuantityNode();
  var deleteButton = createDeleteButton();
  var productNameDiv = document.createElement("div");
  var productNameSpan = document.createElement("span");
  var productPriceDiv = document.createElement("div");
  var productPriceSpan = document.createElement("span");
  var productTotalDiv = document.createElement("div");
  var productTotalSpan = document.createElement("span");

  productNameSpan.innerHTML = itemName;
  productNameDiv.appendChild(productNameSpan);
  productNameDiv.style.margin = "0 3px 0 1px";

  productPriceSpan.className = "unitPrice";
  productPriceSpan.innerHTML = " $" + Number(itemUnitPrice).toFixed(2);
  productPriceDiv.appendChild(productPriceSpan);
  productPriceDiv.style.margin = "0 3px 0 1px";

  productTotalSpan.className = "totalSpan";
  productTotalSpan.innerHTML = "$0.00";
  productTotalDiv.appendChild(productTotalSpan);
  productTotalDiv.style.margin = "0 3px 0 1px";

  product.className = "product";
  product.appendChild(productNameDiv);
  product.appendChild(productPriceDiv);
  product.appendChild(quantity);
  product.appendChild(productTotalDiv);
  product.appendChild(deleteButton);

  return product;  
}

function createNewItem(){
  var productName = document.querySelector(".newProductName").value;
  var productPrice = document.querySelector(".newProductPrice").value;
  var container = document.querySelector(".productContainer");
  var newItem = createNewItemRow(productName, productPrice);

  container.appendChild(newItem);
  document.querySelector(".newProductName").value = "";
  document.querySelector(".newProductPrice").value = "";
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
