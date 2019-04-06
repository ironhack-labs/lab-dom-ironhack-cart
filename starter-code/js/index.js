// let productBub = document.getElementsByClassName("productBub");
let totalPrice = document.getElementsByClassName("totalPrice");

let qtyTotal = document.getElementsByClassName("qtyTotal");
// let deleteBtn = document.getElementById("deleteBtn");
// let calculateBtn = document.getElementById("calculateBtn");
let row = document.getElementsByClassName("productRow");



// console.log(calculateBtn.innerHTML)

// function test() {
//   calculateBtn.innerHTML = "I CHANGED IT BITCH!";
// }


/*
I declared variable - allDeleteButtons and returned array of 
deleted buttons ('deleteBtn).
- Then I looped through the array of buttons with that class name and
  set a variable - deleteBtns and set it to all of the buttons.
- Then I created a function when the button gets clicked. 
- In the function I set a variable for the target that was clicked with
  event.target.
- Then I removed the element's parent.. parent to delete the whole row.
*/
function deleteItem(e) {
  let allDeleteButtons = document.getElementsByClassName('deleteBtn');

  for (let i = 0; i < allDeleteButtons.length; i++) {
    let deleteBtns = allDeleteButtons[i]

    deleteBtns.addEventListener('click', function () {
      let buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()

    })
  }
}





function getPriceByProduct(itemNode) {

}

function updatePriceByProduct() {

  // let qtyTotal = document.getElementsByClassName("qtyTotal");
  let productBub = document.getElementsByClassName("productBub");
  let qty = document.getElementsByTagName("input")[0].value;
  let total = productBub[0].innerHTML * qty



  // return document.getElementsByClassName("qtyTotal")[0].innerHTML = total
  return qtyTotal[0].innerHTML = total;
  // console.log(qtyTotal) -->
}


// //
// function getTotalPrice() {
//   let total = 0;
//   for (let i = 0; i < row.length ) {
//     console.log(row[i])
//   }

// }

// function createQuantityInput() {
//   qty = 2
//   return total
// }

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
