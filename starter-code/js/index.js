var $cart = document.getElementById('#cart tbody');
var $calc = document.getElementById('calc');
let createButton = document.getElementById('create');

function updateSubtot($product) {
let producto = document.querySelector('.pu span').innerText * document.querySelector('.qty input').value;
let subtotal = document.querySelector('.subtot span');
console.log(subtotal.innerHTML = producto);

}
function createRow(){
  const name = document.querySelector('.new td input').value;
  const price = document.querySelector('.new td .price').value;
  let table = document.querySelector("tbody");
  let newRow = document.querySelector("tbody tr").cloneNode(true);
  newRow.querySelector(".name span").innerHTML = name;
  newRow.querySelector(".pu span").innerHTML = price;
  table.appendChild(newRow);
  table.appendChild(newRow);
  
}
function calcAll() {
  updateSubtot();
  


}
$calc.onclick = calcAll;
createButton.onclick = createRow;
