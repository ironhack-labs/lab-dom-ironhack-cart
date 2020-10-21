//Global HTML selectors
const displayTotal = document.querySelector('#total-value span')
const itemList = document.querySelector('tbody')
const newProductName = document.querySelector('.product-name input')
const newProductPrice = document.querySelector('.product-price input')

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subTotal = product.querySelector('.subtotal span')
  let totalValue = Number(price.innerHTML) * parseFloat(quantity.value)
  subTotal.innerHTML = totalValue
  return totalValue
}

function calculateAll() {
  let endTotal = 0
  const allProducts = document.querySelectorAll('.product')

  for (product of allProducts) {
    endTotal += updateSubtotal(product)
  }

  return displayTotal.innerHTML = endTotal
}

function removeProduct(event) {
  const target = event.currentTarget;
  itemList.removeChild(target.parentNode.parentNode)
}

function activateRemoveButtons() {
  const removeButtonsGroup = document.querySelectorAll('.btn-remove')
  for (button of removeButtonsGroup) {
    button.addEventListener('click', removeProduct)
  }
}

function createProduct() {
  let newProductRow = document.createElement('tr')

  if (newProductName.value === '') {
    alert(`Please enter a product name`)
  } else if (newProductPrice.value === `0`) {
    alert(`Please enter a price`)
  } else {
    newProductRow.innerHTML = `<td class="name">
            <span>${newProductName.value}</span>
          </td>
          <td class="price">$<span>${newProductPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`
    newProductRow.classList.add('product')
    itemList.appendChild(newProductRow)
    newProductName.value = ''
    newProductPrice.value = '0'
    activateRemoveButtons()
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  activateRemoveButtons()

  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct)
});