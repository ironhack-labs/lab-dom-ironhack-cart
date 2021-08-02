// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalDOM = product.querySelector('.subtotal span');
  const subtotal = (price * quantity).toFixed(2);
  subtotalDOM.innerHTML = subtotal;
  return +subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach((singleProduct) => (total += updateSubtotal(singleProduct)));
  document.querySelector('#total-value span').innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeBtnContabilize() {
  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  removeProductBtn.forEach((eachButton) =>
    eachButton.addEventListener('click', removeProduct)
  );
}

function removeProduct(event) {
  const target = event.currentTarget;
  const pai = target.parentNode.parentNode.parentNode;
  const filho = target.parentNode.parentNode;
  pai.removeChild(filho);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const carrinho = document.querySelector('#cart tbody');
  const productName = document.querySelector('#product-name');
  const productPrice = document.querySelector('#product-price');
  const newProduct = `
        <tr class="product">
          <td class="name">
            <span>${productName.value}</span>
          </td>
          <td class="price">$<span>${(+productPrice.value).toFixed(2)}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0.00</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
        `;
  carrinho.innerHTML += newProduct;
  productName.value = '';
  productPrice.value = '';
  removeBtnContabilize();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const createBtn = document.querySelector('#create');
  calculatePricesBtn.addEventListener('click', calculateAll);
  createBtn.addEventListener('click', createProduct);
  removeBtnContabilize();
});
