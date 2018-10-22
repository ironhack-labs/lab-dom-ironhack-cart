//Global variables
const productPrice = document.getElementsByClassName("price");
const productQuantity = document.getElementsByClassName("quantity");
const totalPriceDisplay = document.getElementsByClassName("total");
const actualTotal = document.getElementById("calc-prices");
const totalArr = [];
let totalValue;

let deleteButtons = document.getElementsByClassName("btn-delete"); 

let newProductName = document.getElementById("product-name");
let newProductPrice = document.getElementById("product-price");

const parent = document.getElementsByTagName("div")[0];

for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}

function deleteItem(e){
  console.log("know")

  e.currentTarget.parentNode.parentNode.remove();
}

function getTotalPrice() {
  totalArr.splice(0, totalArr.length)
  for(let i = 0; i < productPrice.length; i++){
    totalPriceDisplay[i].textContent = productPrice[i].textContent * productQuantity[i].value;
    totalArr.push(parseInt(totalPriceDisplay[i].textContent));
  }
  //totalPriceDisplay.innerText = productPrice * productQuantity; 
  totalValue = totalArr.reduce((acc, cv) => acc += cv);
  actualTotal.textContent = "$" + totalValue;
}

//function getPriceByProduct(itemNode){

//}

//function updatePriceByProduct(productPrice, index){

//}

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
  let name = newProductName.value.toString(); 
  let price = newProductPrice.value.toString();
  //CREATE ELEMENTS
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  let div5 = document.createElement("div");
  let divWrapper = document.createElement("div")
  let label = document.createElement("label");
  let input = document.createElement("input");
  let deleteButton = document.createElement("button");

  //CREATE TEXT NODES
  let productInputLabel = document.createTextNode(name);
  let priceInputLabel = document.createTextNode(price + ".00");
  let priceTotal = document.createTextNode("00.00");
  let quantityLabel = document.createTextNode(" QTY ");
  let divText = document.createTextNode(" $");
  let divText2 = document.createTextNode(" $");
  let deleteButtonText = document.createTextNode("Delete");

  divWrapper.setAttribute("class", "wrapper");
  span1.appendChild(productInputLabel)
  div1.appendChild(span1)
  div2.appendChild(divText2)
  divWrapper.appendChild(div1)
  div2.appendChild(divText)
  span2.appendChild(priceInputLabel)
  span2.setAttribute("class", "price")
  div2.appendChild(span2)
  divWrapper.appendChild(div2)
  label.appendChild(quantityLabel)
  input.setAttribute("class", "input quantity");
  input.setAttribute("type", "number");
  label.appendChild(input)
  div4.appendChild(divText);
  div3.appendChild(label)
  divWrapper.appendChild(div3)
  span3.appendChild(priceTotal)
  span3.setAttribute("class", "total")
  div4.appendChild(span3)
  divWrapper.appendChild(div4);
  deleteButton.setAttribute("class", "btn btn-delete");
  deleteButton.appendChild(deleteButtonText)
  div5.appendChild(deleteButton);
  divWrapper.appendChild(div5);
  parent.appendChild(divWrapper);

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
} 

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
};
