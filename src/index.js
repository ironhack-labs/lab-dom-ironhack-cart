// @ts-nocheck
// ITERATION 1
function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  product.querySelector(".subtotal span").innerHTML = Number(price * Math.abs(quantity)).toFixed(2)

  return Number(price * Math.abs(quantity))
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0
  const products = document.querySelectorAll('.product')
  products.forEach(product => sum += updateSubtotal(product))

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = sum.toFixed(2)
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)

  target.parentElement.parentElement.remove()
  calculateAll()
}

// ITERATION 5
function createProduct() {
  const newItem = document.querySelectorAll('.create-product input')
  const productName = newItem[0].value
  const productPrice = newItem[1].value

  const itemHTML = `
    <tr class="product">
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${Number(productPrice).toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `

  if (newItem[0].value != "" && newItem[1].value > 0) {
    document.querySelector('tbody').innerHTML += itemHTML
    
    // Adds event listener to every new item added in Table (unneficient)
    document.querySelector('.btn-remove').addEventListener("click", removeProduct)
      
    newItem[0].value = "", newItem[1].value = 0
  }
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn?.addEventListener('click', calculateAll)

  // ITERATION 4
  const removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach((button) => button.addEventListener("click", removeProduct))
  
  // ITERATION 5
  const createBtn = document.querySelector('#create')
  createBtn?.addEventListener('click', createProduct)
})

// Event delegation instead of attaching event listeners
// const tBody = document.querySelector('tbody')
// tbody.addEventListener('click', (event) => { 
//   if (event.target.classList.contains('btn-remove')) {
//     console.log(event.target.parentElement, 'remove')
//     event.target.parentElement.parentElement.remove()
//   }
// })