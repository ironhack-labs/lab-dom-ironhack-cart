function deleteItem(e) {
  var deleteRow = e.currentTarget.parentNode.parentNode.parentNode;
  var tbody = document.getElementsByTagName("tbody")[0];
  tbody.removeChild(deleteRow);
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  var rows = document.getElementsByTagName("tr");
  rows = [].slice.call(rows);
  var totalPrice = 0;
  for (let i = 0; i < rows.length - 1; i++) {
    var priceContainer = rows[i].getElementsByClassName("cost")[0];
    var price = priceContainer.children[0].innerHTML.substr(1); //  Have $25;
    var priceInt = parseInt(price);
    var qty = rows[i].getElementsByClassName("quantity")[0];
    var productTotal = priceInt * qty.value;
    var productTotalPriceContainer = rows[i].getElementsByClassName("total_price")[0];
    productTotalPriceContainer.innerHTML = "$" + productTotal; totalPrice = totalPrice + productTotal;    
  }
  var totalPriceSpan = document.getElementsByClassName("total")[0].getElementsByTagName("span")[0];
  
totalPriceSpan.innerHTML = "$" + totalPrice;
  
}

function createQuantityInput() {

}

function createDeleteButton() {


}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {
var inputProduct = document.getElementById("input_product").value;
var inputPrice = document.getElementById("input_cost").value;
var tbody = document.getElementsByTagName("tbody")[0];
var row = document.createElement("tr");
row.innerHTML = "<td> <div class=\"product_name\"><span>" + inputProduct + "</span></div></td><td><div class=\"cost\"><span>$"+ inputPrice +"</span></div></td><td><div><label>QTY</label><input class=\"quantity\" type=\"number\" value = \"0\"></div></td><td><div class=\"total_price\">  <span>$0.00</span></div></td><td><div><button class=\"btn btn-delete\" type=\"button\">Delete</button></div></td>";
var lastRow = document.getElementById("create");
tbody.insertBefore(row, lastRow);
var deleteButton = row.getElementsByTagName("button")[0];
deleteButton.onclick = deleteItem;
document.getElementById("input_product").value = "";
document.getElementById("input_cost").value = "";
}


window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};