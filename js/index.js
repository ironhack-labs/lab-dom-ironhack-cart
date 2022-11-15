// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('[min]').value// get input and the value of the input

  product.querySelector('.subtotal span').innerHTML = price * quantity
  return price * quantity
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('tbody .product')

  console.log(products)

  let total = 0; 
  for( let product of products){
    total += updateSubtotal(product)
  }

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span')
  totalElement.innerHTML = total
}

// ITERATION 4

function removeProduct(button) {
  const parent = button.closest('tbody')
  const row = button.closest('.product')
  parent.removeChild(row)
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input')// [0] = Product name / [1] = costPerUnit 
  const tBody = document.querySelector('tbody') // get the table body to insert a child
  const newProduct = document.createElement('tr')
  newProduct.className = 'product'
  newProduct.innerHTML = `
    <tr class="product">
      <td class="name">
        <span>${inputs[0].value}</span>
      </td>
      <td class="price">$<span>${inputs[1].value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity"/>
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `

  newProduct.querySelector('.btn-remove').addEventListener('click', (e) => {
    tBody.removeChild(newProduct)
  })

  tBody.appendChild(newProduct) // append the child to the tBody
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeButtons = document.querySelectorAll('.btn-remove')
  console.log(removeButtons)
  for(let button of removeButtons){
    button.addEventListener('click', (e) => removeProduct(e.currentTarget))
  }

  const addButton = document.getElementById('create')
  addButton.addEventListener('click', createProduct)
});
