var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var products = document.querySelectorAll("#cart tbody .product"); 

function updateSubtot(product) {
  // Iteration 1.1
  var pu = product.querySelector(".pu span");
  var qty = product.querySelector(".qty input");
  var subtot = product.querySelector(".subtot span");
  var number = Number(pu.textContent) * Number(qty.value)
  subtot.innerHTML = String(number)
  return number;
}

function calcAll() {
  // Iteration 1.2
  let span = document.querySelector("h2>span");
  span.innerHTML = "";
  let total = 0;
  products.forEach(product => {
    total += updateSubtot(product);
  });
  span.innerHTML = String(total);
};
$calc.onclick = calcAll;

function deleteRow(button){
  console.log(button);
  button.parentNode.parentNode.remove();
}

let removeBtn = document.querySelectorAll(".btn-delete");
removeBtn.forEach(button => {
  button.onclick = function() {
    console.log(button);
    deleteRow(button);
  }
})