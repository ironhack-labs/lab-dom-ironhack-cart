function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value
  const total = price * quantity;

  product.querySelector(".subtotal span").innerHTML = total.toFixed(2);
  return total;
}

function calculateAll() {
  let total = 0;

  document.querySelectorAll('.product').forEach(
    product => total += updateSubtotal(product)
  )
  document.querySelector('#total-value span').innerHTML = total.toFixed(2)
}

function removeProduct(event) {
  event.target.closest('.product').remove()
  calculateAll()
}

function createProduct(event) {
  const createForm = event.target.closest('.create-product')

  const name = createForm.querySelector('[type=text]')
  const price = createForm.querySelector('[type=number]')

  const product = document.createElement('tr')
  product.className = 'product'
  product.innerHTML = `
    <td class="name">
      <span>${name.value}</span>
    </td>
    <td class="price">$<span>${(+price.value).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `

  document.querySelector('#cart tbody').appendChild(product)

  name.value = ''
  price.value = ''
}

window.addEventListener('load', () => {
  document.querySelector('body').addEventListener('click', (event) => {
    if ([...event.target.classList].includes('btn-remove')) removeProduct(event)
    if (event.target.id === "calculate") calculateAll()
    if (event.target.id === "create") createProduct(event)
  })
});
