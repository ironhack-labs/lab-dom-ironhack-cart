const btnCalculate = document.querySelector('#calculate')
const btnCreate = document.querySelector('.btn-create')
const main = document.querySelector('main div')
const yaEsLoMenos = document.querySelector('#totalPrice')
const yaNoTeQuiero = document.querySelectorAll('.btn-delete')

const calculatePrice = () => {
  const prices = document.querySelectorAll('.price')
  const qty = document.querySelectorAll('.qty input')
  const tot = document.querySelectorAll('.total')
  let totalPrice = 0
  let total = 0

  for (i = 0; i < prices.length; i++) {
    total = parseFloat(prices[i].innerHTML.match(/[0-9]/g).join('')) / 100
    total *= parseFloat(qty[i].value)
    tot[i].innerText = `$ ${total.toFixed(2)}`
    totalPrice += total
  }
  yaEsLoMenos.innerText = totalPrice
}
const deleteProduct = e => {
  const seVa = e.target.parentElement
  console.log(seVa)
  main.removeChild(seVa)

  calculatePrice()
}

const addProduct = () => {
  const inputName = document.querySelector('#create input')
  const inputPrice = document.querySelectorAll('#create input')[1]

  if (inputName.value.trim() === '' || inputPrice.value.trim() === '') return

  const div = document.createElement('div')
  const spanName = document.createElement('span')
  spanName.innerText = inputName.value
  const spanPrice = document.createElement('span')
  spanPrice.innerText = `$ ${parseFloat(inputPrice.value).toFixed(2)}`
  spanPrice.className = 'price'

  div.appendChild(spanName)
  div.appendChild(spanPrice)

  div.innerHTML +=
    '<span class="qty"><label for="QTY">QTY</label> <input type="number" value=0></span><span class="total" > $0 .00 </span>'

  const btnBorrar = document.createElement('button')
  btnBorrar.innerText = 'Delete'
  btnBorrar.className = 'btn-delete btn delete'
  btnBorrar.onclick = deleteProduct
  div.appendChild(btnBorrar)

  main.appendChild(div)
  inputName.value = ''
  inputPrice.value = ''
}

btnCalculate.onclick = calculatePrice
btnCreate.onclick = addProduct
yaNoTeQuiero[0].onclick = deleteProduct
