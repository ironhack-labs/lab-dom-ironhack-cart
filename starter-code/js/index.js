var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let products = document.querySelectorAll(`.product`);
let totAll = document.querySelector('h2 span'); 
let subTotal = document.querySelectorAll(".subtot span");
let puDOMEl = document.querySelectorAll(".pu span");
let qtyDOMEl = document.querySelectorAll(".qty label input");

function updateSubtot() {

  // Iteration 1.1

  for (let i = 0; i<products.length; i++){
    subTotal[i].innerHTML = Number (puDOMEl[i].innerText) * Number(qtyDOMEl[i].value);
   
  }
  
}



function calcAll() {
  // Iteration 1.2
  updateSubtot();

  let suma =0
  for (let i = 0; i<products.length; i++){
    suma += subTotal[i] ;
    suma = totAll.innerHTML
  }
    console.log(totAll);
  
}
$calc.onclick = calcAll;