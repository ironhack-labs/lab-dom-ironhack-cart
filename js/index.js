// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const priceValue = parseFloat(price.innerHTML)
  const inputValue = quantity.value

  const subtotalValue = priceValue * inputValue

  
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalValue

  return subtotalValue
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
   
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product')
  let total = 0

  for(let product of products) {
    total += updateSubtotal(product)
  }
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const button = event.currentTarget;
  const product = button.parentNode.parentNode
  const parent = product.parentNode

  parent.removeChild(product)
  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createRow = document.querySelector('.create-product')
  const newProductInput = createRow.querySelector('input')
  const newProductName = newProductInput.value
  const newProductPriceInput = createRow.querySelector('input[type="number"]')
  const newProductPriceValue = newProductPriceInput.valueAsNumber.toFixed(2)
  const newTr = document.createElement('tr')
  newTr.innerHTML = `
  <td class="name">
            <span>${newProductName}</span>
          </td>
          <td class="price">$<span>${newProductPriceValue}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `

  const parent = document.querySelector('#cart tbody')
  parent.appendChild(newTr)

  const removeBtn = newTr.querySelector('.btn-remove')
  removeBtn.addEventListener('click', removeProduct)

  newProductInput.value = ''
  newProductPriceInput.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductsBtn = document.getElementsByClassName('btn-remove')
  for(let removeProductBtn of removeProductsBtn) {
    removeProductBtn.addEventListener('click', removeProduct)
  }

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)
});
