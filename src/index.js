// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let priceElement = product.querySelector(".price span");
  let quantityInput = product.querySelector(".quantity input");
  let subtotalElement = product.querySelector(".subtotal span");

  let price = parseFloat(priceElement.textContent);
  let quantity = Number(quantityInput.value);

  let subtotal = price * quantity;
  subtotalElement.textContent = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  */
  
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach(product => {
    total += updateSubtotal(product);
  })

  let totalValueElement = document.querySelector('#total-value span');
  totalValueElement.textContent = total.toFixed(2);
}

window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
})

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let productRow = target.closest('.product');

  productRow.remove();

  calculateAll();
}

window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll)

  let removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button => {
    button.addEventListener('click', removeProduct)
  });
})

// ITERATION 5

function createProduct() {
  let nameEntry = document.querySelector('.create-product td input[type="text"]');
  let priceEntry = document.querySelector('.create-product td input[type="number"]');

  let name = nameEntry.value;
  let price = priceEntry.value;

  let tableBody = document.querySelector('#cart tbody');

  let newRow = document.createElement('tr');
  newRow.className = 'product';

  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${Number(price).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tableBody.appendChild(newRow);

  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  nameEntry.value = '';
  priceEntry.value = '';
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  let removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(button => {
    button.addEventListener('click', removeProduct);
  }) 
});
