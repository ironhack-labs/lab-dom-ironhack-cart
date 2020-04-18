// ITERATION 1

function updateSubtotal(product) {
  // señalamos los valores de price y de quantity de un product
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  // señalamos el objetivo donde guardar el subtotal
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = (quantity*price).toFixed(2);
  // retornamos el valor de subtotal para su uso en calculateAll()
  return (quantity*price);
}

// ITERATION 2 - 3

function calculateAll() {
  // crear una lista con todos los products
  const allProduct = document.querySelectorAll('.product');
  // calculamos el total a partir del cálculo de todos los subtotales
  const total =parseFloat([...allProduct].reduce((acc, prod) => acc + parseFloat(updateSubtotal(prod)), 0))
  // señalamos la casilla donde guardar el total y lo asignamos
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  // seleccionamos el button presionado y con ello todo el producto a eliminar
  const targetButton = event.currentTarget;
  const targetProduct = targetButton.parentElement.parentElement;
  // seleccionamos la tabla de productos y eliminamos el producto
  const cart = document.querySelector('#cart tbody')
  cart.removeChild(targetProduct);
  // actualizamos el valor del carro
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // recogemos los valores del nuevo producto: nombre y precio
  let newProductName = document.querySelectorAll('.create-product > td > input')[0].value;
  let newProductPrice = document.querySelectorAll('.create-product > td > input')[1].value;
  // creamos una nueva estructura de producto
  const newProduct = document.createElement('tr');
  newProduct.setAttribute('class', 'product');
  // td 1 -> name
  const tdName = document.createElement('td');
  tdName.setAttribute('class', 'name');
  const spanName = document.createElement('span');
  spanName.innerHTML = newProductName;
  tdName.appendChild(spanName);
  newProduct.appendChild(tdName);
  // td 2 -> price
  const tdPrice = document.createElement('td');
  tdPrice.setAttribute('class', 'price');
  tdPrice.innerHTML = '$';
  const spanPrice = document.createElement('span');
  spanPrice.innerHTML = parseFloat(newProductPrice).toFixed(2);
  tdPrice.appendChild(spanPrice);
  newProduct.appendChild(tdPrice);
  // td 3 -> quantity
  const tdQuantity = document.createElement('td');
  tdQuantity.setAttribute('class', 'quantity');
  const inputQuantity = document.createElement('input');
  inputQuantity.setAttribute('type', 'number');
  inputQuantity.setAttribute('value', '0');
  inputQuantity.setAttribute('min', '0');
  inputQuantity.setAttribute('placeholder', 'Quantity');
  tdQuantity.appendChild(inputQuantity);
  newProduct.appendChild(tdQuantity);
  // td 4 -> subtotal
  const tdSubTotal = document.createElement('td');
  tdSubTotal.setAttribute('class', 'subtotal');
  tdSubTotal.innerHTML = '$';
  const spanSubTotal = document.createElement('span');
  spanSubTotal.innerHTML = '0';
  tdSubTotal.appendChild(spanSubTotal);
  newProduct.appendChild(tdSubTotal);
  // td 5 -> action
  const tdAction = document.createElement('td');
  tdAction.setAttribute('class', 'action');
  const buttonAction = document.createElement('button');
  buttonAction.setAttribute('class', 'btn btn-remove');
  buttonAction.innerHTML = 'Remove'
  tdAction.appendChild(buttonAction);
  newProduct.appendChild(tdAction);
  // seleccionamos la tabla de productos y le añadimos el nuevo producto
  const productTable = document.querySelector('#cart tbody');
  productTable.appendChild(newProduct);
  // limpiar los valores de los inputs
  document.querySelectorAll('.create-product > td > input')[0].value = '';
  document.querySelectorAll('.create-product > td > input')[1].value = '0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // evento: click a uno de los botones "remove"
  let removeButtons = document.querySelectorAll('.btn-remove');
  [...removeButtons].forEach(btn => btn.addEventListener('click', removeProduct));
  // evento: añade un nuevo elemento y vuelve a reiniciar el valor de removeButtons
  const createProductButton = document.querySelector('#create');
  createProductButton.addEventListener('click', () => {
    createProduct();
    let removeButtons = document.querySelectorAll('.btn-remove');
    [...removeButtons].forEach(btn => btn.addEventListener('click', removeProduct));
  });
});