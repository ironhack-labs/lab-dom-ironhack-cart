// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;

  product.querySelector('.subtotal span').textContent = subtotal;

  return Number(subtotal);
}

function calculateAll() {
  // ITERATION 2

  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3

  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const parent = target.parentNode.parentNode.parentNode;

  parent.removeChild(target.parentNode.parentNode);

  if (document.querySelectorAll('.product').length > 0) calculateAll();
}

// ITERATION 5

function createProduct() {
  let campoVacío = false;
  const input = document.querySelectorAll('.create-product input');

  input.forEach((elem) => {
    if (elem.value == '') campoVacío = true;
  });

  if (!campoVacío) {
    const newProduct = document.createElement('tr');

    newProduct.classList.add('product');
    newProduct.innerHTML = `
    <td class="name">
          <span>${input[0].value}</span>
        </td>
        <td class="price">$<span>${input[1].value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
    `;

    document.querySelector('tbody').appendChild(newProduct);

    input.forEach((element) => {
      element.value = '';
    });

    const btn = newProduct.querySelector('.btn-remove');
    btn.addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // const removeProductBtns = document.querySelectorAll('.btn-remove');
  // removeProductBtns.forEach((removeBtn) => {
  //   removeBtn.addEventListener('click', removeProduct);
  // });

  const removeProductBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeProductBtns.length; i++) {
    removeProductBtns.item(i).addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector('#create');
  createBtn.onclick = () => {
    createProduct();
  };
});
