// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price>span').innerHTML
  const quantity = product.querySelector('.quantity>input').value
  console.log(quantity)
  subTotal = quantity * price
  console.log(subTotal)
  const subtotalSpan = product.querySelector('.subtotal>span')
  subtotalSpan.innerHTML = subTotal
  console.log(subtotalSpan.innerHTML)
  return subTotal
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;
  allProducts.forEach(function(product){
    total += updateSubtotal(product)
  });
  console.log(total)
  const totalHTML = document.querySelector('#total-value>span')  
  totalHTML.innerHTML = `${total}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.parentNode.parentNode
  product.parentNode.removeChild(product)
}

// ITERATION 5
function createProduct() {
  const inputList = document.querySelectorAll('tr.create-product>td>input')
  const productName = inputList[0].value
  const productPrice = inputList[1].value

  const tbody = document.querySelector('tbody')
  let row = document.createElement('tr')
  row.innerHTML = `<td class="name">
  <span>${productName}</span>
</td>
<td class="price">$<span>${productPrice}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`
  tbody.appendChild(row)
  const removeBtns = document.querySelectorAll('.btn-remove');
  for(removeBtn of removeBtns){
    removeBtn.addEventListener('click', removeProduct)
}
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  const removeBtns = document.querySelectorAll('.btn-remove');
  for(removeBtn of removeBtns){
    removeBtn.addEventListener('click', removeProduct)
}
})
