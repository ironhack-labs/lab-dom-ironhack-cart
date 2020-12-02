const productsParent = document.querySelector('tbody');

// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const qty = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');

  let calcSubTotal = price.innerHTML * qty.value;
  subTotal.innerHTML = calcSubTotal;
  return calcSubTotal;
}

function calculateAll() {
  // ITERATION 2
  let products = document.querySelectorAll('.product');
  let totalPrice = 0;
  products.forEach(prod => totalPrice += updateSubtotal(prod));

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalPrice;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget.closest(".product");

  try {
    productsParent.removeChild(target);
    calculateAll();
  } catch (err){
    throw new Error('Error trying to remove the target')
  }
}

// ITERATION 5
function createProduct() {
  const newProdName = document.querySelector('#newProdName').value;
  const newProdPrice = document.querySelector('#newProdPrice').value;

  if(newProdName !== '' && newProdPrice !== ''){
    let newProduct = document.createElement('tr');
    newProduct.className = 'product';
    newProduct.innerHTML = `
        <tr class="product">
        <td class="name">
          <span>${newProdName}</span>
        </td>
        <td class="price">$<span>${newProdPrice}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      </tr>
    `;
    productsParent.appendChild(newProduct);
    newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let deleteBtn = document.querySelectorAll('.btn-remove');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct)
  })

  const newProdBtn = document.querySelector('#create');
  newProdBtn.addEventListener('click', createProduct)
});
