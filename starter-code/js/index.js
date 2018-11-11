function findParentWithClass(node, className) {
  do {
    node = node.parentElement;
  } while (node && !node.classList.contains(className));
  console.log(node);
  return node;
}

function deleteItem(e){

}

function getPriceByProduct(product){
var priceProduct = product.getElementsByClassName(".product-price span");
return parseFloat(priceProduct.innerText.replace ('$', '')) || 0; //parseFloat cambia la cadena a un numero flotante y innerTex.replace devuelve el contenido del texto especificado quitando los espacios y el simbolo $
// con esta función ya podemos llamar a cada precio de cada producto, la usaremos en getTotalPrice, 
}

function updatePriceByProduct(product, price){
  node = product.getElementsById ("product-total-price") [0];
  updatePriceByNode(price, node); //como vamos a necesitar acctualizar dos precios, que son el total y del de cada producto haremos una función más para encpsular este calculo
}

function updateTotalPrice (price) {
  node = document.getElementById ("total-value");
  updatePriceByNode(price, node);
}

function updatePriceByNode (price, node) {
  var price = document.createTextNode ('$' + price.toFixed (2)); //price.toFixed formatea el numero dejandole solo dos decimales en este caso
  node.innerHTML = '';
  node.appendChild (price); //appendChild = Agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado.
}


function getTotalPrice() {
var total = 0.00;
var products = document.getElementsByClassName("product-bar");

for (var i = 0; i<products.length; i++) { //bucle for para recorrer todos los productos y cara el precio y la cantidad de cada
  var product = products[i];
  var price = getPriceByProduct (product);
  var quantity = getQuantityByProduct (product);
  var totalProductPrice = price * quantity;
  // ya tenemos el precio de cada producto, ahora tenemos que actualizarlo para poder sacarl el total de la cesta
  updatePriceByProduct (product, totalProductPrice);
  total += totalProductPrice;
  console.log(total);
}
updateTotalPrice (total); //actualizamos el total de la cesta
}


function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
 var calculatePriceButton = document.getElementById('.calc-prices-button');
 var createItemButton = document.getElementById('new-item-create');
 var deleteButtons = document.getElementsByClassName('btn-delete');

 calculatePriceButton.onclick = getTotalPrice; //me sale continuamente un error en esta línea, me dice que devuelve un null y no se como evitarlo
 createItemButton.onclick = createNewItem;

 for(var i = 0; i<deleteButtons.length ; i++){
   deleteButtons[i].onclick = deleteItem;
 }
}; 

