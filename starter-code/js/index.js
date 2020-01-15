var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
const $create = document.getElementById('create');
var $total = document.querySelector('#total > span');
let total = 0;

function updateSubtot($product) {
  // Iteration 1.1
  const $precio = $product.querySelector('.pu > span')
  const $cantidad = $product.querySelector('.qty  input')
  const $subtotal = $product.querySelector('.subtot > span')
  subtotal =  Number($cantidad.value) * Number($precio.innerText)
  $subtotal.innerText = subtotal.toFixed(2)
  total = total + subtotal

}

function calcAll() {
  // Iteration 1.2
  total=0;
  document.querySelectorAll('.product').forEach($product => updateSubtot($product))
  $total.innerText = total.toFixed(2)
}
$calc.onclick = ()=> {
  calcAll();
};

$create.onclick= () => {
  const $product = document.querySelector('.new #productName')
  const $precio = document.querySelector('.new #precio')
  const $tr = document.createElement('tr')

  const index = document.querySelectorAll('.product').length
  

  const nuevoProducto = `
 
        <td class="name">
          <span>${$product.value}</span>
        </td>
    
        <td class="pu">
          $<span>${$precio.value}</span>
        </td>
    
        <td class="qty">
          <label>
            <input type="number" value="0" min="0">
          </label>
        </td>
    
        <td class="subtot">
          $<span>0</span>
        </td>
    
        <td class="rm">
          <button class="btn btn-delete">Delete</button>
        </td>
      `
  $tr.className = 'product'
  $tr.setAttribute('id', index)  
   $tr.innerHTML = nuevoProducto
   $cart.appendChild($tr)
   $product.value = ''
   $precio.value = ''
  //$tr.querySelector('button').onclick = () => eliminarElemento($tr)
  addDeleteEvent()
}


function eliminarElemento (i) {
  i.remove()
  
  
}

function addDeleteEvent(){
  document.querySelectorAll('.product').forEach($product => {
    $product.querySelector('button').onclick = ()=> eliminarElemento($product)
  })
}

addDeleteEvent()