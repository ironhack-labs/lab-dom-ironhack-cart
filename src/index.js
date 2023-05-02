// @ts-nocheck
// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  product.querySelector(".subtotal span").innerHTML = price * Math.abs(quantity)

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
  // @ts-ignore
  document.querySelector("#total-value span").innerHTML = String(sum)
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentElement.parentElement.remove()
  calculateAll()
}

// ITERATION 5
function createProduct() {
  const newItem = document.querySelectorAll('.create-product input')

  const itemHTML = `
    <tr class="product">
      <td class="name">
        <span>${newItem[0].value}</span>
      </td>
      <td class="price">$<span>${newItem[1].value}</span></td>
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
    document.querySelectorAll('.btn-remove').forEach((button) =>
      button.addEventListener("click", removeProduct)
    )
    newItem[0].value = '', newItem[1].value = 0
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn?.addEventListener('click', calculateAll)

  const removeBtns = document.querySelectorAll('.btn-remove')
  removeBtns.forEach((button) => button.addEventListener("click", removeProduct))
  
  const createBtn = document.querySelector('#create')
  createBtn?.addEventListener('click', createProduct)
})
