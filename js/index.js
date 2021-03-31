function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input[type="number"]').value
  let subTotal = price * quantity;
  console.log(price, quantity)
  product.querySelector('.subtotal span').innerText = subTotal;
  return subTotal
}

function calculateAll() {
  let sum = 0;
  const products = document.getElementsByClassName('product');
  for (let product of products) {
    sum += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = sum;
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
  calculateAll();
}

function createProduct() {
  let productContainer = document.querySelector('tbody')
  let name = document.querySelector('.create-product input[type="text"]');
  let price = document.querySelector('.create-product input[type="number"]');
  const product = document.createElement('tr');
  product.classList.add('product');


  product.innerHTML = `
    <td class="name"><span>${name.value}</span></td>
    <td class="price">$<span>${price.value}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;
  product.querySelector('button').addEventListener('click', removeProduct);
  productContainer.appendChild(product);
  
  name.value = ''
  price.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct)
});