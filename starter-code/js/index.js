
// var productUnit = document.querySelector(".unit-cost");
// var productQty = document.querySelector(".qty-input");

// var productPrice = productUnit * productQty;
// return productPrice;

// var myBtn = document.querySelector(".add-btn");
// myBtn.onclick = function(){

//     var newItem = document.createElement("li");
//     var myInput = document.querySelector(".food-input");
//     if (myInput.value==="") {
//         return;
//     }

//     newItem.innerHTML = myInput.value + "<button>Delete</button>";

//     var list = document.querySelector(".food-list");

//     list.appendChild(newItem);

//     myInput.value="";
// };

// var deleteButtons = document.querySelectorAll(".food-list button");
// deleteButtons.forEach(function(oneButton){
//     oneButton.onclick=function(event){
//         var clickedButton = event.target;
//         var clickedLi = clickedButton.parentNode;

//         var list = document.querySelector(".food-list");
//         list.removeChild(clickedLi);
//     }
//     })

console.log("helloe ")

// function deleteItem(e){
// var itemToDelete = document.querySelector(".del-btn");
// console.log("delete");
// }

function getPriceByProduct(itemNode){
  var productPrice = document.querySelectorAll(".unit-cost");
  for (i=0; i < productPrice.length; i++){
    
    var ppContent = productPrice[i].textContent;
    var ppContentArray = ppContent.split('$');
    ppContentArray.splice(0,1);
    var finalPrice= Number(ppContentArray);
    return finalPrice
  }
}


// function updatePriceByProduct(productPrice, index){

// }

function getTotalPrice() {

// step 1: computing total price 
  var unitPrice = getPriceByProduct();
  console.log(unitPrice)
  // console.log(unitPrice);
  var updatedQty =  createQuantityInput();
  // console.log(updatedQty);
  var totalPrice = (unitPrice * updatedQty).toFixed(2);
  console.log(totalPrice) 

// step 2: updating total-price DOM
  // var currentPrice = document.querySelectorAll(".total-price");
  // currentPrice.innerHTML = "$" + totalPrice
}

function createQuantityInput(){
  var inputQty = document.querySelectorAll(".qty-input");
    for (i=0; i < inputQty.length ; i++){
   return inputQty[i].value;
}
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
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('del-btn');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
