var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

var $products = document.getElementsByClassName("product");

function updateSubtot($products) {

  var productPrice = document.querySelectorAll(".pu span")[0].innerHTML;
  var productQty = document.querySelectorAll(".qty input")[0].value;
  var productSub = document.querySelectorAll(".subtot span")[0];
  productSub.innerHTML = (parseInt(productPrice) * parseInt(productQty));
  console.log(productSub)
}

function updateCartTotal($products) {
  var productSubs = document.querySelectorAll(".subtot span");
  var totalValue = 0;
  var totalValueElement = document.querySelectorAll(".total span")[0];
  console.log(productSubs);
  for (i = 0; i < productSubs.length; i++) {
    totalValue += parseInt(productSubs[i].innerHTML);
    console.log(totalValue);
  }
  totalValueElement.innerHTML = totalValue;
}

var calculateTotalButton = document.getElementById("calc");
calculateTotalButton.addEventListener("click", function () {
  var item = document.getElementsByClassName("product");
  updateSubtot(item[0]);
  updateCartTotal(item[0]); 
});



function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;