var totalPrice = getTotalPrice();
var product = document.querySelector("body > div > div.flex.cart-info > div:nth-child(1) > h3");
var row = document.getElementsByClassName('row');
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(productPrice) {
  document.getElementById('btn-cal-price').onclick = function calculatePrice(e) {
    for(r=0;r<row.length;r++){
    let productPrice = document.getElementsByClassName('product-price')[r].children[0].children[0].innerText.replace('$',"");
    let qty = document.getElementsByClassName('quantity')[r].children[1].value
    console.log(qty);
    console.log(productPrice);
    totalPrice = productPrice * qty;
    document.getElementsByClassName('total')[r].children[0].children[0].innerText = `$${totalPrice}`
  }
  calculateTotalPrice();
}
}
//.innerText.replace('$','');
//.children[0].children[0].innerText
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

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

//document.querySelector("#btn-cal-price > button") = calculatePrice() ;


function calculateTotalPrice() {

  let total = 0

  for(r=0; r<row.length; r++){
    let singleItemPrice = parseFloat(document.getElementsByClassName('total')[r].innerText.slice(1))
    console.log(singleItemPrice)
    total += singleItemPrice
  
  }

  console.log(total)
  

}