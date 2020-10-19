// ITERATION 1

function updateSubtotal(product) {
  // alert('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const total = parseFloat(price) * parseFloat(quantity);
  const subtotal = product.querySelector('.subtotal');
  subtotal.textContent = `$${total}`;
  return total;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);


  // end of test

  // ITERATION 2
  let resultTotal = 0;
  const products = document.querySelectorAll(".product");
  for (let i = 0; i < products.length; i++){
    resultTotal += updateSubtotal(products[i]);
  }
  // ITERATION 3
  const btnPrecioTotal = document.getElementById('total-value');
  btnPrecioTotal.textContent = `Total: $${resultTotal}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //... your code goes here
  const elemento = target.parentNode.parentNode;
  elemento.parentNode.removeChild(elemento);
  calculateAll();
}


// ITERATION 5

function createProduct(event) {
  //Coger los valores del nombre del nuevo producto y del precio
  let newProductName = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value;
  let newProductPrice = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value;
  //Clonar un producto existente
  let newProduct = document.querySelector(".product").cloneNode(true);
  //Fijar el nuevo product dentro de la tabla
  let parent = document.getElementsByTagName('tbody')[0];
  parent.appendChild(newProduct);
  //Reemplazar nombre y precio por los que indica el usuario (paso 1)
  newProduct.querySelector('.name span').textContent = newProductName;
  newProduct.querySelector('.price span').textContent = newProductPrice;
  //Borrar con el boton
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  calculateAll();
  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value = "";
  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value = 0;

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeProductBtn.length;i++){
  removeProductBtn[i].addEventListener('click', removeProduct);
  }
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  //... your code goes here
});
