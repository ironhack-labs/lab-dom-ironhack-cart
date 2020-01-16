var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var btnCr = document.querySelector('#create')
let total=0
const $table = document.querySelector('tbody')

function updateSubtot($product) {
  // Iteration 1.1
  let priceOfTheProduct = $product.querySelector('.pu > span').innerText
  let quantity = $product.querySelector('.qty > label > input').value
  let subTotal = $product.querySelector('.subtot > span')
  let sumPrice = Number(quantity) * Number(priceOfTheProduct)
  subTotal.innerText = sumPrice.toFixed(2)
  total= total+ sumPrice
  return sumPrice
}

function calcAll() {
  // Iteration 1.2

let h2 =document.querySelector('#total-h2 > span')
let totalProduct = 0
document.querySelectorAll('.product').forEach( function($product) {
  totalProduct += updateSubtot($product)
})
 
h2.innerText = totalProduct
}



function addProduct (){

  let $name = document.querySelector('#input-text')
  let $price = document.querySelector('#input-number')
  let $tr = document.createElement ('tr')

  $tr.classList.add('product');
  $tr.innerHTML = `
  <td class="name">
  <span>${$name.value}</span>
</td>

<td class="pu">
  $<span>${$price.value}</span>
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

 
  $cart.appendChild($tr)
  $price.value = ''
  $name.value = ''
  
  removeButton()
}

btnCr.onclick = addProduct

function removeButton (){
  const dltButtons = document.querySelectorAll('.btn-delete')

  dltButtons.forEach((dltButt) => {
    dltButt.addEventListener('click', (e) => {
      $table.removeChild($ref=e.target.parentNode.parentNode)
    })
  })
}

$calc.onclick = calcAll;

removeButton()