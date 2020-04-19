// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
 const price = parseInt(product.querySelector('.price span').innerHTML);
 const quantity = parseInt(product.querySelector('.quantity input').value);
 let subtotal = product.querySelector('.subtotal span');
 subtotal.innerHTML = price * quantity;
 return parseInt(subtotal.innerHTML);
  
}

function calculateAll(event) {
  // ITERATION 2
  const productos = document.getElementsByClassName("product");
  [...productos].forEach(elem => updateSubtotal(elem));
  // ITERATION 3
  let total = document.querySelector("#total-value span");
  total.innerHTML = [...productos].reduce((acc, elem) => acc + updateSubtotal(elem), 0)
}

// ITERATION 4
function removeProduct(event) {
 const target = event.currentTarget;
 const filaProducto = target.parentElement.parentElement;
 const tablaProductos = filaProducto.parentElement;
 tablaProductos.removeChild(filaProducto);
 calculateAll();
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  const newProduct = document.querySelector('#product-template.product').cloneNode(true);
  let tablaProds = document.querySelector('tbody');
  const createProd = document.querySelector('.create-product');
  const createProdInputs = createProd.querySelectorAll('input');
  const newProdName = createProdInputs[0].value;
  const newProdPrice = parseFloat(createProdInputs[1].value);
  //
  const prodName = newProduct.querySelector('.name span');
  prodName.innerHTML = newProdName;
  const prodPrice = newProduct.querySelector('.price span')
  prodPrice.innerHTML = newProdPrice.toFixed(2);
  //
  const newProdRemove = newProduct.querySelector('.btn-remove');
  newProdRemove.addEventListener('click',removeProduct);
  //
  newProduct.style.display = "table-row";
  tablaProds.appendChild(newProduct);
  createProdInputs[0].value = "";
  createProdInputs[1].value = 0;
}

window.addEventListener('load', () => {
  //Listener para los botones remover producto
  const remover = document.querySelectorAll('.btn-remove');
  Array.from(remover).forEach(elem => elem.addEventListener('click', removeProduct));
  //Listener para el boton Calculate Prices
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Listener para el boton crear producto
  const crearProd = document.querySelector('#create');
  crearProd.addEventListener('click', createProduct);
});
