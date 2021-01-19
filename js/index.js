// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  console.log(price, quantity)
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = price * quantity
  return price * quantity

}
//updateSubtotal(document.querySelector('.product'))
function calculateAll() {
  
  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let totalValue = 0
  products.forEach((product) => {
    totalValue += updateSubtotal(product)
  })

  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.textContent = totalValue
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode
  console.log('The target in remove is:', target)
  //... your code goes here
  target.parentNode.removeChild(target)
}

// ITERATION 5
function createProduct(event) {
  //... your code goes here
  let table = document.querySelector('tbody')
  let productName = event.currentTarget.parentNode.parentNode.querySelector('.name input').value
  let price = event.currentTarget.parentNode.parentNode.querySelector('.price input').value
  const productRow = document.createElement("tr");
        productRow.classList.add("product");
        productRow.innerHTML = `
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;
  table.appendChild(productRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  const removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach(buttonR => {
    buttonR.addEventListener('click', removeProduct)
  })
  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
});
