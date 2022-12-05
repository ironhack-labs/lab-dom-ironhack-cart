// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').valueAsNumber;

  const subtotal = +price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // const productsNode = document.querySelectorAll('.product');
  const productsCollection = document.getElementsByClassName('product');

  // const productsList = [...productsNode]
  const productsList = [...productsCollection];

  let total = 0;

  // productsList.forEach(product => total += updateSubtotal(product))

  // for (let i = 0; i < productsList.length; i += 1){
  //   total += updateSubtotal(productsList[i])
  // }

  for (const product of productsList) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  const totalElm = document.querySelector('#total-value span');

  totalElm.innerText = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  const parent = target.parentNode.parentNode;

  parent.remove();

  calculateAll();
}

// ITERATION 5
function createProduct() {
  const nameInput = document.querySelector('.create-product input');
  const nameValue = nameInput.value;

  const priceInput = document.querySelector(
    '.create-product input[type=number]'
  );
  const priceValue = priceInput.valueAsNumber;

  if (nameValue === '' || !priceValue) {
    window.alert('You should add the information');
    return;
  }

  let newProduct = document.createElement('tr');
  newProduct.className = 'product';

  newProduct.innerHTML = `
      <td class="name">
        <span>${nameValue}</span>
      </td>
      <td class="price">$<span>${priceValue}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>"
  `;

  const tBodyElm = document.querySelector('#cart tbody');

  tBodyElm.appendChild(newProduct);

  const removeBtn = newProduct.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  // const calculatePricesBtn = document.getElementById('calculate');
  // calculatePricesBtn.addEventListener('click', calculateAll);

  // const removeBtns = [...document.getElementsByClassName('btn-remove')]
  // removeBtns.forEach(button => button.addEventListener('click', removeProduct))

  // const createBtn = document.getElementById('create')
  // createBtn.addEventListener('click', createProduct)

  const buttons = [...document.getElementsByClassName('btn')];
  buttons.forEach((button) => {
    if (button.id === 'create') button.addEventListener('click', createProduct);

    if (button.id === 'calculate')
      button.addEventListener('click', calculateAll);

    if ([...button.classList].includes('btn-remove'))
      button.addEventListener('click', removeProduct);
  });
});
