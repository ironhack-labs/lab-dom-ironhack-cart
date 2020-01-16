var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
const $newProductButton = document.querySelector('#create')
let sumOfProducts = 0
const $table = document.querySelector('tbody')

function updateSubtot($product) {
  // Iteration 1.1
  const $productPrice = $product.querySelector('.pu>span')
  const $quantity = $product.querySelector('#quantity')
  const $subTotal = $product.querySelector('.subtot>span')

  const productPrice = Number($productPrice.innerText)
  const quantity = $quantity.value
  const multiplication = productPrice * quantity

  $subTotal.innerText = multiplication

}

function calcAll() {
  // Iteration 1.2
  const $total = document.querySelector('#total>span')
  const $productList = document.querySelectorAll('#cart>tbody>.product')
  sumOfProducts = 0

  $productList.forEach(($product) => {
    updateSubtot($product)
    sumOfProducts += Number($product.querySelector('.subtot>span').innerText)
  })

  $total.innerText = sumOfProducts

}

function newItem() {
  const $newItem = document.querySelector('#item')
  const $newPrice = document.querySelector('#price')

  

  const $newTr = document.createElement('tr')
  $newTr.className = 'product'
  //$table.appendChild($newTr)
  
  $newTr.innerHTML = `
    <td class="name">
      <span>${$newItem.value}</span>
    </td>

    <td class="pu">
      $<span>${$newPrice.value}</span>
    </td>

    <td class="qty">
      <label>
        <input id ="quantity" type="number" value="0" min="0">
      </label>
    </td>

    <td class="subtot">
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
`

  $table.appendChild($newTr)
  deleteElement()

  $newItem.value = ''
  $newPrice.value = '0'
}

const deleteElement = () => {

  const $deleteButtons = document.querySelectorAll('.btn-delete')

$deleteButtons.forEach(($button) => {
  $button.addEventListener('click', (e) => {
    $table.removeChild($ref=e.target.parentNode.parentNode)
  })
})

}

$calc.onclick = calcAll;
$newProductButton.onclick = newItem
deleteElement()