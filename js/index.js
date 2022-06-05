// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  const subtotalBox = product.querySelector('.subtotal span')
  subtotalBox.innerHTML = subtotal

  return subtotal



}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')
  let sum = 0
  products.forEach(product => {
    sum += updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  let totalText = document.querySelector('#total-value span')
  totalText.innerHTML = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here
  const targetNode = target.parentNode.parentNode
  targetNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productBoxes = document.querySelectorAll('.create-product input')
  const productNameBox = productBoxes[0].value
  const productPrice = productBoxes[1].value


  const newRow = document.createElement('tr')
  const newRowContent = `
        <td class="name">
          <span>${productNameBox}</span>
        </td>
        <td class="price">$<span>${productPrice}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
        `

  newRow.innerHTML = newRowContent
  newRow.classList = 'product'
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct)

  document.querySelector('tbody').appendChild(newRow)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  let createRowButton = document.querySelector('#create')
  createRowButton.addEventListener('click', createProduct)

});
