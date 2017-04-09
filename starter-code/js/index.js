

var boxProductPrice = document.getElementById('js-price').innerHTML,
    boxProductPrice2 = boxProductPrice.split('$').join(''),
    boxProductPrice3 = parseInt(boxProductPrice2),
    boxQty = document.getElementById('js-qty').value,
    boxPriceTotal = document.getElementById('js-priceTotal');

var calculatePriceButton = document.getElementById('calc-prices-button');

var getTotalPrice = function(value,price) {
  var calcPrice = "$"+ value * price,
      innerCalcPrice = boxPriceTotal.innerHTML = calcPrice;
  return innerCalcPrice;
};

calculatePriceButton.onclick = function() {
  var boxQty = document.getElementById('js-qty').value;
  getTotalPrice(boxQty,boxProductPrice3);
};


var deleteButtons = document.getElementsByClassName('btn-delete');

function deleteItem(e){
  e.currentTarget.parentNode.parentNode.parentNode.innerHTML = "";
}

for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}
