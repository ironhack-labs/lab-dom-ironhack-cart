function getTotalPrice() {
  let itemPrice = document.querySelectorAll(".item-price").innerHTML;
  console.log(itemPrice);
  let itemQuantity = document.getElementsByClassName("item-quantity").value;
  console.log(itemQuantity);
  let numItemPrice = parseFloat(itemPrice.substr(1) * itemQuantity);
  console.log(numItemPrice);
  let totalItem = numItemPrice * itemQuantity;
  let randomTotal = document.getElementsByClassName("total-holder");
  randomTotal.innerHTML = `$ ${totalItem}`;
}

// window.onload = function(){
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   var calculatePriceButton = document.getElementById('calc-prices-button');

//   calculatePriceButton.onclick = (rows) => {

// for(let i = 0; i < rows.length; i++) {

//   var pricePerUnit = Number(rows[i].querySelector('.product-price').innerHTML.substr(1));
//   var quantity = rows[i].querySelector('input').value
//   var totalPerItem = Number(rows[i].querySelector('.product-calculated-price').innerHTML.substr(1));

//   var tempTotal = quantity * pricePerUnit;
//   rows[i].querySelector('.product-calculated-price').innerHTML = '$'+tempTotal.toFixed(2);
// }

//   };

//   var deleteButtons = document.getElementsByClassName('btn-delete')

//   for(var i = 0; i<deleteButtons.length ; i++){
//   deleteButtons[i].onclick = deleteItem;

// }

function deleteItem(blahEvent) {
  blahEvent.currentTarget.parentNote.remove();
}

var createButton = document.getElementById("create-new");

// createButton.onclick = () => {
//   var theTitle = document.querySelector(".create-title").value;
//   var thePrice = document.querySelector(".create-price").value;

//   console.log(thePrice, theTitle);

//   var newRow = document.classEment("div");

//   newRow.className = "row";

//   newRow.innerHTML = `
          
//           `;

//   document.getElementById("all-the-rows").appendChild(newRow);
// };

// console.log(pricePerUnit, quantity, totalPerItem);

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

// createItemButton.onclick = createNewItem;

// for(var i = 0; i<deleteButtons.length ; i++){
//   deleteButtons[i].onclick = deleteItem;
// }
