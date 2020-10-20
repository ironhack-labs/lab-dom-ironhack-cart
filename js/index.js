// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subTotal = product.querySelector('.subtotal span')
  let totalValue = parseInt(price.innerHTML) * parseInt(quantity.value)
  subTotal.innerHTML = totalValue
  return totalValue
}

function calculateAll() {
  let allProducts = document.querySelectorAll('#cart tr.product')
  let endTotal = 0

  for (let i = 0; i < allProducts.length; i++) {
    endTotal += updateSubtotal(allProducts[i])
  }
  const displayTotal = document.querySelector('#total-value span')
  return displayTotal.innerHTML = endTotal
}
const itemList = document.querySelector('#cart tbody')

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  itemList.removeChild(target.parentNode.parentNode)
}

// ITERATION 5
function createProduct() {
  const newProductName = document.querySelector('.create-product .product-name input')
  const newProductPrice = document.querySelector('.create-product .product-price input')
  let newProductLine = document.createElement('tr')
  newProductLine.innerHTML = `<td class="name">
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
  newProductLine.classList.add('product')
  itemList.appendChild(newProductLine)
  newProductName.value = ''
  newProductPrice.value = '0'
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