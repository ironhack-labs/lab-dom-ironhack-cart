// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  let subtotal = product.querySelector('.subtotal span')

  let sum = price*quantity
  subtotal.innerText = sum
}

function calculateAll() {
  // ITERATION 2
  const Products = document.querySelectorAll('.product');
  const listOfProducts = [...Products]
  listOfProducts.forEach((item)=>{
    updateSubtotal(item)
  })

  // ITERATION 3
  let TotalValue = document.querySelector('#total-value span')
  let total = 0
  listOfProducts.forEach((item)=>{
    const subtotal = item.querySelector('.subtotal span').innerText
    total = total + Number(subtotal)
    TotalValue.innerText = total
  })
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  const row = target.parentNode.parentNode
  row.parentNode.removeChild(row)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('#product-name input').value
  const priceOfProduct = document.querySelector('#price-product input').value
  const tabla = document.querySelector('tbody')

  const newRow = document.createElement('tr')
  newRow.className = 'product'
  newRow.innerHTML = `<td class="name">
                        <span>${productName}</span>
                      </td>
                      <td class="price">$<span>${priceOfProduct}</span></td>
                      <td class="quantity">
                        <input type="number" value="0" min="0" placeholder="Quantity" />
                      </td>
                      <td class="subtotal">$<span>0</span></td>
                      <td class="action">
                        <button class="btn btn-remove">Remove</button>
                      </td>
                     `
  tabla.appendChild(newRow)
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const createProductButton = document.querySelector('#create')
  createProductButton.addEventListener('click', ()=>{
    createProduct()
    removeFunction()
  })
  
  const removeFunction = () => {
      const removeButtons = document.querySelectorAll('.btn-remove')
      const listOfRemoveButtons = [...removeButtons]
      listOfRemoveButtons.forEach((button)=>{
        button.addEventListener('click', removeProduct)
      })
  }
  removeFunction()
});
