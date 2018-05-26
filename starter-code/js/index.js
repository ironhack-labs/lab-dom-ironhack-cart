
// CalculatePrices Button Listener
var button = document.getElementById("calc");
button.onclick = function(){
  calculatePrices()
}

function calculatePrices() {
  var numProducts = document.getElementsByClassName('product').length - 1
  var grandTotal = 0;
  for (var i=0; i<numProducts; i++) {
    var price = document.getElementsByClassName('product-cost')[i].innerText;
    var quantity = document.getElementsByClassName('quantity')[i].value;
    var subTotal = price * quantity;
    var total = document.getElementsByClassName('total')[i];
    total.innerText = subTotal.toFixed(2);
    grandTotal += subTotal;
  }
  var totalPrice = document.getElementsByClassName('total-price')[0];
  totalPrice.innerText = grandTotal.toFixed(2);
}

// Delete Button Listeners
function refreshDeleteListeners() {
  var deleteButtons = document.getElementsByClassName("btn-delete");
  for (var i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].onclick = function(e){
      deleteButton(e)
    }
  }
}
refreshDeleteListeners()


function deleteButton (e) {
  e.currentTarget.parentNode.parentNode.remove();
  calculatePrices()
}

// AddProduct Button Listeners
var addProductButton = document.getElementById("add");
addProductButton.onclick = function(){
  addProduct()
}


function addProduct() {
  var newItem = document.getElementById('new-product').value;
  var newItemPrice = document.getElementById('new-price').value
  newItemPrice = parseFloat(newItemPrice).toFixed(2)
  var html = '<div class="product">'
  html += '<span class="product-name">' + newItem + '</span>'
  html += '<span class="product-cost">' + newItemPrice + '</span>'
  html += '<span class="product-qty"><label for="quantity">QTY </label><input class="quantity" name="quantity" type="text" value="0"></span>'
  html += '<span class="total">0.00</span>'
  html += '<span class="delete"> <button class="btn btn-delete">Delete</button></span>'
  html += '</div><div class="insert-product"></div>'
  var inserts = document.getElementsByClassName("insert-product")
  inserts[inserts.length-1].innerHTML = html;
  document.getElementById('new-product').value = "";
  document.getElementById('new-price').value = "";
  refreshDeleteListeners()
  calculatePrices()
}



// function deleteItem(e){
// }
// function getPriceByProduct(itemNode){
// }
// function updatePriceByProduct(productPrice, index){
// }
// function getTotalPrice() {
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
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
