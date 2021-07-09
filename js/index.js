// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = Number(price.innerHTML) //can do Number, +, or parseInt
  const quantityValue = +(quantity.value)

  const subTotal = priceValue * quantityValue
  subtotal.innerHTML = `${subTotal}`

  return subTotal
}

function calculateAll() {
  const products = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value span')

  let totalPrice = 0

  products.forEach(product => totalPrice += updateSubtotal(product))

  total.innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
 
  let row = target.parentNode.parentNode
  row.remove()
  row = null 

  const total = document.querySelector('#total-value span')
  if(+total.innerHTML) return calculateAll()
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product-name')
  const price = document.querySelector('.create-product-price')
  const tbody = document.querySelector('#cart tbody')

  tbody.innerHTML += `<tr class="product">
    <td class="name">
      <span>${name.value}</span>
    </td>
    <td class="price">$<span>${price.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(btn => btn.addEventListener('click', removeProduct))
  
  name.value = ''
  price.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const create = document.getElementById('create');
  const removeBtn = document.querySelectorAll('.btn-remove');
  
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeBtn.forEach(btn => btn.addEventListener('click', removeProduct))
  create.addEventListener('click', createProduct)
});
