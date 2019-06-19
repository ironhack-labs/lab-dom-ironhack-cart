// function deleteItem(e){
// let itemDelete = document.getElementsByClassName('btn-delete')
// console.log(itemDelete) 
// for (let i=0;  i<itemDelete.length; i++){
//   var button = itemDelete[i]
//   button.addEventListener('click', function(event){
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//     updatePriceByProduct()
//   }

// }


window.onload =function(){
let calbtn = document.querySelector(".btnC");
calbtn.addEventListener("click",getPriceByProduct);
let Qty = document.getElementsByClassName('quantity');
let totalCost = document.getElementsByClassName('totalCost');
let totalAmt = document.querySelector(".grandtotal");
let allItems = document.querySelector(".all");

function getPriceByProduct(e){

  let price = document.getElementsByClassName('amount');
  for (let i=0; i<price.length; i++){
    let newPrice = price[i].innerHTML.split("$");
    let xPrice = parseFloat(newPrice[1]);
  let total = xPrice * parseFloat(Qty[i].value);

totalCost[i].innerText = total.toFixed(2);
  //console.log(totalCost[i]);

let grandTotal = 0;
for (let a=0; a<totalCost.length; a++){
  let X = parseFloat(totalCost[a].innerHTML);
  grandTotal += X;
}
totalAmt.innerText = grandTotal.toFixed(2);
  }
}


allItems.addEventListener("click",deleteItem);

function deleteItem(e){
  if(e.target.classList.contains('btn-delete')){
    e.target.parentElement.parentElement.remove();
  }
console.log(e.target);

}
}

// // function updatePriceByProduct(productPrice, index){
// //   let updatedPrice = document.getElementsByClassName('product1')[0]
// //   let firstRow = updatedPrice.getElementsByClassName('firstRow')
// //   for (let i=0; i< firstRow.length; i++){
// //     var firstRow = firstRow[i]
    
// //   }


// // }

// function getTotalPrice() {
//  document.getElementById("calculateTotal").innerHTML = "totalPrice"; 

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

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
