var calculatePrices = document.getElementsByClassName('btn-success')[0];

// Puts all item prices into an array

// Calculate Button produces total for each item line and grand total

calculatePrices.onclick = function() {

var grandTotal = 0;
var itemPrice = [];
for (i=0; i<document.getElementsByClassName('price').length; i++){
  itemPrice.push(parseFloat(document.getElementsByClassName('price')[i].innerHTML.trim().slice(1)));
}
var priceArray = itemPrice;
  for (i=0; i<document.getElementsByClassName('price').length; i++){
    var totalPrice = document.getElementsByClassName('totalprice')[i];
    console.log(totalPrice);
    var input = document.getElementsByClassName('quantity')[i].value;
    console.log(input);
    var total = parseInt(input) * priceArray[i];
    console.log(total);
    grandTotal += total;
    totalPrice.innerHTML = "$" + total;
  }
  document.getElementById('grandtotal').innerHTML = "$" + grandTotal;
};

// delete buttons
var container = document.querySelector('.container');

  for (i=0; i<document.getElementsByClassName("itemline").length;i++) {
    var deleteButtons = document.getElementsByClassName('btn-delete')[i];
    var itemLine = document.getElementsByClassName('itemline')[i];
    deleteButtons.onclick = function (ev) {
    var x = ev.currentTarget;
    console.log(x);
    console.log(x.parentNode.parentNode);
    container.removeChild(x.parentNode.parentNode);
    };

}
// add new items ////////////////////
var create = document.querySelector('.create');
create.onclick = function () {
var itemName = document.querySelector('.new').value;
var price = document.querySelector('.newprice').value;
//----- line container ---//
var newItemLine = document.createElement('div');
newItemLine.setAttribute('class', 'itemline');
container.appendChild(newItemLine);
//----- item info ---//
var item = document.createElement('div');
item.setAttribute('class', 'item');
newItemLine.appendChild(item);
item.innerHTML = itemName;
//----- item price ---//
var itemprice = document.createElement('div');
itemprice.setAttribute('class', 'price');
newItemLine.appendChild(itemprice);
itemprice.innerHTML = price;
//----- quantity box ---//
var quantinput = document.createElement('input');
quantinput.setAttribute('name', 'quantity');
quantinput.setAttribute('type', 'text');
quantinput.setAttribute('value', '0');
quantinput.setAttribute('class', 'quantity');
newItemLine.appendChild(quantinput);
//----- total price ---//
var totalprice = document.createElement('div');
totalprice.setAttribute('class', 'totalprice');
newItemLine.appendChild(totalprice);
totalprice.innerHTML = '$0.00';
// ---- delete button --- //
var deleteButton = document.createElement('button');
deleteButton.setAttribute('class', 'btn-delete');
newItemLine.appendChild(deleteButton);
deleteButton.innerHTML = 'Delete';

  deleteButton.onclick = function (ev) {
  var x = ev.currentTarget;
  console.log(x);
  console.log(x.parentNode);
  container.removeChild(x.parentNode);
  };
};
