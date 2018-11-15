function deleteItem(e){
  var product = document.getElementById('line'); 
   product.remove(e.target.parentNode.parentNode); 
   getTotalPrice();
}

function getPriceByProduct(product){
  var priceProduct = product.querySelector('.price-und span').innerHTML;
  var qtyProduct =  product.querySelector('input[name="qty"]').value;
  return priceProduct * qtyProduct;
}

function updatePriceByProduct(product, productPrice){
  product.querySelector('.total-price span').innerHTML = productPrice;
}

function getTotalPrice() {
  var products = document.querySelectorAll('.product');
  var priceTotal = 0;
  for (var i = 0, l = products.length; i < l; i++){
    var productPrice = getPriceByProduct(products[i]);
    updatePriceByProduct(products[i], productPrice);
    priceTotal += productPrice;
   }
   document.querySelector('h2 span').innerHTML = priceTotal;
}

function createQuantityInput(qty){
  var divTag = document.createElement("div");
  divTag.classList.add("price-und");
  var spanTag = document.createElement("span");
  spanTag.appendChild(document.createTextNode(qty))
  divTag.appendChild(spanTag)

  return divTag;
}

function createDeleteButton(){
  var divTag = document.createElement("div");
  var spanTag = document.createElement("span");
  divTag.appendChild(spanTag);
  var btnTag = document.createElement("button");
  btnTag.classList.add("btn-delete");
  btnTag.appendChild(document.createTextNode("Delete"));
  spanTag.appendChild(btnTag)
  btnTag.addEventListener("click", deleteItem)

  return divTag;
}

function createQuantityNode(){
  //crear un imput para luego rellenarlo
}

function createNewItemName(name){
  var divTag = document.createElement("div");
  divTag.classList.add("name");
  var spanTag = document.createElement("span");
  spanTag.appendChild(document.createTextNode(name))
  divTag.appendChild(spanTag)

  return divTag;
}

// function createItemNode(dataType, itemData){
  
// }

function createNewItemRow(itemName, itemUnitPrice){
 
 
}

function createNewItem(){
  var name = document.getElementById("input-name").value;
  var qty = document.getElementById("input-price").value;
  var container = document.querySelector(".container") 
  container.appendChild(createNewItemName(name));
  container.appendChild(createQuantityInput(qty));
  container.appendChild(createDeleteButton());
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
 
  var total = document.getElementsByClassName(".calc-prices-button span");
  var priceProduct = document.getElementsByClassName(".price-und");
 
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

 for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};