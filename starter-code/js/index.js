const priceButton = document.getElementById("calculateTotal");

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

const deleteButton = document.querySelectorAll(".btn-delete");
const deleteWrap = document.getElementsByClassName("products");

function deleteDiv(elem){
  const container = document.getElementById('all-products');
  container.removeChild(elem.path[2]);
}

for(var i=0; i < deleteWrap.length ; i++){
deleteButton[i].onclick = deleteDiv;
}

/*
First Variables iterate through their corresponding class and get the quantity value and 
item price. After that I loop through each class to obtain item price & quantity.

Once I have the price and qty I add that value using innerHTML into the total class for each product

At the end I loop through each total for each product add those into a variable that has 0 as its value
and then push that final value using innerHTML into the final-total class.
*/