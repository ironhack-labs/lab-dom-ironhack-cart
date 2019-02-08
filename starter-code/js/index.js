function deleteItem(){
  //identifico que posicion tiene el botón de borrado
  var indexButton = parseInt(this.id, 10);
  //identifico al padre del elemento a borrar
  var divId = document.getElementById("div-products");
  //creo un array de productos y borro el de la posicion de borrado
  var classCol = document.getElementsByClassName("product");
  var arr = [].slice.call(classCol);
  var itemToDelete = arr[indexButton];
  console.log(itemToDelete);
  divId.removeChild(itemToDelete);
  //vuelvo a asignar un id a cada boton
  var reassignId = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<reassignId.length ; i++){
    reassignId[i].setAttribute("id", i);
  }
}

function getPriceByProduct(itemNode){
  //Selecciona una coleccion de clase con el precio de cada item y la convierte en un array de numeros
  var productSpan = document.getElementsByClassName("product-price");
  var arr = [].slice.call(productSpan)
  for(var i = 0; i < arr.length; i++){
  var priceProduct = parseFloat(arr[i].innerHTML, 10);
  //Selecciona un clase y alamcena su valor en numero
  var amount = document.getElementsByClassName("units");
  var arr2 = [].slice.call(amount);
  var amountTotal = arr2[i].value;
  //Selecciona una clase calcula el multiplo del valor y la cantidad y lo devuelve.
  var priceLabel = document.getElementsByClassName(itemNode);
  var arr3 = [].slice.call(priceLabel);
  var finalProductPrice = priceProduct * amountTotal;
  finalProductPrice = finalProductPrice.toFixed(2);
  priceLabel[i].innerHTML =  finalProductPrice;
  }
}

function getTotalPrice() {
  getPriceByProduct("total-product-price")
  if (!document.getElementById("total")){
  //Mete todos los precios finales de producto en un array convertidos en numeros
  var pricesCollection = document.getElementsByClassName("total-product-price");
  var arr = [].slice.call(pricesCollection);
  arr = arr.map(function(item) {
    var price = parseFloat(item.innerHTML, 10);
    return price;
  });
  //Calcula el precio total de los productos
  var orderPrice = arr.reduce(function(a, b){
    return a + b;
  }, 0);
  console.log(orderPrice)
  orderPrice = orderPrice.toFixed(2)
  console.log(orderPrice)
  //Create output of total price
    //create div and add class
  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "title");
  
    //create h1 and append it to div
  var createh1 = document.createElement("h1");
  createh1.setAttribute("id","total");
  var text = document.createTextNode("Total price: $" + orderPrice);
  console.log(orderPrice);
  createh1.appendChild(text);
  createDiv.appendChild(createh1);
    //append the div to document
  document.getElementById("body").appendChild(createDiv);
  }
  else {
    var pricesCollection = document.getElementsByClassName("total-product-price");
  var arr = [].slice.call(pricesCollection);
  arr = arr.map(function(item) {
    var price = parseFloat(item.innerHTML, 10);
    return price;
  });
  //Calcula el precio total de los productos
  var orderPrice = arr.reduce(function(a, b){
    return a + b;
  }, 0);
  orderPrice = orderPrice.toFixed(2)
  }  

  document.getElementById("total").innerHTML = "Total price: $" + orderPrice;
}

function createQuantityInput(){
  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "inputdiv");
  
    //create label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("for", "quantity");
  createLabel.setAttribute("class", "quantity");
  var labelText = document.createTextNode("QTY");
  createLabel.appendChild(labelText);
    //create input
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "number");
  createInput.setAttribute("min", "0");
  createInput.setAttribute("name", "number-units");
  createInput.setAttribute("class", "units");
  createInput.setAttribute("value", "0");
    //append them to div
  createDiv.appendChild(createLabel);
  createDiv.appendChild(createInput);
    //append the div to document
    var col = document.getElementsByClassName("product");
    var arr = [].slice.call(col);
    arr[col.length-1].appendChild(createDiv);
}

function createDeleteButton(){
  var createDiv = document.createElement("div");
    //create delete button
  var createButton = document.createElement("button");
  createButton.setAttribute("class", "btn btn-delete");
  var buttonText = document.createTextNode("Delete");
  createButton.appendChild(buttonText);
    //append them to div
  createDiv.appendChild(createButton);
    //append the div to document
  var col = document.getElementsByClassName("product");
  var arr = [].slice.call(col);
  arr[col.length-1].appendChild(createDiv);
}

function createProductPrice(){
  var createDiv = document.createElement("div");
  var text = document.createTextNode("$");
  createDiv.appendChild(text);

  var createSpan = document.createElement("span");
  createSpan.setAttribute("class", "product-price");
  var item = document.getElementById("input-product-price")
  var value = parseInt(item.value, 10)
  var decValue = value.toFixed(2);
  createSpan.innerHTML = decValue
  createDiv.appendChild(createSpan);
  //append the div to document
  var col = document.getElementsByClassName("product");
  var arr = [].slice.call(col);
  arr[col.length-1].appendChild(createDiv);
}

function createTotalPriceNode(){
  var createDiv = document.createElement("div");
  var text = document.createTextNode("$");
  createDiv.appendChild(text);
    //create span tag
  var createSpan = document.createElement("span");
  createSpan.setAttribute("class", "total-product-price");
  createDiv.appendChild(createSpan);
    //append the div to document
  var col = document.getElementsByClassName("product");
  var arr = [].slice.call(col);
  arr[col.length-1].appendChild(createDiv);
}


function createItemNode(){
  var createDiv = document.createElement("div");

  var createSpan = document.createElement("span");
  createSpan.setAttribute("class", "product-name");
  var item = document.getElementById("input-product-name")
  var value = item.value
  createSpan.innerHTML = value
  createDiv.appendChild(createSpan);
  //append the div to document
  var col = document.getElementsByClassName("product");
  var arr = [].slice.call(col);
  arr[col.length-1].appendChild(createDiv);
}

//function createNewItemRow(itemName, itemUnitPrice){
function createNewItemRow(){
  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "product");
  //append the div to document
  document.getElementById("div-products").appendChild(createDiv);
}

function createNewItem(){
  createNewItemRow();
  createItemNode();
  createProductPrice();
  createQuantityInput();
  createTotalPriceNode();
  createDeleteButton();

  var reassignId = document.getElementsByClassName('btn-delete');

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<reassignId.length ; i++){
    reassignId[i].setAttribute("id", i);
    deleteButtons[i].onclick = deleteItem;
  }
}
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].setAttribute("id", i);
    deleteButtons[i].onclick = deleteItem;
  }

};
