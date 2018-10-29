//



let byClass = (theClass=>{return document.getElementsByClassName(theClass)})


let by = (id=>{return document.getElementById(id)})

let byId = (id=>{return document.getElementById(id)})


let button = byId("cal-button")

let inputF = byId("inputF") 


let inputArr = byClass("totalPrice")
console.log(inputArr)
// button.onclick(()=>{

// })
console.log(button)
console.log(inputF)

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {


  // let totalPrice = document.("itemPrice");
}

// let calcButton = (getDocumentByID);

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

}

window.onload = function(){
  // var calculatePriceButton = document.getElementByClassName('calc-prices-button');

  // var createItemButton = document.getElementByClassName('new-item-create');

  // var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }

  // <div class="container">
  //     <button onclick="this.innerHTML = 'You clicked'">Click Me</button>
  // </div>
};
