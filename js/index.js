//Global HTML selectors
const displayTotal = document.querySelector('#total-value span')
const itemList = document.querySelector('#cart tbody')
const newProductName = document.querySelector('.create-product .product-name input')
const newProductPrice = document.querySelector('.create-product .product-price input')

// ITERATION 1
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
  const allProducts = document.querySelectorAll('#cart tr.product')
  for (let i = 0; i < allProducts.length; i++) {
    endTotal += updateSubtotal(allProducts[i])
  }
  return displayTotal.innerHTML = endTotal
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  itemList.removeChild(target.parentNode.parentNode)
}

// ITERATION 5
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
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtonsGroup = document.querySelectorAll('.btn-remove')
  for (let i = 0; i < removeButtonsGroup.length; i++) {
    removeButtonsGroup[i].addEventListener('click', removeProduct)
  }
  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct)
});