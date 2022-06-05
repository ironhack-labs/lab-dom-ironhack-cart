// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalElement = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('tr.product');
  const totalElement = document.querySelector('#total-value span');
  let total = 0;
  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  console.log('The target in remove is:', target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector('.create-product input[type=text]');
  let productPrice = document.querySelector(
    '.create-product input[type="number"]'
  );
  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = `
           <td class="name">
            <span>${productName.value}</span>
          </td>
          <td class="price">$<span>${productPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  newProduct.querySelector('button').addEventListener('click', removeProduct);
  document.querySelector('#cart tbody').appendChild(newProduct);
  console.log(productName);
  productName.value = '';
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  // calculate Prices
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Remove Items
  const allRemoveBtn = document.querySelectorAll('.btn.btn-remove');
  allRemoveBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  // Add Items
  const create = document.querySelector('#create');
  create.addEventListener('click', createProduct);
});
