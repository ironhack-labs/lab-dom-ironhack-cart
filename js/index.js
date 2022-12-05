// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let total = price * quantity;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = total;
  return +subtotal.innerHTML;
}

function calculateAll() {
  // ITERATION 2
  let totalPrices = 0;

  const products = document.querySelectorAll('.product');
  products.forEach((prod) => {
    totalPrices += updateSubtotal(prod);
  })
  
  let finalTotal = document.querySelector('#total-value span');
  finalTotal.innerHTML = totalPrices;
  // ITERATION 3
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const productRow = document.createElement("tr");
  productRow.classList.add('product');
  const name = document.querySelector('.create-product input').value;
  const unit = document.querySelector('.unit input').value;
  const parent = document.querySelector('table tbody');

  productRow.innerHTML = `
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${unit}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        `;
  parent.appendChild(productRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const create = document.getElementById('create');
  create.addEventListener('click', createProduct);

  const removeItem = document.querySelectorAll('.btn-remove');
  removeItem.forEach((elem) => {
    elem.addEventListener('click', removeProduct)
  })
});
