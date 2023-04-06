// Make a function that updates subtotal of each product
function updateSubtotal(product) {
  // Target elements
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let priceNum = Number(price.innerText);
  let quantityNum = Number(quantity.value);
  let subtotalNum = priceNum * quantityNum;

  subtotal.innerText = subtotalNum;
  return subtotalNum;
}

// Make a function that calculates price in total
function calculateAll() {
  // Target elements
  const totalSpan = document.querySelector('#total-value span');
  let products = document.getElementsByClassName('product'); 
  let totalNum = 0;

  for (let singleProduct of products) {
    updateSubtotal(singleProduct)
    totalNum += updateSubtotal(singleProduct)
  }

  totalSpan.innerText = totalNum.toFixed(1)
}

// Make a function that romoves the product which the remove button is clicked
function removeProduct(event) {
  const target = event.currentTarget;
  const targetProduct = target.parentNode.parentNode;
  
  targetProduct.remove()
  calculateAll()
}


// Make a function that create a new product
function createProduct() {
  // Target elements
  const productName = document.querySelector('input.create-name').value;
  const productPrice = document.querySelector('input.create-price').value;

  const cart = document.querySelector('#cart tbody');
  const newProduct = document.createElement("tr");
  
  newProduct.classList.add('product');
  newProduct.innerHTML = 
  ` 
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
  const newRemoveBtn = newProduct.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  cart.appendChild(newProduct);

  productName = "";
  productPrice = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButton = document.querySelectorAll('.btn.btn-remove');
  removeButton.forEach((eachButton) => {
    eachButton.addEventListener('click', removeProduct);
  })

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)
});
