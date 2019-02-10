function deleteItem(e){
  var item = e.currentTarget.parentNode.parentNode
  var parent = item.parentNode
  parent.removeChild(item)
}

function getPriceByProduct(itemNode){
  var total = parseFloat(itemNode.children[1].children[0].innerText) * parseFloat(itemNode.children[2].firstElementChild.children[1].value)
  itemNode.children[3].children[0].innerText = total
  return total
}

/* This function seems unneccesary for me

function updatePriceByProduct(productPrice, index){

}
*/


function getTotalPrice() {
  var total = 0
  var products = document.querySelectorAll(".item")
  for (var i=0; i<products.length; i++){
    total += getPriceByProduct(products[i])
  }
  var totalpriceitem = document.querySelectorAll(".calccontainer")
  totalpriceitem[1].querySelector("span").innerText = total
}

function createQuantityInput(node){
  var newDiv = document.createElement("div")
  var newForm = document.createElement("form")
  var newLabel = document.createElement("label")
  var newInput = document.createElement("input")

  newLabel.innerText="QTY"
  newInput.setAttribute("type","number")
  newInput.setAttribute("value","0")

  newForm.append(newLabel,newInput)
  newDiv.appendChild(newForm)
  node.appendChild(newDiv)
}

function createDeleteButton(){
  var newDIV = document.createElement("div")
  var newButton = document.createElement("button")

  newButton.className = "btn btn-delete"
  newButton.innerText = "Delete"
  newButton.onclick = deleteItem

  newDIV.appendChild(newButton)
  return newDIV
}

function createQuantityNode(node){
  var newDIV = document.createElement("div")
  var newSpan = document.createElement("span")

  newDIV.innerText = "$"
  newSpan.innerText = "0"

  newDIV.appendChild(newSpan)
  node.appendChild(newDIV)
}

/* This function could be used to make createNewItemRow shorter but it's ok

function createItemNode(dataType, itemData){

}
*/

function createNewItemRow(itemName, itemUnitPrice){
  products = document.querySelector(".products")
  var newDIV = document.createElement("div")
  var newDIVname = document.createElement("div")
  var newSpanName = document.createElement("span")
  var newDIVprice = document.createElement("div")
  var newSpanprice = document.createElement("span")

  newSpanName.innerText = itemName
  newDIVprice.innerText = "$"
  newSpanprice.innerText = itemUnitPrice
  newDIV.className = "item"

  products.appendChild(newDIV)
  newDIV.append(newDIVname,newDIVprice)
  newDIVname.appendChild(newSpanName)
  newDIVprice.appendChild(newSpanprice)

  createQuantityInput(newDIV)
  createQuantityNode(newDIV)
  newDIV.appendChild(createDeleteButton())
}

function createNewItem(e){
  var div = e.currentTarget.parentNode.parentNode
  var name = div.children[0].children[0].children[1].value
  var price = div.children[1].children[0].children[1].value
  createNewItemRow(name,price)
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
