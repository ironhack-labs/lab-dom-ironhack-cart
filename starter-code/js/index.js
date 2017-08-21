var boxProductPrice = document.getElementById('js-price').innerHTML,
  boxProductPrice2 = boxProductPrice.split('$').join(''),
  boxProductPrice3 = parseInt(boxProductPrice2),
  boxPriceTotal = document.getElementById('js-priceTotal');




var calculatePriceButton = document.getElementById('calc-prices-button');

function getTotalPrice(value, price) {
  var calcPrice = "$" + value * price,
    innerCalcPrice = boxPriceTotal.innerHTML = calcPrice;
  return innerCalcPrice;

}

var alertPrice = document.createElement('h1');
document.getElementById('alert').appendChild(alertPrice);

function totalPrice(total) {
  alertPrice.innerHTML = 'TOTAL PRICE ' + total;
}

/*
CALCULATE BUTTON
*/
calculatePriceButton.onclick = function() {
  var boxQty = document.getElementById('js-qty').value;
  getTotalPrice(boxQty, boxProductPrice3);
  totalPrice(getTotalPrice(boxQty, boxProductPrice3));
};

/*
DELETE BUTTON
*/
var deleteButtons = document.getElementsByClassName('btn-delete');

function deleteItem(e) {
  e.currentTarget.parentNode.parentNode.parentNode.innerHTML = "";
}
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = deleteItem;
}
