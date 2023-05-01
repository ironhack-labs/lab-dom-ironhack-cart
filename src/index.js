// ITERATION 1
//https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price > span').textContent
  const quantity = product.querySelector('.quantity > input').value
  const subTotal = Number(price * quantity).toFixed(2)

  product.querySelector('.subtotal > span').textContent = subTotal
  return subTotal
}

// ITERATION 2
function calculateAll() {
  let sum = 0
  const allProducts = document.querySelectorAll('.product')
  for (let i = 0; i < allProducts.length; i++) {
    sum += Number(updateSubtotal(allProducts[i]))
  }

  // ITERATION 3
  let totalPrice = document.querySelector('#total-value > span')
  totalPrice.innerText = Number(sum).toFixed(2)

  return totalPrice.innerText
}

// ITERATION 4
//event.currentTarget = ハンドラが登録された要素（親）
//event.target = イベントが発生した要素
function removeProduct(event) {
  //target => <button class="btn btn-remove">Remove</button>
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //一番近い親要素を削除する
  target.closest('.product').remove()
  calculateAll()
}

// ITERATION 5
function createProduct() {
  const tbody = document.querySelector('tbody')
  const original = document.querySelector('.product')
  const copy = original.cloneNode(true)
  tbody.appendChild(copy)

  let newName = copy.querySelector('.name > span')
  let newPrice = copy.querySelector('.price > span')
  let newQuantity = copy.querySelector('.quantity [type="number"]')
  newQuantity.value = 0

  const inputName = document.querySelector('.create-product [type="text"]')
  newName.textContent = inputName.value
  const inputPrice = document.querySelector('.create-product [type="number"]')
  newPrice.textContent = Number(inputPrice.value).toFixed(2)
  const removeBtn = copy.querySelector('.btn-remove')
  removeBtn.addEventListener('click', removeProduct)

  inputName.value = ''
  inputPrice.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct)
  })

  const create = document.getElementById('create')
  create.style.backgroundColor = '#fff'
  create.addEventListener('click', () => {
    createProduct()
  })
})
