// let inputF = byId("inputF")




function deleteItem(e){
  
}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
    let inputF = byClass("inputF");
    let totalPrice = byClass("totalPrice");
    let itemPrice = byClass("itemPrice");
    for(let i = 0; i < itemPrice.length; i++){
      let currPrice = itemPrice[i].innerHTML;
      let currInput = inputF[i].value;
      let currTPrice = currPrice*currInput;
      totalPrice[i].innerHTML = currTPrice;
      console.log(currTPrice);
    }
    
    // take value in the center bar and multiply it by the item price.
    
    // let totalPrice = document.("itemPrice");
  }
  

// multiply amount units by itemPrice
// default price = 0

let byClass = (theClass=>{return document.getElementsByClassName(theClass)})


let by = (id=>{return document.getElementById(id)})

let byId = (id=>{return document.getElementById(id)})


let button = byId("calc-button")



let inputArr = byClass("totalPrice")
console.log(inputArr)
// button.onclick(()=>{

// })

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
  let calculatePriceButton = document.getElementById('calc-prices-button');

  // var createItemButton = document.getElementByClassName('new-item-create');

  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }

  // <div class="container">
  //     <button onclick="this.innerHTML = 'You clicked'">Click Me</button>
  // </div>
};






// var arr = [].slice.call(htmlCollection)
// Generates a random color in hexadecimal (ie. #62b9cc)
// function generateRandomColor() {
//   return '#'+Math.floor(Math.random()*16777215).toString(16);
// }

// function changeColor() {
//   var discoBoxes = document.getElementsByClassName("disco-box");
//   for (i=0; i<discoBoxes.length; i++) {
//     discoBoxes[i].style.backgroundColor = generateRandomColor();
//   }
// }

// setInterval(changeColor, 2400)