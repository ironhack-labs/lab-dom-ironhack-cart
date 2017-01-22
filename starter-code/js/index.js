var items = [{
  name : "T-Shirt",
  price : "25€",
  priceSum : "0€",
},{
  name : "Pullover",
  price : "40€",
  priceSum : "0€",
},{
  name : "Coat",
  price : "60€",
  priceSum : "0€",
}];

function showItems(){
	var content = document.getElementById('container');
  document.getElementsByClassName('js-totalPurchase')[0].innerHTML = "0€";
  var allItems = "";
	for (var i=0; i < items.length; i++) {
		var itemName = items[i].name;
    var itemPrice = items[i].price;
    var priceSum = items[i].priceSum;
		allItems += "<div class='row'><div class='product-name col-lg'><span>"+itemName+"</span></div><div class='product-price col-lg'><span class='js-item-cost'>"+itemPrice+"</span></div>"+
    "<div class='product-units col-lg'><label for='units col-lg'>QTY</label><input id='units' type='text col-lg js-units' name='units' value='0'></div>"+
    "<div class='items-price col-lg js-sum-cost'><span>"+priceSum+"</span></div><div class='btn btn-delete'>Delete</div></div>";
  }
  content.innerHTML = allItems;
  createDeleteButtons();
}

/* function getPriceByProduct(productPrice,itemNode){
  var unitPrice = document.getElementsByTagName('input')[itemNode].value;
  var generatePrice = productPrice*unitPrice;
  console.log("pasa por aqui");
  return generatePrice;
}

function updatePriceByProduct(productPrice, index){
  var itemPay = getPriceByProduct(productPrice,index);
  document.getElementsByClassName('js-sum-cost')[index].innerHTML = itemPay+"€";
}

function getTotalPrice () {
  var items = document.getElementsByClassName("row");
  for (var i = 0; i < items.length; i++) {
    var itemPrice = parseInt(document.getElementsByClassName('js-item-cost')[i].textContent);
    updatePriceByProduct(itemPrice, i);
  }
}*/

//Refactorizado lo comentado encima
function getTotalPrice () {
  var items = document.getElementsByClassName("row");
  var totalPurchase = 0;
  for (var i = 0; i < items.length; i++) {
    var itemPrice = parseInt(document.getElementsByClassName('js-item-cost')[i].textContent);
    var unitPrice = document.getElementsByTagName('input')[i].value;
    var itemPay = itemPrice*unitPrice;
    document.getElementsByClassName('js-sum-cost')[i].innerHTML = itemPay+"€";
    totalPurchase += itemPay;
  }
  document.getElementsByClassName('js-totalPurchase')[0].innerHTML = totalPurchase+"€";
}

//----A partir de aqui, funciones para crear y eliminar items-----

function createNewItem(){
  var panel = document.getElementsByClassName('js-panel-new-item')[0];
  panel.style.display = "block";
}

function cancelNewItem(){
  document.getElementById('new-item').reset();
  var panel = document.getElementsByClassName('js-panel-new-item')[0];
  panel.style.display = "none";
}

function aceptNewItem(){
  var itemName = document.getElementById('new-item-product').value;
  var itemUnitPrice = document.getElementById('new-item-price').value;
  createNewItemRow(itemName, itemUnitPrice);
}

function createNewItemRow(itemName, itemUnitPrice){
  var newItem = new Object(itemName,itemUnitPrice);
  items.push(newItem);
  cancelNewItem();
  showItems();
  createDeleteButtons ();
}

function createDeleteButtons (){
var deleteButtons = document.getElementsByClassName('btn-delete');
for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].addEventListener("click", deleteItem,false);
  }
}

function deleteItem(){
  event.currentTarget.parentElement.remove();
  getTotalPrice();
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var cancelNewItemButton = document.getElementById('new-item-cancel');
  var aceptNewItemButton = document.getElementById('new-item-acept');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  aceptNewItemButton.onclick = aceptNewItem;
  cancelNewItemButton.onclick = cancelNewItem;
  showItems();
};


function Object (name,price) {
  this.name = name;
  this.price = price;
  this.priceSum = "0€";
}
