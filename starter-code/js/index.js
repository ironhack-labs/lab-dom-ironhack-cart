function deleteItem(e){

}

let $amountOfUnits= document.querySelector("input");
let $unitPrice= document.querySelector('.unit-price'); //I am not using this 🧐
let $inputs = document.querySelectorAll("input")
let $productTotal = document.querySelector(".product-price")
let $allProductTotals =document.querySelectorAll(".product-price")
let $totalPrice = document.querySelector(".total")
let $calcTotalBtn = document.querySelector (".btn-success")

for (let i = 0; i < $inputs.length; i++) {
  $inputs[i].onchange = function () {
    // console.log("The quantity of items has changed")
    getPriceByProduct($inputs[i])
  }
}

$calcTotalBtn.onclick = function () {
  // console.log("The quantity of items has changed")
  getTotalPrice();
}

// Here I selected Items by row to change the correct value in every new row (had some help 😏 )
function getPriceByProduct($input){
  let $row = $input.parentElement.parentElement
  let value= $input.value * $row.querySelector('.unit-price').innerText;
  // console.log("The button was clicked and the value is", value)
  $row.querySelector('.product-price').innerText = value
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() { 
  let sum = 0
  for (let i = 0; i < $allProductTotals.length; i++) {
     sum +=Number($allProductTotals[i].innerText);
  }
  $totalPrice.innerText = sum
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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};

