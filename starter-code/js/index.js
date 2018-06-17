//Function that returns the price given a product
function getPriceByProduct(itemNode){
  return itemNode.getElementsByClassName("productCost")[0].getElementsByTagName("span")[0].innerHTML.slice(1)
}

//Function that returns the quantity given a product
function getQuantityByProduct(itemNode) {
  return itemNode.getElementsByClassName("productQuantity")[0].getElementsByTagName("input")[0].value
}

//Function that calculates the total price given a product
function getTotalPriceByProduct(itemNode) {
  return getPriceByProduct(itemNode) * getQuantityByProduct(itemNode)
}

//Function that updates the total price given a product
function updateTotalPriceByProduct(index) {
  document.getElementsByClassName("productRow")[index].getElementsByClassName("totalProductAmount")[0].getElementsByTagName("span")[0].innerHTML = ("$" + getTotalPriceByProduct(document.getElementsByClassName("productRow")[index]))
}

//Function that calculates the total price of all products
function getTotalPrice() {
  var elements = document.getElementsByClassName("productRow")
  var total = 0
  for (var i = 0; i < elements.length; i++) {
    updateTotalPriceByProduct(i)
    total += parseFloat(elements[i].getElementsByClassName("totalProductAmount")[0].getElementsByTagName("span")[0].innerHTML.slice(1))
  }
  document.getElementById("totalCartAmount").getElementsByTagName("span")[0].innerHTML = "$" + total
}

//Function that deletes an item from the cart
function deleteItem(e){
  e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode)
}


//Function that creates a productName node
function createProductNameNode(itemName) {
  var div = document.createElement("div")
  div.setAttribute("class", "productName")
  var span = document.createElement("span")
  span.appendChild(document.createTextNode(itemName))
  div.appendChild(span)
  return div
}

//Function that creates a productCost node
function createProductCostNode(itemCost) {
  var div = document.createElement("div")
  div.setAttribute("class", "productCost")
  var span = document.createElement("span")
  span.appendChild(document.createTextNode("$"+itemCost))
  div.appendChild(span)
  return div
}

//Function that creates a productQuantity node
function createProductQuantityNode() {
  var div = document.createElement("div")
  div.setAttribute("class", "productQuantity")
  var span = document.createElement("span")
  span.setAttribute("class", "quantity")
  span.appendChild(document.createTextNode("QTY"))
  var input = document.createElement("input")
  input.setAttribute("type", "number")
  input.setAttribute("value", "0")
  input.setAttribute("min", "0")
  div.appendChild(span)
  div.appendChild(input)
  return div
}

//Function that creates a totalProductAmount node
function createTotalProductAmountNode() {
  var div = document.createElement("div")
  div.setAttribute("class", "totalProductAmount")
  var span = document.createElement("span")
  span.appendChild(document.createTextNode("$0.00"))
  div.appendChild(span)
  return div
}

//Function that creates a deleteProduct node
function createDeleteProductNode() {
  var div = document.createElement("div")
  div.setAttribute("class", "deleteProduct")
  var input = document.createElement("input")
  input.setAttribute("type", "button")
  input.setAttribute("value", "Delete")
  input.setAttribute("class", "btn btn-delete")
  input.onclick = deleteItem
  div.appendChild(input)
  return div
}


//Function that creates a new product row
function createNewItem() {
  if (document.getElementById("newProductName").value == "") {
    alert("You must introduce a prodcut name")
  } else if (document.getElementById("newProductCost").value == "") {
    alert("You must introduce a product unitary cost")
  } else {
    var newItem = document.createElement("div")
    newItem.setAttribute("class", "productRow");
    newItem.appendChild(createProductNameNode(document.getElementById("newProductName").value))
    newItem.appendChild(createProductCostNode(document.getElementById("newProductCost").value))
    newItem.appendChild(createProductQuantityNode())
    newItem.appendChild(createTotalProductAmountNode())
    newItem.appendChild(createDeleteProductNode())
    document.getElementById("cart").insertBefore(newItem, document.getElementsByClassName("placeHolderRow")[0])
    document.getElementById("newProductName").value = ""
    document.getElementById("newProductCost").value = ""
  }
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
