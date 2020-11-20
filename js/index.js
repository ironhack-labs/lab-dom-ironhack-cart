const cartElement = document.querySelector('#cart tbody');
const calcElement = document.getElementById('calc');

function updateSubtot(productElement) {
  // Iteration 1.1
  const priceSpanElement = productElement.querySelector('.pu span');
  const priceValue = priceSpanElement.innerText;

  const quantityInputElement = productElement.querySelector('input');
  const quantityValue = quantityInputElement.value;

  const subtotal = parseFloat(priceValue) * parseInt(quantityValue);

  const subtotalSpanElement = productElement.querySelector('.subtot span');

  subtotalSpanElement.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calcAll() {
  // Iteration 1.2
  const allProductsElements = document.querySelectorAll('tr.product');

  let total = 0;

  for (let productElement of allProductsElements) {
    let subtotal = updateSubtot(productElement);
    total += subtotal;
  }

  const totalSpanElement = document.querySelector('h2 span');

  totalSpanElement.innerText = total.toFixed(2);
}

calcElement.addEventListener('click', calcAll);

// Iteration 4

const removeProduct = event => {
  const buttonElement = event.target;
  const productRowElement = buttonElement.parentNode.parentNode;
  const tableBodyElement = productRowElement.parentNode;

  tableBodyElement.removeChild(productRowElement);

  calcAll();
};

const removeButtonsElement = document.getElementsByClassName('btn-delete');

for (let removeButtonElement of removeButtonsElement) {
  removeButtonElement.addEventListener('click', removeProduct);
}

// Iteration 5

const inputNewProductNameElement = document.querySelector('.new input');
const inputNewProductPriceElement = document.querySelector('.new input[type="number"]');

const newProductButtonElement = document.querySelector('.new button');

const createNewProductRow = event => {
  // ...
  const name = inputNewProductNameElement.value;
  const price = inputNewProductPriceElement.value;

  inputNewProductNameElement.value = '';
  inputNewProductPriceElement.value = '';

  const trElement = document.createElement('tr');
  trElement.classList.add('product');
  trElement.innerHTML += `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="pu">$<span>${price}</span></td>
    <td class="qty">
      <label>
        <input type="number" value="0" min="0" />
      </label>
    </td>
    <td class="subtot">$<span>0</span></td>
    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  `;

  const removeButtonElement = trElement.querySelector('button');

  removeButtonElement.addEventListener('click', removeProduct);

  cartElement.appendChild(trElement);
};

$newProductButton.addEventListener('click', createNewProductRow);