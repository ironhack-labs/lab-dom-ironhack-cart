var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
const $newProductButton = document.querySelector('#create')

function updateSubtot($product) {
  // Iteration 1.1
  const $productPrice = document.querySelector('.pu>span')
  const $quantity = document.querySelector('#quantity')
  const $subTotal = document.querySelector('.subtot>span')

  const productPrice = Number($productPrice.innerText)
  const quantity = $quantity.value
  const multiplication = productPrice * quantity

  $subTotal.innerText = multiplication

}

function calcAll() {
  // Iteration 1.2
  const $total = document.querySelector('#total>span')
  const $productList = document.querySelectorAll('#cart>tbody>.product')
  let sumOfProducts = 0

  $productList.forEach(($product) => {
    updateSubtot($product)
    sumOfProducts += Number(document.querySelector('.subtot>span').innerText)
  })

  $total.innerText = sumOfProducts

}

function newItem() {
  const $newItem = document.querySelector('#item')
  const $newPrice = document.querySelector('#price')

  const $table = document.querySelector('tbody')

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

}

$calc.onclick = calcAll;
$newProductButton.onclick = newItem