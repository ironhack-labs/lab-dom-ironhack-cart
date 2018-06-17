/*DELETE*/

function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}

/*PRICE CALCULATION*/

function getPriceByProduct(itemNode){
  var numberOfProducts = itemNode.getElementsByTagName('input')[0].value;
  var priceHolder = itemNode.getElementsByClassName('price')[0].innerText;
  priceHolder = parseFloat(priceHolder) * numberOfProducts;
  itemNode.getElementsByClassName('total')[0].getElementsByTagName('span')[0].innerHTML = priceHolder;
  return priceHolder;
}

function getTotalPrice() {
  var products = document.querySelectorAll("#product-list li");
  var total= 0;
  for(var i= 0;i < products.length; i++){
    total += getPriceByProduct(products[i]);
  }
  document.getElementById('total-sum').innerHTML = total;
}

/*CREATE MORE ELEMENTS*/

function createQuantityInput(element){
  var label = document.createElement('label');
  var quantity = document.createElement('input');
  element.appendChild(label).innerText= "QTY ";
  label.setAttribute("for","quantity")
  element.appendChild(quantity);
  quantity.setAttribute("class","quantity");
  quantity.setAttribute("type","number");
  quantity.value = 1;
}
function createDeleteNode(element){
  var deleteNode = document.createElement('div');
  element.appendChild(deleteNode);
  createDeleteButton(deleteNode);
}

function createDeleteButton(element){
  var deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class','btn-delete');
  element.appendChild(deleteBtn).innerText = "Delete";
}

function createQuantityNode(element){
    var qtyNode = document.createElement('div');
    element.appendChild(qtyNode);
    qtyNode.setAttribute("class","inputs");
    createQuantityInput(qtyNode);
}

function createTotalNode(element){
  var totalNode = document.createElement('div');
  totalNode.setAttribute('class',"total");
  element.appendChild(totalNode);
  createTotal(totalNode);
}
function createTotal(element){
  var totalValue = document.createElement('span');
  totalValue.innerText = "0.00";
  element.appendChild(totalValue);
}

function createNameNode(element, value){
  var nameNode = document.createElement('div')
  nameNode.setAttribute('class',"name");
  element.appendChild(nameNode);
  var nameValue = document.createElement('span');
  nameValue.innerText = value
  nameNode.appendChild(nameValue);
}

function createPriceNode(element, value){
  var priceNode = document.createElement('div');
  priceNode.setAttribute('class','price')
  element.appendChild(priceNode);
  var priceValue = document.createElement('span');
  priceValue.innerText = value;
  priceNode.appendChild(priceValue);
}

function createNewItemRow(itemName, itemUnitPrice){
    var container = document.getElementById("product-list");
    var newNode = document.createElement('li');
    var element = container.appendChild(newNode);
    createNameNode(element, itemName);
    createPriceNode(element, itemUnitPrice);
    createQuantityNode(element);
    createTotalNode(element);
    createDeleteNode(element);

}

function assignDeleteEvent(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

function createNewItem(){
    var newName = document.getElementById('new-name');
    var newPrice = document.getElementById('new-price');
    if(newName.value.length == 0 || newPrice.value.length == 0){
      return alert('inputs must be filled!');
    }
    createNewItemRow(newName.value, newPrice.value);
    assignDeleteEvent();
}

window.onload = function(){
  
  var createItemButton = document.getElementById('new-item-create');
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var quantityInputs = document.getElementsByClassName('quantity');
  console.log(quantityInputs);
  quantityInputs.onkeypress = getTotalPrice;
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  assignDeleteEvent();
};



