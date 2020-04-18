// ITERATION 1

function updateSubtotal(product) {
  // señalamos los valores de price y de quantity de un product
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  // señalamos el objetivo donde guardar el subtotal
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = (quantity*price).toFixed(2);
 
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
  // seleccionamos el button presionado
  const targetButton = event.currentTarget;
  // seleccionamos la tabla de productos
  const cart = document.querySelector('#cart tbody')
  // seleccionamos el producto a eliminar
  const targetProduct = targetButton.parentElement.parentElement;
  // eliminamos el producto seleccionado y recalculamos el valor total del carrito
  cart.removeChild(targetProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  [...removeButtons].forEach(btn => btn.addEventListener('click', removeProduct));
});

