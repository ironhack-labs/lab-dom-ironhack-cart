
function getTotalPrice() {
  var productCost = document.getElementsByClassName("product-cost");
  // retreive the value 25 with innerHTML (instead of <span>25</span>)
  var productCostNr = productCost[0].innerHTML;
  // input form has no innerHTML but a value
  var productQuantityNr = document.getElementsByClassName("product-quantity")[0].value;
  // calc total price
  var totalPrice = productCostNr * productQuantityNr;
  // change price
  var total = document.getElementsByClassName("product-total");
  var totalNr = total[0];
  totalNr.innerHTML = totalPrice;
}