var $cart = document.querySelector('#cart tbody')
var $calc = document.getElementById('calc')
var $total = document.querySelector('h2 span') //etiqueta donde esta total
var $delete = document.querySelectorAll('.btn-delete') //es clase no es elemento
var $newProduct = document.querySelectorAll('.new input')
var $create = document.querySelector('.new button')

function updateSubtot($product) {
  // Iteration 1.1
  const price = parseFloat($product.querySelector('.pu span').innerHTML) //tomamos el valor del precio //float x lleva decimales
  const qty = parseFloat($product.querySelector('.qty input').value)
  const $subtot = $product.querySelector('.subtot span')
  $subtot.innerHTML = qty * price
}

function calcAll() {
  // Iteration 1.2
  $cart.querySelectorAll('.product').forEach($product => updateSubtot($product))
  let total = 0 //toma todo lo que coincida con el selector
  $cart.querySelectorAll('.product .subtot span').forEach($subtot => (total += parseFloat($subtot.innerHTML)))
  $total.innerHTML = total
}
$calc.onclick = calcAll

function deleteProduct(e) {
  const $tr = e.currentTarget.parentNode.parentNode
  const $tbody = $tr.parentNode
  $tbody.removeChild($tr)
}
$delete.forEach($button => ($button.onclick = deleteProduct))

function createProduct() {
  const $name = $newProduct[0]
  const name = $name.value
  const $price = $newProduct[1]
  const price = parseFloat($price.value)
  const $tr = document.createElement('tr')
  $tr.className = 'product'
  $tr.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>

    <td class="pu">
      $<span>${price}</span>
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
  const $delete = $tr.querySelector('.btn-delete')
  $delete.onclick = deleteProduct
  $cart.appendChild($tr)
  $name.value = ''
  $price.value = ''
}
$create.onclick = createProduct
