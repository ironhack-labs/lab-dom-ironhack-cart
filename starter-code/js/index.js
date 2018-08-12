function deleteItem(e){
 var button = e.target;
 button.parentElement.parentElement.remove()
 getTotalPrice();
}

function getTotalPrice() {
  var prices  = document.getElementsByClassName('price');
  var quantities = document.getElementsByClassName('quantity');
  var totalCosts = document.getElementsByClassName('total-unit');
  var accumulator = 0;
  for (var x = 0; x < prices.length;x++){
    var cost = prices[x].getElementsByTagName('span')[0].innerHTML;
    cost = cost.split("");
    cost.shift();
    cost = cost.join("");
    cost *= quantities[x].getElementsByTagName('input')[0].value;
    accumulator += cost;
    totalCosts[x].getElementsByTagName('span')[0].innerHTML = "$"+parseFloat(cost).toFixed(2);
  }
  document.getElementById('total-price').getElementsByTagName('span')[0].innerHTML = "$"+parseFloat(accumulator).toFixed(2);
}

function createQuantityInput(){
  var input = document.createElement('input')
  input.setAttribute("type","text");
  input.setAttribute("placeholder","0");
  return input;
}

function createDeleteButton(){
  var div = document.createElement('div')
  div.className = "delete col";
  var button = document.createElement('button')
  button.className = "btn btn-danger btn-delete";
  button.innerHTML = "Delete";
  button.onclick = deleteItem;
  div.appendChild(button);
  return div;
}

function createQuantityNode(){
  var div = document.createElement('div')
  div.className = "quantity col-3";
  var label = document.createElement('label')
  label.innerHTML = "QTY";
  div.appendChild(label);
  div.appendChild(createQuantityInput());
  return div;
}

function createTotalPriceNode(){
  var div = document.createElement('div')
  div.className = "total-unit col"
  var total = document.createElement('span')
  total.innerHTML = "$0.00"
  div.appendChild(total)
  return div;
}

function createItemNameNode(itemName){
  var divName = document.createElement('div')
  divName.className = "name col";
  var name = document.createElement('span')
  name.innerHTML = itemName;
  divName.appendChild(name);
  return divName;
}

function createUnitPriceNode(itemUnitPrice){
  var divPrice = document.createElement('div')
  divPrice.className = "price col";
  var price = document.createElement('span')
  price.innerHTML = "$"+parseFloat(itemUnitPrice).toFixed(2);
  divPrice.appendChild(price)
  return divPrice;
}

function createNewItem(){
  var newRow = document.createElement('div')
  newRow.className = "row"
  var itemName = document.getElementById('new-name').value
  newRow.appendChild(createItemNameNode(itemName))
  var itemPrice = document.getElementById('new-price').value
  newRow.appendChild(createUnitPriceNode(itemPrice))
  newRow.appendChild(createQuantityNode())
  newRow.appendChild(createTotalPriceNode())
  newRow.appendChild(createDeleteButton())
  var mainParent = document.getElementsByClassName('product')
  console.log(mainParent)
  mainParent[0].appendChild(newRow)
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
