// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  let subtotal  = Number(price.innerText * quantity.value)
  const total = product.querySelector('.subtotal span')
  
  total.innerText = subtotal

  return subtotal

}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll(`.product`);
  const totalPrice = document.querySelector(`#total-value span`)
  let total = 0

  products.forEach(element => {
     total += updateSubtotal(element)
  });

  // ITERATION 3
  //... your code goes here
  totalPrice.innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentBtn = target.parentNode.parentNode
  parentBtn.remove()

  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName = document.querySelector('.product-name').value
  let productPrice = document.querySelector('.product-price').value
  const products = document.querySelector('#cart tbody')
  const newProduct = document.createElement('tr')

  newProduct.className = 'product'

  newProduct.innerHTML = `<td class="name">
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

  products.appendChild(newProduct)

  //Remmove product
  const btnRemove = newProduct.querySelector('.btn-remove')
  btnRemove.addEventListener('click', removeProduct)

  //Clear input
  document.querySelector('.product-name').value = ""
  document.querySelector('.product-price').value = 0

  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const romoveBtn = document.querySelectorAll('.btn-remove');
  romoveBtn.forEach((currBtn) => {
    return currBtn.addEventListener('click', removeProduct);
  })

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)

});
