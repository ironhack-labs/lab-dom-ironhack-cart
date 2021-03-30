// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subTotal = price * quantity
  product.querySelector('.subtotal').innerText = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product')
  let subTotal = 0
  for (let i = 0; i < allProducts.length; i++) {
    subTotal += updateSubtotal(allProducts[i])
    console.log(subTotal)
  }
  document.querySelector('#total-value span').innerHTML = subTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  const parentElement = target.parentNode.parentNode.parentNode
  parentElement.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const nameField = document.querySelector(".create-product input[type='text']")
  const name = nameField.value
  const priceField = document.querySelector(
    ".create-product input[type='number']"
  )
  const price = priceField.value
  const parentElement = document.querySelector('tbody')

  if (name && price) {
    const productInnerHMTL = `<tr class="product">
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}.00</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>`

    const newItem = document.createElement('tr')
    newItem.setAttribute('class', 'product')
    newItem.innerHTML = productInnerHMTL
    parentElement.appendChild(newItem)
    const createProduct = document.querySelector('tfoot')
    nameField.value = ''
    priceField.value = 0
  } else {
    window.alert('Name or Price are missing!')
    console.log('hello')
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  const removeBtns = document.querySelectorAll('.btn.btn-remove')
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct)
  }
  document.querySelector('#create').addEventListener('click', createProduct)
})
