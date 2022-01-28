// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const priceValue = parseFloat(price.innerText)
  const quantityValue = quantity.valueAsNumber

  const subtotal = priceValue * quantityValue

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerText = subtotal

  return subtotal
}

function calculateAll() {
  const products = document.getElementsByClassName('product')  


  // ITERATION 2
  let total = 0;

  for (let product of products) {
    updateSubtotal(product)

    total += updateSubtotal(product)
  }

  document.querySelector('#total-value span').innerText = total



  // ITERATION 3
  let textTotal = document.querySelector('#total-value span');
  console.log('textTotal');

  textTotal.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.target;
  const removeItems = target.parentNode.parentNode;

  removeItems.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector('.create-product');
  let newProductName = createRow.querySelector('input').value;
  let newProductPrice = createRow.querySelector("input[type='number']").valueAsNumber

  const newRow = document.createElement('tr');
  newRow.className = "product"
  newRow.innerHTML = `<td class="name">
  <span>${newProductName}</span>
</td>
<td class="price">$<span>${newProductPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct)

  const body = document.querySelector('#cart tbody');

  body.appendChild(newRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  [...removeBtn].forEach((button) => {
    button.addEventListener('click', removeProduct)
  })

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
});
