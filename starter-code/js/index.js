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
  var buttonDiv = document.createEvent ('div');
  var deleteBtn = document.createElement ('button');

  deleteBtn.setAttribute ('class', 'btn btn-delete');
  deleteBtn.appendChild(document.createTextNode('Delete'));
  deleteBtn.onclick = deleteItem;

  buttonDiv.appendChild(deleteBtn);
  return buttonDiv;
}

function createQuantityNode(){
  var quantityNode = document.createElement ('div');
  var labelNode = document.createElement('label');

  quantityNode.appendChild(document.createElement('input'));
  labelNode.appendChild(document.createTextNode("QTY"));
  
  return quantityNode;
}

function createItemName(name, price){
  var nameDiv = document.createElement('div');
  var name = document.createTextNode(name);
  var nameSpan = document.createElement('span');

  nameSpan.classList.add('name');
  nameSpan.appendChild(name);
  nameDiv.appendChild(nameSpan);

  var priceDiv = document.createElement('div');
  var price = document.createTextNode("$" + price.toFixed(2));
  var priceSpan = document.createElement('span');

  priceSpan.classList.add('price');
  priceSpan.appendChild(price);
  priceDiv.appendChild(priceSpan);

  return nameDiv, priceDiv;
}

function createNewItemRow(name, price){
  product = document.createElement ('div');
  product.classList.add('product');

  product.appendChild(createDeleteButton());
  product.appendChild(createItemNode(name, price));
  product.appendChild(createQuantityNode());
  product.appendChild(createTotalNode());
}

function createTotalNode () {
  var totalNode = document.createElement('div');
  var priceContainer = document.createElement('span');

  priceContainer.classList.add('product-total-price');
  priceContainer.appendChild(document.createTextNode("$0.00"));

  totalNode.appendChild(priceContainer);
  return totalNode;
}

function createNewItem(){
  var name = document.querySelector(".new-product input[name = 'name']");
  var price = parseFloat(document.querySelector(".new-price input[name = 'price']"));
    if (name && price >= 0) {
      createNewItemRow (name, price);
    }
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

