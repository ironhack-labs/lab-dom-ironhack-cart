function deleteItem(e){
  var wrapper = e.currentTarget.parentNode
  var container = document.getElementsByClassName("container")[0]
  return container.removeChild(wrapper)
}

function getPriceByProduct(itemNode){
  var price = itemNode.querySelector("span.price")
  return parseInt(price.innerHTML)
}

function updatePriceByProduct(productPrice, qty, index){
  var total = productPrice * qty
  var product = document.getElementsByClassName("product")[index]
  return product.querySelector("span.total").innerHTML = total 
}

function getTotalPrice() {
  var product = document.getElementsByClassName("product")
  var total = 0
  for(var i=0; i<product.length; i++) {
    var price = product[i].querySelector("span.price").innerHTML
    var qty  = product[i].querySelector("#number-product").value
    updatePriceByProduct(price, qty, i)
    total += (price * qty)
  }
  return document.querySelector("span.total-price").innerHTML = total; 
}

function createQuantityInput(){
  var input = document.createElement("input")
  input.setAttribute("type","text")
  input.setAttribute("id","number-product")
  input.setAttribute("placeholder","0")
  return input
}

function createDeleteButton(){
  var button = document.createElement("button")
  button.setAttribute("class","btn btn-delete")
  button.innerHTML = "Delete"
  button.addEventListener("click", deleteItem)
  return button
}

function createQuantityNode(){
  var node = document.createElement("div")
  node.setAttribute("class","num-product")
  var label = document.createElement("label")
  label.setAttribute("for","number-product")
  label.innerHTML = "QTY"
  node.appendChild(label)
  node.appendChild(createQuantityInput())
  return node
}

function createItemNode(dataType, itemData){
  var item = document.createElement("div")
  var span = document.createElement("span")
  if(itemData.length !== 0) {
    item.innerHTML = "$"
    span.setAttribute("class", itemData)
  }
  span.innerHTML = dataType
  item.appendChild(span)
  return item
}

function createNewItemRow(itemName, itemUnitPrice){
  var row = document.createElement("div")
  row.setAttribute("class","product")
  row.appendChild(createItemNode(itemName,""))
  row.appendChild(createItemNode(itemUnitPrice,"price"))
  row.appendChild(createQuantityNode())
  row.appendChild(createItemNode("0.00","total"))
  row.appendChild(createDeleteButton())
  return row
}

function createNewItem(){
  var a = document.getElementById("product-name").value
  var b = document.getElementById("product-price").value
  var location = document.getElementsByClassName("container")[0]
  return location.appendChild(createNewItemRow(a,b))
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
