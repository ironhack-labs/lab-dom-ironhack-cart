// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity')
  const subtotal = product.querySelector('.subtotal span')

  const priceValue = price.innerText
  const quantityValue = quantity.querySelector('input').value
  const subtotalValue = priceValue * quantityValue
  subtotal.innerText = subtotalValue
  return subtotalValue
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(product => {
    updateSubtotal(product)
  })

  const total = document.querySelector('#total-value span')
  let totalValue = 0
  allProducts.forEach(product => {
    totalValue += updateSubtotal(product)
  })
  total.innerText = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(".create-product input[type='text']").value
  const productPrice = document.querySelector(".create-product input[type='number']").value
  
  if (productName === "" || isNaN(productPrice) || productPrice <= 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  const newRow = document.createElement('tr')
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
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
  const tableBody = document.querySelector('tbody')
  tableBody.appendChild(newRow)

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct);

  const removeRowBtns = document.querySelectorAll('.btn-remove')
  removeRowBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct)
  })
});
