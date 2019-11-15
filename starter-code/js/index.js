var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  let productQuantitity = Number(document.getElementsByTagName("span")[1].innerHTML);
  let productPrice = Number(document.getElementsByTagName("input")[0].value);
  let updatedSubtot = productQuantitity * productPrice;
  let currentSubtot = document.getElementsByTagName("span")[2];
  currentSubtot.innerHTML = updatedSubtot;
  return updateSubtot;
};

function calcAll() {
  updateSubtot();
};

$calc.onclick = calcAll;