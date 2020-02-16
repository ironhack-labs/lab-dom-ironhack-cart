var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

var quantity = document.querySelectorAll(".qty input");
var unitPrice = document.querySelectorAll('.price').textContent;

// document.querySelector(".qty").textContent = 4;
// var subtotal = +quantity * +unitPrice;

var calcButton = document.getElementById("calc");

const list = document.querySelectorAll(".subtot span");

function calcTotal () {
for (let i=0; i<list.length; i++) {
  var subtotal = +quantity[i].value * +unitPrice[i];

const total = +list[i].textContent;
console.log(list[i])
console.log(subtotal);
}}
// console.log(list[i].textContent);

// function updateSubtot($product) {
  // Iteration 1.1
  

  // calcButton.onclick = function replaceSubtotal(subtotal) {
  //   var subtotal = quantity.value * +unitPrice;
  //   document.querySelector(".subtot span").textContent = subtotal;

  // }

  calcButton.onclick = calcTotal;
  // function calcAll() {
    // document.querySelector(".subtot span").textContent = subtotal;
    // console.log(document.querySelector(".total span").textContent) += subtotal[i]; 
  // }



  // Iteration 1.2
// calcButton.onclick = function calcAll() {
//   for (i=0; i < document.getElementsByClassName("product"); i++) {
//     fullAmount += subtotal[i];
//     return fullAmount;
//   }
// }
// $calc.onclick = calcAll;

// for (i=0; i < document.getElementsByClassName("product"); i++) {
//   console.log(fullAmount += subtotal[i])};

//   console.log(document.getElementsByClassName("product"));