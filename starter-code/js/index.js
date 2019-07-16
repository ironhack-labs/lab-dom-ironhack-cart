function deleteItem(e){
  let child = e.currentTarget.parentNode.parentNode
  //e.currentTarget.closest(child)
  let parent = child.parentNode
  parent.removeChild(child)
}

// function updatePriceByProduct(productPrice, index){
// }

function getPriceByProduct(itemNode){
  let productQty = parseFloat(itemNode.getElementsByClassName("qty")[0].value)
  let productPrice = parseFloat(itemNode.getElementsByClassName("product-price")[0].innerHTML)
  return productPrice * productQty
}

function getTotalPrice() {
  let items = document.getElementsByClassName("items")
  var total = 0
  for(let i=0; i<items.length;i++){
    let currItem = items[i]
    let totalPricePerItem = getPriceByProduct(currItem)
    currItem.getElementsByClassName("total-price")[0].innerHTML = totalPricePerItem
    total += totalPricePerItem
  }
  document.getElementById("the-total").innerHTML = total
}

function createQuantityInput(container){
  let newLabel = document.createElement("label")
  newLabel.setAttribute("for","quantity")
  container.appendChild(newLabel).innerHTML = "QTY "

  let newInput = document.createElement("input")
  newInput.setAttribute("class","qty")
  newInput.setAttribute("type","input")
  newInput.setAttribute("id","quantity")
  container.appendChild(newInput)
}

function createDeleteButton(container){
  let divWrapper = document.createElement("div")
  container.appendChild(divWrapper)
  let newDltBtn = document.createElement("button")
  newDltBtn.setAttribute("class","btn-delete")
  newDltBtn.setAttribute("type","button")
  divWrapper.appendChild(newDltBtn).innerHTML = "Delete"
}

function createItemNode(newItem, dataType, itemData){
  let divWrapper = document.createElement("div")
  newItem.appendChild(divWrapper)
  if ( typeof(itemData) == "string") {
    let productName = document.createElement(dataType)
    divWrapper.appendChild(productName).innerHTML = itemData
  } else if (typeof(itemData) === "number") {
    let pWrapper = document.createElement("p")
    divWrapper.appendChild(pWrapper).innerHTML = "$"
    let productPrice = document.createElement(dataType)
    productPrice.setAttribute("class","product-price")
    pWrapper.appendChild(productPrice).innerHTML = itemData
  }
}

function createTotalPrice(container) {
  let newItem = document.createElement("p")
  container.appendChild(newItem).innerHTML = "The price is: $"

  let newItemsTotalPrice = document.createElement("span")
  newItemsTotalPrice.setAttribute("class","total-price")
  newItem.appendChild(newItemsTotalPrice)
}


function createNewItem(){
  let newItem = document.createElement("div")
  newItem.setAttribute("class","items")
  document.getElementById("items-wrapper").appendChild(newItem)

  let itemName = document.getElementsByClassName("new-product")[0].value
  let itemPrice = parseFloat(document.getElementsByClassName("new-price")[0].value)
  
  createItemNode(newItem, "span", itemName)
  createItemNode(newItem, "span", itemPrice)
  createQuantityInput(newItem)
  createTotalPrice(newItem)
  createDeleteButton(newItem)
  addDeleteFunc()
}

function addDeleteFunc(){var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  calculatePriceButton.onclick = getTotalPrice;

  addDeleteFunc();
  
  var createItemButton = document.getElementById('new-item-create');
  createItemButton.onclick = createNewItem;

};
