function findParentWithClass() {
  do {
    node = node.parentElement;
  }
  while (node && !node.classList.contains(className));
  console.log(node);
  return node;
}

function deleteItem(){

}



function getPriceByProduct(product){
  price = product.getElementsByClassName("product-price") [0];

  return parseFloat(price.innerText.replace ("$", "")) || 0;
}



function getQuantityByProduct (product) {
  quantity = product.getElementsByClassName("quantity") [0];

  return parseInt(quantity.value) || 0;
}

//hacemos una funcion para actualizar los precios
function updatePriceByNode(price, node) {
  price = document.createTextNode ("$" + price.toFixed(2));
  node.innerHTML = "";
  node.appendChild(price);
}

function updatePriceByProduct(product, price){
  node = product.getElementsByClassName("product-total-price") [0];
  updatePriceByNode(price, node);
}

function updateTotalPrice (price) {
  node = document.getElementById("total-value");
  updatePriceByNode (price, node);
}



function getTotalPrice() {
  total = 0.00; // le damos dos decimales
  products = document.getElementsByClassName("product");
  for (i = 0; i < products.length; i++) {
    product = products[i];
    price = getPriceByProduct(product);
    quantity = getQuantityByProduct(product);
    totalProductPrice = price * quantity;
    updatePriceByProduct(product, totalProductPrice);
    total += totalProductPrice;
    console.log(total);
  }
  updateTotalPrice(total);
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
 var calculatePriceButton = document.getElementById('calc-prices-button');
 var createItemButton = document.getElementById('new-item-create');
 var deleteButtons = document.getElementsByClassName('btn-delete');

 calculatePriceButton.onclick = getTotalPrice; //me sale continuamente un error en esta línea, me dice que devuelve un null y no se como evitarlo
 createItemButton.onclick = createNewItem;

 for(var i = 0; i<deleteButtons.length ; i++){
   deleteButtons[i].onclick = deleteItem;
 }
}; 

