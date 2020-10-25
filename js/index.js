// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  let subtotal = product.querySelector('.subtotal span')

  let subtotalValue = price * quantity

  subtotal.innerText = subtotalValue

  console.log(subtotalValue)

}
// ITERATION 2 & 3


function calculateAll() {

  let allProducts = document.querySelectorAll('.product')

  let subtotalSum = 0

  allProducts.forEach(element => subtotalSum += updateSubtotal(element))

  let totalValueCart = document.querySelector('#total-value span')

  totalValueCart.innerText = subtotalSum

}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;

  const tableBody = document.querySelector('tbody')

  const buttonParentNode = target.parentNode

  const rowParentNodeOfButton = buttonParentNode.parentNode

  tableBody.removeChild(rowParentNodeOfButton)

  calculateAll()

}

// ITERATION 5

function createProduct() {

  let newProduct = document.querySelector('.create-product input[type=text]').value
  const newProductPrice = document.querySelector('.create-product input[type=number]').value


  if (newProduct === '' || newProductPrice === '0') {
    alert("Tienes que añadir un producto y precio.")
  } else {

    const newTableRow = document.createElement('tr')
    newTableRow.setAttribute('class', 'product')

    const newProductRow = `<td class="name">
            <span>${newProduct}</span>
          </td>
          <td class="price">$<span>${newProductPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`


    newTableRow.innerHTML = newProductRow

    document.querySelector('tbody').appendChild(newTableRow)

    document.querySelector('.create-product input[type=text]').value = ''
    document.querySelector('.create-product input[type=number]').value = 0

    const removeBtn = document.querySelectorAll('.btn-remove')

    removeBtn.forEach(element => element.addEventListener('click', removeProduct))
  }

}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.querySelector('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // BONUS - Iteration 4

  const removeBtn = document.querySelectorAll('.btn-remove')

  removeBtn.forEach(element => element.addEventListener('click', removeProduct))


  // BONUS - Iterarion 5
  const createProductBtn = document.querySelector('#create')

  createProductBtn.addEventListener('click', createProduct)

});
