let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');
let create = document.getElementById('create');

function updateSubtot(product) {
  // Iteration 1.1

  let priceUnit = product.querySelector('.pu > span').innerText
  let quantity = product.querySelector('.qty > label > input').value
  let result = (Number(priceUnit) * Number(quantity)).toFixed(2)
  let resultStr = product.querySelector('.subtot')
  resultStr.innerText = `$ ${result}`

  return result
}

function calcAll() {
  // Iteration 1.2
  let displayResult = document.querySelector('#display-result > span')
  let products = cart.querySelectorAll('.product')
  let productsSum = 0
   for(let i=0; i < products.length; i++){
     productsSum += Number(updateSubtot(products[i]))
   }
   displayResult.innerText = productsSum.toFixed(2)
}
calc.onclick = calcAll

function setDeleteBtns(){
  let deleteBtns = cart.getElementsByClassName('btn-delete')
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].onclick = deleteThis
  }
}
setDeleteBtns()

function deleteThis(e){
  e.target.parentElement.parentElement.remove()
  calcAll()
}

function createNewRow(){
  let prodTable = document.querySelector('tbody')
  let rowElem = document.createElement('tr')
  rowElem.classList.add('product')

  let productNameInput = document.querySelector('#product-name-input').value
  let productPriceInput = Number(document.querySelector('#product-price-input').value)
  if (productNameInput == '' || productPriceInput == 0) return

  rowElem.innerHTML += `<td class="name"> <span>${productNameInput}</span> </td>
  <td class="pu">$<span>${productPriceInput.toFixed(2)}</span></td>
  <td class="qty"><label><input type="number" value="1" min="0"></label></td>
  <td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td>`

  prodTable.append(rowElem)
  document.getElementById('product-name-input').value = ''
  document.getElementById('product-price-input').value = ''
  setDeleteBtns()
  calcAll()
}
create.onclick = createNewRow
