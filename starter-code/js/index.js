var products = [
  {descripcion: "IronBubble-head", price: 25},
  {descripcion: "IronShirt", price: 15},
  {descripcion: "IronCup", price: 10},
  {descripcion: "IronSticker", price: 1},
  {descripcion: "IronAxe", price: 100}
];

var productsList = [];

//Funcion del evento click del boton eliminar
function deleteItem(e){
  var row = e.currentTarget.parentNode.parentNode;
  var id = row.id;
  row.parentNode.removeChild(document.getElementById(id));
}

function getPriceByProduct(itemNode){}
function updatePriceByProduct(productPrice, index){}
function createQuantityInput(){}
function createDeleteButton(){}
function createQuantityNode(){}
function createItemNode(dataType, itemData){}
function createNewItemRow(itemName, itemUnitPrice){}

//Funcion a la carga del script
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var quantityField = document.getElementsByClassName('qty');
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  //for(var i = 0; i<deleteButtons.length ; i++){
  //  deleteButtons[i].onclick = deleteItem;
  //}

  fillProducts();

  //for(var j = 0; j<quantityField.length ; j++){
  //  quantityField[j].onkeyup = updateTotalItem;
  //}
};

//Funcion para crear una nueva linea
function createNewItem() {
  var p = productsList;
  var list = document.getElementById("list");
  var price = document.getElementById("price").value;
  var description = document.getElementById("description").value;
  var id = productsList.length;
  var newRow = document.createElement('div');
  newRow.id = 'item' + p.length;
  newRow.className = 'row';
  //console.log(p);
  productsList.push({description: description, price:price, qty:0 });
  htmlItem = "<div class='item'>"+p[id].description+"</div>" +
              "<div class='price'>"+p[id].price+"</div>" +
              "<div class='quantity'>QTY <input type='text' class='qty'></input></div>" +
              "<div class='total_item'>$"+(p[id].price * p[id].qty)+"</div>" +
              "<div class='btn'><button class='btn-delete' type='button'>Delete</button></div>";
  newRow.innerHTML = htmlItem;
  list.appendChild(newRow);

  //Asignar evento OnKeyUp al input quantity
  var quantityField = document.getElementsByClassName('qty');
  for(var j = 0; j<quantityField.length ; j++){
    quantityField[j].onkeyup = updateTotalItem;
  }
  //Asignar evento CLick al boton Eliminar
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}

//Funcion del evento click del boton calcular precios
function getTotalPrice() {
  var total = 0;
  var totalItems = document.getElementsByClassName('total_item');
  var value = 0;
  for (var i = 0; i < totalItems.length;i++) {
    value = totalItems[i].innerHTML;
    value = value.substr(1, value.length-1);
    total += parseInt(value);
  }
  document.getElementById("mainTotal").innerHTML= "$" +total;
}

//Funcion del evento OnKeyUp del Input quantity
//Actualiza el precio total del item
function updateTotalItem(e) {
  var field = e.currentTarget;
  var qty =  parseInt(field.value);
  var parent = field.parentNode.parentNode;
  var total = parent.querySelector(".total_item");
  var price = parseInt(parent.querySelector(".price").innerHTML);
  if (isNaN(qty)) {
    total.innerHTML = "$0";
  } else {
    total.innerHTML = "$"+ (price * qty);
  }
}

//Funcion del evento onChange del select
//Actualiza el input precio, del item seleccionado.
function eventSelect(e){
    sel = products[e.currentTarget.selectedIndex].price;
    document.getElementById("price").value = sel;
}

//Funcion que rellena el select y asigna el evento onChange
function fillProducts(){
  var productSelectList = document.getElementById("description");
  var option;
  for (var i=0; i < products.length; i++) {
    option = document.createElement("option");
    option.text = products[i].descripcion;
    console.log(products[i].descripcion);
    productSelectList.add( option, option[i]);
  }
  //Asignamos un evento
  productSelectList.onchange = eventSelect;

  //Seleccionamos el primer elemento
  sel =
  document.getElementById("price").value = products[productSelectList.selectedIndex].price;
}
