// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  // price.innerHTML;
  // quantity.innerHTML;

  let calculate;
  calculate = parseInt(price.innerHTML) * parseInt(quantity.value);
  subtotal.innerHTML = calculate;
  return calculate;
}

function calculateAll() {
  const allItems = document.getElementsByClassName('product'); //allItems = [product1, product2...]
  let total = 0;
  for (let i = 0; i < allItems.length; i++) {
    total = total + updateSubtotal(allItems[i]);
  }
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentElement.parentElement;
  const parentRow = productRow.parentElement;
  parentRow.removeChild(productRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createProduct = document.querySelector('.create-product');
  const inputElementName = createProduct.querySelector('input');
  const inputElementSecond = createProduct.querySelector(
    "input[type = 'number']"
  );
  const tr = `
  <tr class="product">
          <td class="name">
            <span>${inputElementName.value}</span>
          </td>
          <td class="price">$<span>${inputElementSecond.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr> `;
  const tbodyElement = tr.parentElement;
  tbodyElement.appendChild(tr);
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButton = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
  }
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
