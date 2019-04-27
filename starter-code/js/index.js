//Variables
let productName = document.getElementsByClassName("product-name")
let unitPrice = document.getElementsByClassName("cost")//[0]
let userInput = document.getElementsByClassName("input")//[0]
let calculatePriceButton = document.getElementsByClassName("btn-success")[0]
let totalPrice = document.getElementsByClassName("total-price")//[0]
let products = document.getElementsByTagName("li")
// for(i=0; i<userInput.length; i++){
//   userInput.value = 1;
// }
calculatePriceButton.onclick = () => {
  updatePriceToAllProducts()
}
function getTotalPrice() {
  let result = unitPrice.innerText * parseInt(userInput.value)
  //console.log(result)
  //return result
  totalPrice.innerHTML = result;
}

function updatePriceToAllProducts(){
  for(i=0; i<products.length; i++){
    let result = unitPrice[i].innerText * parseInt(userInput[i].value)
    totalPrice[i].innerHTML = result;
  }
} 








function deleteItem(e){

}

function getPriceByProduct(itemNode){
 
}

function updatePriceByProduct(productPrice, index){
  
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
  //var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  
  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
