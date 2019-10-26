var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

let ironBubbleHead = document.getElementById("ironBubble-head").innerHTML;

let ironBubbleHead2 = document.getElementById("ironBubble-head2").innerHTML;

let ironIndPrice = parseInt(document.getElementById("ironPrice").innerHTML);

let ironIndPrice2 = parseInt(document.getElementById("ironPrice2").innerHTML);

function updateSubtot() {

  let total = 0;
  let total2 = 0;
  let absTotal = 0;

  total = ironIndPrice * parseInt(document.getElementById("ironQuantity").value);

  document.getElementById("ironSubtotal").innerHTML = total;

  total2 = ironIndPrice2 * parseInt(document.getElementById("ironQuantity2").value);

  document.getElementById("ironSubtotal2").innerHTML = total2;

  absTotal = total + total2;
  
  document.getElementById("absoluteTotal").innerHTML = absTotal;
}

function calcAll() {
  // Iteration 1.2
}

let button = document.getElementById("calc");

button.onclick = function(btn){
  btn.preventDefault();
  updateSubtot();
}
