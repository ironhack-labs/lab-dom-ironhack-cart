// ITERATION 1---Update subtotal

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  //console.log(price, quantity)

  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  //console.log (subtotal, subtotalPrice)

  subtotal.innerText = subtotalPrice.toFixed(2); //Es un string

  return subtotalPrice; //Es un número
}

function calculateAll() {
  const product = document.getElementsByClassName('product');
  //console.log(product) --->HTML collection

  const totalValue = document.querySelector('#total-value span');
  let total = 0;

  for (let i = 0; i < product.length; i++) {
    total += updateSubtotal(product[i]);
  }

  totalValue.innerText = total.toFixed(2);

  return total;
}

// ITERATION 4

function removeProduct(event) {
  //const target = event.currentTarget;
  //console.log('The target in remove is:', target);

  const product = document.getElementsByClassName('product');
  // TODO: borrar producto recuperado del evento del param
  console.log(product);
  for (let i = 0; i < product.length; i++) {
    console.log(`PRODUCTO: ${product[i]}`);
    product[i].remove();
  }
}

// ITERATION 5

function createProduct() {
  const tableBody = document.querySelector('table tbody');
  const newProduct = document
    .querySelector('#templates .product')
    .cloneNode(true);
  const priceInput = document.querySelector('#unit-price'); // querSelector("#price")
  const nameInput = document.querySelector('#product-name'); // querSelector("#name")
  const price = Number(priceInput.value);
  const name = nameInput.value;
  if (name && price) {
    newProduct.querySelector('.name span').textContent = name;
    newProduct.querySelector('.price span').textContent = `${price}.00`;
    newProduct
      .querySelector('.btn-remove')
      .addEventListener('click', removeProduct);
    tableBody.appendChild(newProduct);
    priceInput.value = 0;
    nameInput.value = '';
  } else {
    window.alert('HEY RELLENA TODOS LOS CAMPOS!');
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
