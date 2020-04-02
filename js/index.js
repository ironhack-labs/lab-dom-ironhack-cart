// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value

  let sum = 0
  sum = price * quantity

  let subTotal = (product.querySelector('.subtotal span').innerHTML = sum)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product')
  products.forEach(ele => {
    updateSubtotal(ele)
  })

  const [...subTotals] = document.querySelectorAll('.subtotal span')

  const total = subTotals.reduce((acc, val) => {
    return acc + Number(val.innerText)
  }, 0)

  document.querySelector('#total-value span').innerText = total

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct() {
  const buttons = document.querySelectorAll('.btn.btn-remove')
  buttons.forEach(btn => (btn.onclick = () => btn.parentNode.parentNode.remove()))
}
// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.new-product')
  const newPrice = document.querySelector('.new-price')
  const table = document.querySelector('tbody')
  const createButton = document.querySelector('#create')

  createButton.onclick = () => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `<tr class="product">
    <td class="name">
      <span>${newProduct.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

    newRow.className = `product`
    table.appendChild(newRow)
    removeProduct()

    newProduct.value = ''
    newPrice.value = 0
  }
}
createProduct()
removeProduct()

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  //... your code goes here
})
