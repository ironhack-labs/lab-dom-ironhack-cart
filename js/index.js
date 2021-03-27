// Calculate Subotal

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  console.log(quantity)
  let subtotal = product.querySelector('.subtotal span');
  let newSub = quantity * price;
  subtotal.innerText = newSub;
  return newSub;
}

// Calculate Total

function calculateAll() {
  let totalSub = 0;
  let products = document.querySelectorAll('.product');
  products.forEach(product => totalSub += updateSubtotal(product))
  let total = document.querySelector('#total-value span');
  total.innerText = totalSub;
}


// Create Products

function createProduct() {
  let newName = document.querySelector('#n input').value;
  let newPrice = document.querySelector('#p input').value;
  let tBody = document.querySelector('tbody')
  tBody.innerHTML += `
  <tr class="product">
    <td class="name">
      <span>${newName}</span>
    </td>
    <td class="price">$ <span>${newPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `
}
//Delete Products

window.addEventListener('load', () => {
  let calculate = document.querySelector('#calculate');
  calculate.addEventListener('click', calculateAll)
})
//New Product
const newProduct = document.querySelector('#create');

newProduct.addEventListener('click', createProduct)

//Remove Button
const removeButtons = document.querySelectorAll('.btn-remove');

removeButtons.forEach((removeButton) => removeButton.addEventListener('click', () => {
  removeButton.parentElement.parentElement.remove()
}))
