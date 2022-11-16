// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value

  product.querySelector(".subtotal span").innerHTML = price * quantity;
  return price * quantity;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let total = 0;
  products.forEach(product => total += updateSubtotal(product))

  // ITERATION 3
  const totalDisplay = document.querySelector('#total-value span')
  totalDisplay.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target)
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  const createElement = event.currentTarget.parentNode.parentNode

  const name = createElement.querySelector('[type=text]').value
  const price = +createElement.querySelector('[type=number]').value
  
  const product = document.createElement('tr')
  product.className = 'product'
  product.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `

  const tableBody = document.querySelector('#cart tbody')
  tableBody.appendChild(product)

  product.querySelector('.btn-remove').addEventListener('click', removeProduct)

  
  // console.log(tableBody);
/*
  const productName = document.createElement('td')
  productName.className ='name'
  const nameText = document.createElement('span')
  nameText.innerHTML = name
  productName.appendChild(nameText)
  product.appendChild(productName) */
  // console.log(product);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach(
    button => button.addEventListener('click', removeProduct)
  )

  const createButton = document.querySelector('#create')
  createButton.addEventListener('click', createProduct)
});
