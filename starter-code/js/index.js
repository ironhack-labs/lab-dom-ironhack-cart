function deleteItem(e){
var wrapper = document.getElementById('wrapper');
var button = e.currentTarget;
var productDiv = button.parentNode;
wrapper.removeChild(productDiv);


}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //obtengo los valores necesarios
  var unitPrices = document.getElementsByClassName('uPrice');
  var units = document.getElementsByClassName('units');
  var finalPrice = document.getElementsByClassName('total-price');
  var total;
  var totalCarrito=0;
  for (var i = 0; i < unitPrices.length; i++) {
    var unitPrice = parseInt(unitPrices[i].innerHTML);
    var unit = units[i].value;

    if (unit.length == 0){
      finalPrice[i].innerHTML = "0 $";
      totalCarrito += 0;
    }else {
      total = unitPrice * parseInt(unit);
      finalPrice[i].innerHTML= total+ " $";
      totalCarrito += total;
    }

    }
    var totalPrice = document.getElementById("totalCarrito");
    totalPrice.innerHTML = "Total Price: " + totalCarrito;

}

function createQuantityInput(){
var input = document.createElement('input');
input.className = "units left";
input.setAttribute("type", "text");
input.setAttribute("name", "units");
return input;
}

function createDeleteButton(){

var dltBtn = document.createElement('button');
dltBtn.className = "btn btn-delete left";
dltBtn.setAttribute("type", "button");
dltBtn.setAttribute("value", "Delete");
dltBtn.innerHTML = "Delete"
return dltBtn;

}

function createSpanName(itemName){
var span =  document.createElement('span');
span.className = "left product-name";
span.innerHTML = itemName;
return span;
}

function createSpanUnitPrice (itemUnitPrice){
var span = document.createElement('span');
span.className = "uPrice left";
span.innerHTML = itemUnitPrice + " $";
return span;
}


function createSpanTotalPrice (){
var span = document.createElement('span');
span.className = "total-price left";
span.innerHTML = "0.00 $"
return span;
}

function createLabelQuantity (){
var label = document.createElement('label');
label.className = "left";
label.innerHTML = "QTY";
  return label;
}

function createProductDiv (spanName, spanUP, labelQTY, units, totalPrice, dltBtn){
  var div = document.createElement('div');
  div.className = "product";
  div.appendChild(spanName);
  div.appendChild(spanUP);
  div.appendChild(labelQTY);
  div.appendChild(units);
  div.appendChild(totalPrice);
  div.appendChild(dltBtn);

  return div;
}

function createNewItemRow(itemName, itemUnitPrice){
var wrapper = document.getElementById('wrapper');
var spanName = createSpanName(itemName);
var spanUnitPrice = createSpanUnitPrice(itemUnitPrice);
var labelQTY = createLabelQuantity();
var spanTotalPrice = createSpanTotalPrice();
var dltBtn = createDeleteButton();
var input = createQuantityInput();
var productDiv = createProductDiv(spanName, spanUnitPrice, labelQTY, input, spanTotalPrice, dltBtn);
wrapper.appendChild(productDiv);
}

function createNewItem(){
var itemName = document.getElementById("item-name").value;
var itemPrice = document.getElementById("item-price").value;

if (itemName.length > 0){
createNewItemRow(itemName, itemPrice);
addListenerDeleteBtn();
}else {
  alert("Add a name please");
}
}
function addListenerDeleteBtn (){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function(){
  addListenerDeleteBtn();
};
