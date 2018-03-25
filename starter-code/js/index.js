
console.log("connected");
// byIds
var calculate = document.getElementById("calculate");
var total = document.getElementById("price-total");
var container = document.getElementById("container");
var create = document.getElementById("create");
var createRow = document.getElementById("create-row")
var model = document.getElementById("row-model");
var inputProduct = document.getElementById("input-product");
var inputPrice = document.getElementById("input-price");
// byClass
var doom = document.getElementsByClassName("btn-delete");
var items = document.getElementsByClassName("item");
var prices = document.getElementsByClassName("price");
var products = document.getElementsByClassName("product");
var subtotals = document.getElementsByClassName("price-subtotal")
var rows = document.getElementsByClassName("row");
// byTag
var inputs = document.getElementsByTagName("input");

// Borrar value previo del input al hacer click. Solo me funciona la primera vez :[
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = function (e) {
      e.currentTarget.setAttribute("value", "");  
      e.currentTarget.setAttribute("placeholder", "");
    }
  };

// Calcular precios
calculate.onclick = function () {
  var counterTotal = 0;
  for (var i = 0; i < rows.length; i++) {
    subtotals[i].innerHTML = parseFloat(inputs[i].value) * parseFloat(prices[i].innerHTML);
    counterTotal += +subtotals[i].innerHTML;
    total.innerHTML = counterTotal;
  } 
};

// Borrar fila
  for (var i = 0; i < doom.length; i++) {
    doom[i].onclick = function (e) {
      container.removeChild(e.currentTarget.parentNode.parentNode);
    }
  }

// Crear fila
create.onclick = function () {
  var newRow = model.cloneNode(true);
  container.insertBefore(newRow,createRow);
  for (var i = 0; i < rows.length; i++) {
      if (i = rows.length-1) {
        products[i].innerHTML = inputProduct.value;
        prices[i].innerHTML = inputPrice.value;
        subtotals[i].innerHTML = "0.00";
        inputs[i].value = 0;
      }
  }
  inputProduct.value = "";
  inputPrice.value = "";
  // Aquí he tenido que repetir el código (for loop) porque al declararlo como una función no hacía nada 
  for (var i = 0; i < doom.length; i++) {
    doom[i].onclick = function (e) {
      container.removeChild(e.currentTarget.parentNode.parentNode);
    }
  }
};


// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }


// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
  
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   // calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
  
//   document.getElementsByClassName("btn").onclick = function() {
//     console.log("fdsadvsdv")
//   } 
// };












