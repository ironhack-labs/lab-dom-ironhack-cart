var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let $createBut = document.getElementById('create');
function updateSubtot($product) {
  var $precio = document.querySelector('.pu  span').innerText
  const $cantidad = document.querySelector('.qty  input').value
  let $subtotal = document.querySelector('.subtot span')
  let subtot = parseFloat($precio * $cantidad).toFixed(2)
  $subtotal.innerHTML = subtot
  console.log($subtotal , subtot)
  return subtot
}
function calcAll() {
  // Iteration 1.2
  let $h2 = document.querySelector('h2')
  let carritoTotal = $cart.querySelectorAll('.product')
  let total = 0;
  carritoTotal.forEach(node => total += Number(updateSubtot(node)))
  document.querySelector('#precio-Total').innerText = `Total: ${total}`
}
$calc.onclick = calcAll;
function nuevaTabla() {
  let $tbody = document.querySelector('tbody')
  let $tr = document.createElement('tr')
  $tr.className = 'product'
  let $nombre = document.querySelector("#input-nombre").value
  let $inputPrecio = document.querySelector("#input-precio").value
  console.log($nombre, $inputPrecio)
  $tr.innerHTML = `
<td class="name">
<span>${$nombre}</span>
</td>
<td class="pu">
$<span>${$inputPrecio}</span>
</td>
<td class="qty">
<label>
  <input type="number" value="1" min="0">
</label>
</td>
<td class="subtot">
$<span>0</span>
</td>
<td class="rm">
<button class="btn btn-delete">Delete</button>
</td>`
$tbody.appendChild($tr)
$nombre=""
$inputPrecio=0
botonesBorrar()
calcAll()
}
function borrar (e){
  e.target.parentElement.parentElement.remove()
  calcAll()
}
function botonesBorrar (){
  let $deleteBots = $cart.querySelectorAll('btn-delete')
  $deleteBots.forEach( but => but.onclick = borrar)
}
$createBut.onclick = nuevaTabla