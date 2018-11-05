// Iteration 4: Deleting a product
function deleteItem(e){
  var button = e.currentTarget 
  var buttonContainer = e.currentTarget.parentNode
  var product = buttonContainer.parentNode
  var body = document.getElementsByTagName("body")[0]
  body.removeChild(product)
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

// Iteration 1
// Calculating the total price for the product
// function getTotalPrice() {
//   var price = document.getElementsByClassName('price')[0];
//   var quantity = document.getElementsByTagName('input')[0];
//   var total = price.innerText * quantity.value
//   var totalPrice = document.getElementById("total")
//   totalPrice.innerText = total
// }

// Iteration 2: Add another product
// function getTotalPrice() {
//   var price = document.getElementsByClassName('price');
//   var quantity = document.getElementsByTagName('input');
//   var totalPrice = document.getElementsByClassName("total")
//   // Calcular totales
//   for (var i=0; i<price.length; i++){
//     totalPrice[i].innerText = price[i].innerText * quantity[i].value
//   }
// }

// Iteration 3: Calculating the total price of all products
function getTotalPrice() {
  var price = document.getElementsByClassName('price');
  var quantity = document.getElementsByTagName('input');
  var total = document.getElementsByClassName("total")
  var totalPrice = document.getElementById("total-price")
  // Calcular subtotales y total
  var totalSum = 0
  for (var i=0; i<price.length; i++){
    total[i].innerText = Number(price[i].innerText) * Number(quantity[i].value)
    totalSum += Number(total[i].innerText)
  }
  totalPrice.innerText = totalSum
}

function createQuantityInput(){
  var qtyDiv = document.createElement("div");
  var qtyLabel = document.createElement("label");
  var qtyInput = document.createElement("input");
  qtyLabel.innerHTML = "QTY";
  qtyLabel.setAttribute('for', "qty");
  qtyInput.setAttribute('name', "qty");
  qtyInput.setAttribute('value', 0);
  qtyInput.setAttribute('type', "number");
  qtyInput.setAttribute('min', 0);
  qtyInput.className = "quantity"
  qtyDiv.appendChild(qtyLabel)
  qtyDiv.appendChild(qtyInput)
  return qtyDiv
}

function createDeleteButton(){
  var buttonDiv = document.createElement("div");
  var button = document.createElement("button")
  button.innerHTML = "Delete"
  button.className = "btn"
  button.classList.add("btn-delete");
  button.onclick = deleteItem
  buttonDiv.appendChild(button)
  return buttonDiv
}

function createQuantityNode(){
  var qtyDiv = document.createElement("div");
  var qty = document.createElement("span");
  var text = document.createTextNode('$'); //Sólo por estética
  qty.innerHTML = "0.00";
  qty.className = "total"
  qtyDiv.appendChild(text)
  qtyDiv.appendChild(qty)
  return qtyDiv
}

function createItemNode(dataType, itemData){
  var parent = document.getElementsByTagName("body")[0];
  var firstChild = document.getElementsByClassName('new-product')[0];
  itemData.className = "product"
  parent.insertBefore(itemData, firstChild);
}

function createNewItemRow(itemName, itemUnitPrice){
  var itemDiv = document.createElement("div");
  var nameDiv = document.createElement("div");
  var priceDiv = document.createElement("div");
  var name = document.createElement("span");
  var price = document.createElement("span");
  var text = document.createTextNode('$'); //Sólo por estética
  priceDiv.appendChild(text)
  name.innerHTML = itemName
  name.className = "product-name"
  price.innerHTML = itemUnitPrice
  price.className = "price"
  nameDiv.appendChild(name)
  priceDiv.appendChild(price)
  itemDiv.appendChild(nameDiv)
  itemDiv.appendChild(priceDiv)
  return itemDiv
}

function createNewItem(){
  var itemName = document.getElementById("new-product")
  var itemUnitPrice = document.getElementById("new-price")
  var item = createNewItemRow(itemName.value,itemUnitPrice.value)
  var qtyInput = createQuantityInput()
  var qtyLabel = createQuantityNode()
  var delButton = createDeleteButton()
  item.appendChild(qtyInput)
  item.appendChild(qtyLabel)
  item.appendChild(delButton)
  createItemNode("body",item)
  itemName.value = ""
  itemUnitPrice.value = 0
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // Iteration 1: Calculating the total price for the product
  calculatePriceButton.onclick = getTotalPrice;
  // Iteration 5: Creating new products
  createItemButton.onclick = createNewItem;

  // Iteration 4: Deleting a product
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
