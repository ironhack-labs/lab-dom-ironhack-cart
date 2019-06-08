function deleteItem(e){

}

let $amountOfUnits= document.querySelector("input").value;
let $unitPrice= document.querySelector('.unit-price').innerHTML;
let $inputButton = document.querySelector("input")
let $productTotal = document.querySelector(".product-price").innerHTML
$inputButton.onclick = function () {
  // console.log("The quantity of items has changed")
  getPriceByProduct()
}

//CHECK COMMENTS!
function getPriceByProduct(/*itemNode*/){
  let value= (document.querySelector("input").value)/*Using the variable $amountOfUnits doesnt work*/*$unitPrice;
  // console.log("The button was clicked and the value is", value)
  document.querySelector(".product-price").innerHTML = value
}

function updatePriceByProduct(productPrice, index){

}

/*Can't declare variables 🤯  and cant make the math*/
function getTotalPrice() { 
  Number(document.querySelector(".total").innerHTML)+=Number(document.querySelector(".product-price").innerHTML);
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
