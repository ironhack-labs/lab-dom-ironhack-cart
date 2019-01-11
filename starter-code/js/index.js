function deleteItem(e){
  //console.log(e.currentTarget.parentNode.parentNode)
  var divProduct = e.currentTarget.parentNode.parentNode
  var divCart = divProduct.parentNode

  divCart.removeChild(divProduct)
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrice = document.querySelectorAll(".unitPrice")
  
  var qty = document.querySelectorAll(".input")
  var total = document.querySelectorAll(".total")
  
  unitPrice.forEach(function(price,index){
    total[index].innerHTML = "$"+parseFloat(price.innerHTML.replace("$","")) * qty[index].value
  })

  var totalCart=document.querySelectorAll(".totalCart")
  var sum=0;
  total.forEach(function(valor){
    sum += parseFloat(valor.innerHTML.replace("$",""))
  })
  totalCart[0].innerHTML = "$"+sum
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
  var newName = document.querySelector(".newName").value
  var newPrice = "$"+document.querySelector(".newPrice").value
  var divProducts = document.querySelector(".divProducts")

  var divProduct = document.createElement("div")
  divProduct.className="product"
  

var textNewName = document.createTextNode(newName)
var spanNewName = document.createElement("span")
var divNewName = document.createElement("div")
divNewName.className="col"

var textUnitPrice = document.createTextNode(newPrice)
var spanUnitPrice = document.createElement("span")
spanUnitPrice.className="unitPrice"
var divUnitPrice = document.createElement("div")
divUnitPrice.className="col" 

var textQTY = document.createTextNode("QTY")
var labelQTY = document.createElement("label")
labelQTY.className = "quantity"
var inputQTY = document.createElement("input")
inputQTY.className="input"
inputQTY.nodeType="text"
var divQTY = document.createElement("div")
divQTY.className="col" 

var textTotal = document.createTextNode("0")
var spanTotal = document.createElement("span")
var divTotal = document.createElement("div")
divTotal.className="col"

var textDelete = document.createTextNode("Delete")
var buttonDelete = document.createElement("button")
buttonDelete.className="btn btn-delete"
var divDelete = document.createElement("div")
divDelete.className="col"


spanNewName.appendChild(textNewName)
divNewName.appendChild(spanNewName)
divProduct.appendChild(divNewName)

spanUnitPrice.appendChild(textUnitPrice)
divUnitPrice.appendChild(spanUnitPrice)
divProduct.appendChild(divUnitPrice)

labelQTY.appendChild(textQTY)
divQTY.appendChild(labelQTY)
divQTY.appendChild(inputQTY)
divProduct.appendChild(divQTY)

spanTotal.appendChild(textTotal)
divTotal.appendChild(spanTotal)
divProduct.appendChild(divTotal)

buttonDelete.appendChild(textDelete)
divDelete.appendChild(buttonDelete)
divProduct.appendChild(divDelete)


  //divProduct.appendChild(divCol.appendChild(document.createElement("span").appendChild(document.createTextNode(newName))))

  divProducts.appendChild(divProduct)

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
