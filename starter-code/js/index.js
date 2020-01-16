var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let sum = 0
let button = document.getElementById('create')
let $button = document.getElementsByClassName('btn-delete')
let $child = document.getElementsByClassName('product')

let newItem = []
$cart.querySelectorAll('tr').forEach($cart => {
  newItem.push($cart)
})
let counter = newItem.length

  // Iteration 1.1
  // Multiplicar la unit por la quantity y pasarla al span
  // con la clase 'subtot'
function updateSubtot($product) {
  let $price = parseInt($product.querySelector('.pu > span').innerText)
  let $quantity = parseInt($product.querySelector('.qty > label > input').value)
  let subtotResult = Number($price * $quantity).toFixed(2)
  $product.querySelector('.subtot > span').innerText = subtotResult  
  sum += Number(subtotResult)

}

function calcAll() {
  // Iteration 1.2
  sum = 0
  let $h2 = document.querySelector('h2 > span')
  let total = document.querySelectorAll('.product')
  total.forEach(element => {
    updateSubtot(element)
  })
  $h2.innerText = sum
}

function deleteCart($buttons, $childs) {
  for (let i = 0; i < $button.length ; i++) {
    (function(children) {
      $buttons[i].addEventListener('click', function(e) {
        children.parentNode.removeChild(children)
      }, false)
    })($childs[i])
  }
}

deleteCart($button, $child)

function createProducts() {

  const $newProduct = document.querySelector('tfoot input[type = "text"]')
  const $newPrice = document.querySelector('tfoot input[type = "number"]')

  let nuevoProducto = `
        <td class="name">
          <span>${$newProduct.value}</span>
        </td>
    
        <td class="pu">
          $<span>${$newPrice.value}</span>
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
        </td>`;
        
  const $tr = document.createElement('tr')
  $tr.className = 'product'
  $cart.appendChild($tr)
  $tr.innerHTML = nuevoProducto
  newItem.push($tr)
  $newProduct.value = ''
  $newPrice.value = ''
}


/*
let removeBotton(){
  
}*/

function eventReceiver() {
  let $deleteButtons = document.querySelector('.rm > .btn.btn-delete') 
  $deleteButtons.forEach(element => {
    element.addEventListener('click', )
  })
}

button.addEventListener('click', createProducts);

$calc.onclick = function() {
  calcAll()
}