var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let total = document.querySelector("h2 span");

function updateSubtot($product) {
  // Iteration 1.1
  let precio = document.querySelector(".pu span").textContent;
  let cantidad = document.querySelector(".qty label input").value;
  let sbtotal = precio * cantidad; 
  document.querySelector(".subtot span").textContent = sbtotal;
  return sbtotal;
}


function calcAll() {
  // Iteration 1.2
  let producto = document.querySelector(".product"); 
  let calcTotal = 0;
  for (let i= 0; i<producto.length; i++){
    
    calcTotal += parseInt(updateSubtot(producto[i]).innerHTML);
  }
  
  total.innerHTML = calcTotal;
  return calcTotal;
  
}
$calc.onclick = calcAll();

