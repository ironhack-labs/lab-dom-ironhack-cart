const priceButton = document.getElementById("calculateTotal");

/*
First Variables iterate through their corresponding class and get the quantity value and 
item price. After that I loop through each class to obtain item price & quantity.

Once I have the price and qty I add that value using innerHTML into the total class for each product

At the end I loop through each total for each product add those into a variable that has 0 as its value
and then push that final value using innerHTML into the final-total class.
*/

function getTotalPrice() {
  let pricePerUnit = document.querySelectorAll(".unit-price");
  let qtyOrdered =  document.querySelectorAll(".itemQuantity");
  let result = 0;
  for (var i = 0 ; i < pricePerUnit.length; i++){
  let calculatePrice = pricePerUnit[i].innerHTML * qtyOrdered[i].value;  
  document.getElementsByClassName('total')[i].innerHTML = "$" + calculatePrice.toFixed(2);
 result += calculatePrice; 
  }
  document.getElementsByClassName('total-price')[0].innerHTML = "$" + result.toFixed(2);
}

priceButton.onclick = getTotalPrice;




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
