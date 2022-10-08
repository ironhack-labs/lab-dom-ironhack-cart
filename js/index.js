// ITERATION 1

function updateSubtotal(product) {
  const priceElemnt = product.querySelector('.price span');
  const quantityElement = quantity.querySelector('.quantity input')
  const subtotalElement = product.querySelector('.subtotal span');
  const price = priceElement.innerText;
  const quantity = qttElement.value;
  const subtotal = parseFloat(price) * parseInt(quantity);
  subtotalElement.innerText = subtotal.toFixed(2);
  return subtotal;
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');

  let total = 0;
  for (let product of allProducts) {
    total += updateSubtotal(product);
  }
  // ITERATION 2
  //... your code goes here

  const totalElement = document.querySelector('#total-value span');

  totalElement.innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const currentRow = target.parentNode.parentNode;
  const tableElement = currentRow.parentNode;

  tableElement.removeChild(currentRow);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const createProductRow = event.currentTarget.parentNode.parentNode;
  const nameInputElement = createProductRow.querySelector('input[type=text]');
  const priceInputElement =
    createProductRow.querySelector('input[type=number]');

    const name = nameInputElement.value;
    const price = priceInputElement.value;

    const newProductRow = `
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>
  `;

  const tbodyElement = createProductRow.parentNode.previousElementSibling;
  tbodyElement.innerHTML += newProductRow;
  addRemoveListeners();
}

function addRemoveListeners() {
  // Seleciona todos os botões de remover
  const allRemoveButtons = document.querySelectorAll('.action button');

  // Configura cada botão para executar a função removeProduct no clique
  for (let buttonElement of allRemoveButtons) {
    buttonElement.addEventListener('click', removeProduct);
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  addRemoveListeners();

  // Selecionar o botão 'Create' e colocar o listener do evento de clique nele
  const createBtnElement = document.getElementById('create');

  createBtnElement.addEventListener('click', createProduct);
});