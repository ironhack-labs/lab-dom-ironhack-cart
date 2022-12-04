// ITERATION 1

function updateSubtotal(product) {
  return product.forEach((singleProduct) => {
    const price = +singleProduct.querySelector('.price span').innerText;
    const quantity = +singleProduct.querySelector('input').value;

    const subTotal = price * quantity;

    singleProduct.querySelector('.subtotal span').innerText = subTotal;
  });
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  updateSubtotal(products);

  // ITERATION 3
  let total = 0;
  products.forEach((product) => {
    const subTotal = +product.querySelector('.subtotal span').innerText;
    total += subTotal;
  });

  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  const objectRemoved = document.querySelector('tbody');
  objectRemoved.removeChild(target);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newName = document.querySelector('.create-product input[type="text"]');
  const newPrice = document.querySelector(
    '.create-product input[type="number"]'
  );

  const tr = document.createElement('tr');
  tr.classList.add('product');
  tr.innerHTML = `
        <td class="name">
          <span>${newName.value}</span>
        </td>
        <td class="price">$<span>${newPrice.value}</span></td>
        <td class="quantity">
          <input type="number" value="0" min="0" placeholder="Quantity" />
        </td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action">
          <button class="btn btn-remove">Remove</button>
        </td>
      `;

  document.querySelector('tbody').appendChild(tr);

  const newButtomRemover = document
    .querySelector('tbody')
    .querySelectorAll('.btn-remove');
  newButtomRemover[newButtomRemover.length - 1].addEventListener(
    'click',
    removeProduct
  );

  newName.value = '';
  newPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
