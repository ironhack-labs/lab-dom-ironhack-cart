/* function Item = function(){
  this.name = ,
  this.price = ,
  this.quantity = 0,
  this.total = ,

} */

function deleteItem(e){
  //document.body.removeChild(e.currentTarget.parentNode.parentNode)
  document.body.removeChild(e.path[1].parentNode)
  getTotalPrice();
  //console.log(e)
  //console.log(e.path[1].parentNode.innerHTML = "")
  //let wrappers = document.getElementsByClassName( e.path[2].className)
  //console.log(wrappers)
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}


function getTotalPrice(){
  let priceElements = document.getElementsByClassName("price");
  let quantityElements = document.getElementsByTagName("input");
  let totalElements = document.getElementsByClassName("total");
  let checkOut = 0;
  for(let i=0 ; i < priceElements.length ; i++){
    let price = parseFloat(priceElements[i].innerHTML.split(" ")[1]);
    let quantity = parseFloat(quantityElements[i].value)
    let total = price * quantity;
    console.log(price, quantity)
    totalElements[i].innerHTML = `$ ${total}`;  
    checkOut += total;
  }
  checkOut.toPrecision(1)
  let createCheckOutElement = document.createElement("h2")
  let spanTag = document.createElement("span")
  spanTag.innerHTML = "$"+checkOut
  createCheckOutElement.appendChild(spanTag)
  let parent = document.getElementsByTagName("body")[0];
  parent.appendChild(createCheckOutElement);
  console.log(checkOut)
}


function createQuantityInput(){
  let input = document.createElement("input")
  input.setAttribute("type","0")
  input.setAttribute("min","0")
  input.setAttribute("value","0")

}

function createDeleteButton(){

}

function createQuantityNode(){
  let div = document.createElement("div")
  let label = document.createElement("label")
  let text = document.createTextNode("QTY")
  label.appendChild(text)
  div.appendChild(label)
  console.log(div)
}

function createItemNode(dataType, itemData){
  let itemDescriptionElement = document.createElement("div")
  let span = document.createElement("span")
  let text = document.createTextNode(itemData)
  span.appendChild(text)
  itemDescriptionElement.appendChild(span)
  console.log(span)
  console.log(itemDescriptionElement.parentNode)
}



 
function createNewItemRow(itemName, itemUnitPrice){
  //console.log(itemName, itemUnitPrice)
  let div = document.createElement("div")
  let divatt = div.setAttribute("class","wrapper")
  //console.log(div)
  document.body.insertBefore(div,document.getElementById("create-wrapper"))
  itemDescription = document.createTextNode(itemName)
  itemPriceText = document.createTextNode(itemUnitPrice)
  console.log(itemDescription)
  //div.appendChild(createItemNode(itemPriceText,itemDescription))
  createQuantityNode()
  
}

function createNewItem(){
  let itemElement = document.getElementById("newItem");
  let itemUnitPriceElement = document.getElementById("newItemUnitPrice")
  let name = itemElement.value;
  let price = itemUnitPriceElement.value;
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
