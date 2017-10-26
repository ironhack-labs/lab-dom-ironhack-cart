var qty = document.querySelectorAll('.quantity');
var price = document.querySelectorAll('.price');
var total = document.querySelectorAll('.total');
var grandTotal = document.querySelector('.grandTotal');


//Variable that stores all the delete buttons on the page.

var deleteButtons = document.getElementsByClassName('btn-delete');

//For loop that iterates through all of of the delete buttons (stored in an array that
// is deleteButtons) and assigns the functin deleteItem as the anonymous function for the
// onClick event listener.

for(var i = 0; i < deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}


//Function that handles the delete
function deleteItem(){
  // Variable that holds the current item line we want to delete.
  // deleteButtons.forEach(function (oneButton) {
  //   oneButton.onclick = function() {
    var parent = document.querySelector('.container');
    var clickedButton = event.currentTarget;
    var myLi = clickedButton.parentNode.parentNode;
    parent.removeChild(myLi);
//     };
// });
  //var thisLine = document.querySelector('.wrapper');
  //Varaible that holds the parent of the line we want to delete
 // var parent = document.querySelector(".container");

  //Deletes the line from the screen.
  // parent.removeChild(thisLine);
  // getTotalPrice();

}

function getPriceByProduct(){
  var itemPrice = document.querySelectorAll('.price');
  return itemPrice;
}

// function updatePriceByProduct(productPrice, index){

// }

function getTotalPrice() {
  var totalPrice = getPriceByProduct();
  var fullPrice = 0;
  totalPrice.forEach(function(item , i) {
    total[i].innerHTML = Number(item.innerHTML) * Number( qty[i].value);
    fullPrice += Number(total[i].innerHTML);
  });
  grandTotal.innerHTML = fullPrice;

}


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

window.onload = function(){
  var calculatePriceButton = document.querySelector('.btn-success');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;


};
