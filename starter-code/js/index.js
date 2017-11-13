function deleteItem(e){
  product = e.parentNode.parentNode;
  console.log(product);
  product.parentNode.removeChild(product);
  getTotalPrice();
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  products = document.getElementsByClassName("product");
  var finalPrice = 0;
  for(i = 1; i < products.length; i++) {
    var unitPrice = parseFloat(document.getElementsByClassName("product-unit-price")[i].innerHTML);
    var qty = parseFloat(document.getElementsByClassName("product-qty")[i].value);
    if(!qty) {
      qty = 0;
    }
    var totalItemPrice = unitPrice * qty;
    finalPrice += totalItemPrice;
    totalItemPriceText = document.createTextNode(totalItemPrice);
    document.getElementsByClassName("total-price")[i].innerHTML = "";
    document.getElementsByClassName("total-price")[i].appendChild(totalItemPriceText);
  }
  finalPriceText = document.createTextNode(finalPrice);
  document.getElementById("final-price").innerHTML = "";
  document.getElementById("final-price").appendChild(finalPriceText);
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
  var product = document.getElementById("cart").firstElementChild;
  var clonProduct = product.cloneNode(true);
  clonProduct.className="product";
  var spanElementName = document.createElement("SPAN");
  spanElementName.setAttribute("class", "product-name")
  var spanElementPrice = document.createElement("SPAN");
  spanElementPrice.setAttribute("class", "product-unit-price")
  if(pName = document.getElementById("p-name").value) {
    clonProductName = document.createTextNode(pName);
    if(pPrice = document.getElementById("p-price").value) {
      clonProductUnitPrice = document.createTextNode(pPrice);
    }
    else {
      alert("Insert item price");
    }
  }  
  else {
    alert("Insert item name");
  }

  clonProduct.childNodes[1].innerHTML = "";
  clonProduct.childNodes[1].appendChild(spanElementName).appendChild(clonProductName);
  clonProduct.childNodes[3].innerHTML = "";
  clonProduct.childNodes[3].appendChild(spanElementPrice).appendChild(clonProductUnitPrice);
  document.getElementById("cart").appendChild(clonProduct);
  document.getElementById("p-name").innerHTML = "";
  document.getElementById("p-price").innerHTML = "";
  console.log(document);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  
};
