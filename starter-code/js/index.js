


function deleteItem(e){
  var content = document.getElementsByClassName('content')[0];
  var item = e.currentTarget.parentNode.parentNode;
  var totalAmount = document.querySelector('.total-amount').innerHTML.replace('$', '');
  var productAmount = item.children[3].children[0].innerHTML.replace('$', '');
  if (productAmount !== '0.00') {
    document.querySelector('.total-amount').innerHTML = '$' + (totalAmount - productAmount).toFixed(2);
  }
  content.removeChild(item);
}


function getPriceByProduct(itemNode){
  var unitPrice = itemNode.getElementsByClassName('dollars')[0].innerHTML.replace("$", "");
  return unitPrice;
}


function updatePriceByProduct(productPrice, index){
  var totalPrice = index.querySelector('.total');
  var quantity = index.getElementsByTagName('input')[0].value;
  var productTotal = (quantity > 0 ? quantity : 0) * productPrice;
  totalPrice.innerHTML = "$" + productTotal.toFixed(2);
  index.getElementsByTagName('input')[0].value = quantity > 0 ? quantity : 0;
  return productTotal;
}


function getTotalPrice() {
  var items = [].slice.call(document.getElementsByClassName('item'));
  var totalAmount = document.querySelector('.total-amount');
  var totalPrice = 0;
  items.forEach(element => {
    totalPrice += updatePriceByProduct(getPriceByProduct(element), element);
  });
  totalAmount.innerHTML = "$" + totalPrice.toFixed(2);
}


function createName(itemName){
  var name = document.createElement("div");
  name.className = 'product';
  var span = document.createElement("span");
  span.className = 'name';
  span.innerHTML = isNaN(itemName) ? itemName : "No name provided";
  name.appendChild(span);
  return name;
}


function createPrice(itemUnitPrice){
  var price = document.createElement("div");
  price.className = 'price';
  var span = document.createElement("span");
  span.className = 'dollars';
  span.innerHTML = (itemUnitPrice > 0) ? '$' + itemUnitPrice : '$0.00';
  price.appendChild(span);
  return price;
}


function createQuantityInput(){
  var inputBox = document.createElement("div");
  inputBox.className = "quantity";
  var label = document.createElement("label");
  label.className = "title-input";
  label.innerHTML = "QTY";
  var input = document.createElement("input");
  input.value = 0;
  input.min = 0;
  input.type = 'number';
  inputBox.appendChild(label);
  inputBox.appendChild(input);
  return inputBox;
}


function createQuantityNode(){
  var amount = document.createElement("div");
  amount.className = 'amount';
  var span = document.createElement("span");
  span.className = 'total';
  span.innerHTML = "$0.00";
  amount.appendChild(span);
  return amount;
}


function createDeleteButton(){
  var buttonBox = document.createElement("div");
  buttonBox.className = 'button';
  var button = document.createElement("button");
  button.className = 'btn btn-delete';
  button.innerHTML = "Delete";
  buttonBox.appendChild(button);
  return buttonBox;
}


//function createItemNode(dataType, itemData){
// function createItemNode(){
//   var item = document.createElement("div");
//   item.className = "item";
//   return item;
// }


function createNewItemRow(itemName, itemUnitPrice){
  var item = document.createElement("div");
  item.className = "item";
  item.appendChild(createName(itemName));
  item.appendChild(createPrice(itemUnitPrice));
  item.appendChild(createQuantityInput());
  item.appendChild(createQuantityNode());
  item.appendChild(createDeleteButton());
  return item;
}


function createNewItem(){
  var productName = document.querySelector(".create-name").value;
  var productPrice = document.querySelector(".create-price").value;
  var reference = document.querySelector('.new-items-create');
  var parent = document.querySelector('.content');

  parent.insertBefore(createNewItemRow(productName, productPrice), reference);

  refreshButtons();
  clearInputs();
}

function clearInputs() {
  document.querySelector(".create-name").value = "";
  document.querySelector(".create-price").value = "";
}


function refreshButtons() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  calculatePriceButton.onclick = getTotalPrice;
      //calculatePriceButton.addEventListener("click", getTotalPrice);
      //calculatePriceButton.onclick = function() {getTotalPrice()};

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}


window.onload = function(){
  var createItemButton = document.getElementById('new-item-create');
  createItemButton.onclick = createNewItem;
  refreshButtons();
};
