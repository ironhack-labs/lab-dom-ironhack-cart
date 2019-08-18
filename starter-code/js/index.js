
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let unityPrice = document.getElementsByClassName("cost-first-product");
  let itemQuantity = document.getElementsByClassName("quantity-first-product");
  let subtotal = document.getElementsByClassName("subtotal-first-product");
  let totalPrice = document.querySelector('#total').innerHTML;

  let sum = 0;
  for(let i = 0; i < unityPrice.length; i++) {
    let unitPrice = unityPrice[i].innerHTML.slice(1);
    let result = itemQuantity[i].value * unitPrice;
    sum += result;
    subtotal[i].innerHTML = `$ ${result}`;
  }
  totalPrice = totalPrice.split(" ");
  totalPrice.pop();
  totalPrice.push(`$ ${sum}`);
  totalPrice = totalPrice.join(" ");
  total.innerHTML = totalPrice;

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
 
let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-price");
  let general = document.getElementsByClassName("general");
  let clone = general[0].cloneNode(true);
  clone.querySelector(".name-first-product").innerHTML = document.getElementById("product-name").value;
  clone.querySelector(".cost-first-product").innerHTML = "$" + document.getElementById("product-price").value;
  clone.querySelector(".quantity-first-product").value = "";
  clone.querySelector(".subtotal-first-product").innerHTML = "$0";
  clone.querySelector(".btn-delete").onclick = function(){
    this.parentNode.parentNode.remove();
  }
  container.appendChild(clone);
}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
 

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}; 
