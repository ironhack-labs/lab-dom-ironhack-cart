
var parentElement = document.getElementsByTagName('body')[0];
//console.log(parentElement);
var parentDiv = document.getElementById("main-div")
//console.log(parentDiv);

// I think I didnt needed to creat each single element this way, but just I did it just for practice
// Create the first div with the name of the product
var nameOfProductDiv = document.getElementById("nameOfProduct");
var spanNameOfProduct = document.createElement("span");
var nameOfProduct = document.createTextNode("IronBubble-head");
//console.log(spanNameOfProduct);
spanNameOfProduct.appendChild(nameOfProduct);
nameOfProductDiv.appendChild(spanNameOfProduct);


//Create the cost of just 1 item - single cost
var singlePriceDiv = document.getElementById("singlePrice");
//console.log(singlePriceDiv);
var spanSingleCost = document.createElement("span");
spanSingleCost.setAttribute("id", "individual-cost")
var singleCost = document.createTextNode("$25" )
spanSingleCost.appendChild(singleCost);
singlePriceDiv.appendChild(spanSingleCost);

var updatePriceDiv = document.getElementById("total-price");
var spanUpdatePrice = document.createElement("span");
spanUpdatePrice.setAttribute("id", "update-price");
var updatedPrice = document.createTextNode(0.00)
spanUpdatePrice.appendChild(updatedPrice);
updatePriceDiv.appendChild(spanUpdatePrice);


function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var singlePriceElement = document.getElementById("individual-cost");
  singlePrice = singlePriceElement.innerText.split("$")
  //console.log((parseInt(singlePrice[1])));
  return parseInt(singlePrice[1])
}

var getPriceByProd = getPriceByProduct(singleCost);
//console.log(getPriceByProd);

function updatePriceByProduct(productPrice, input){
  var valueToUpdate = document.getElementById("update-price");
  var getQtyInput = document.getElementById("calculate-prices-button");  
  getQtyInput.onclick = function(){
  var input = document.getElementsByTagName("input")[0];
    //console.log(parseInt(input.value));
    
  var total = valueToUpdate.innerText = productPrice * parseFloat(input.value);
  console.log("$"  + total);
  return  total
  }
}

updatePriceByProduct(getPriceByProd, inputFromUser)

function getTotalPrice(inputFromUser, getPriceByProd) {
  var totPrice = inputFromUser * getPriceByProd;
    return " $" + totPrice;
}
var getTotalPrice = getTotalPrice(inputFromUser, getPriceByProd);


// function createQuantityInput(){
//   var getQtyInput = document.getElementById("calculate-prices-button");  
//   getQtyInput.onclick = function(){
//     var input = document.getElementsByTagName("input")[0];
//     //console.log(parseInt(input.value));
//     return parseInt(input.value)
//   }
// }

var inputFromUser = createQuantityInput();


function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

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
