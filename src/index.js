// ITERATION 1

function updateSubtotal(product) {

  const priceE1 = product.querySelector(".price span")
  const quantityE1 = product.querySelector(".quantity input")
  const subTotalE1 = product.querySelector(".subtotal span")
  
  const priceValue = parseFloat(priceE1.innerHTML)
  const quantityValue = parseInt(quantityE1.value)
  const subTotal = priceValue * quantityValue

  //aqui lo cambia en el DOM
  subTotalE1.innerHTML = priceValue * quantityValue;

  // la funcion devuelve el valor
  return subTotal; 



  //... your code goes here
}

function calculateAll() {
  
  const products = document.getElementsByClassName('product');

  const productsArray = [...products];

  let total = 0

  for (let i = 0; i < productsArray.length; i++) {
    updateSubtotal(productsArray[i]);

    total += updateSubtotal(productsArray[i]);
  }

  document.querySelector('#total-value span').textContent = total;
};


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const td = target.parentNode

  const tr = td.parentNode

  const tbody = tr.parentNode

  tbody.removeChild(tr)


  //... your code goes here
}

// ITERATION 5

function createProduct(event) {

  // 1) tomar input fila de creacion
  const nameInput  = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value.trim()
  const price = Number(priceInput.value)

  //crear fila
  const tr = document.createElement('tr')
  tr.className = 'product'

  // Columna nombre

  const tdName = document.createElement('td');
  tdName.className = 'name'
  const spanName = document.createElement('span');
  spanName.textContent = name;
  tdName.appendChild(spanName);

  // Columna precio

  const tdPrice = document.createElement('td');
  tdPrice.className = 'price';
  tdPrice.textContent = '$';
  const spanPrice = document.createElement('span');
  spanPrice.textContent = price
  tdPrice.appendChild(spanPrice)

  //Columna cantidad

  const tdQuantity = document.createElement('td');
  tdQuantity.className = 'quantity';
  const inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.value = 0;
  inputQuantity.min = 0;
  inputQuantity.placeholder = "0";
  tdQuantity.appendChild(inputQuantity);
  
  // columna subtotal
  const tdSubtotal = document.createElement('td');
  tdSubtotal.className = 'subtotal';
  tdSubtotal.textContent = '$';
  const spanSubtotal = document.createElement('span');
  spanSubtotal.textContent = 0;
  tdSubtotal.appendChild(spanSubtotal);

  // columna del boton
  const tdAction = document.createElement('td');
  tdAction.className = 'action';
  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn btn-remove';
  btnRemove.textContent = 'Remove';
  tdAction.appendChild(btnRemove)

  // construir la fila

  tr.appendChild(tdName);
  tr.appendChild(tdPrice);
  tr.appendChild(tdQuantity);
  tr.appendChild(tdSubtotal);
  tr.appendChild(tdAction);

  // añadir la fila al tbody

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(tr);

  //activar boton remove 
  btnRemove.addEventListener('click', removeProduct);

  //limpiar input de creacion

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //boton para eliminar
  const removeButtons = document.querySelectorAll('.btn-remove');
  const removeButtonsArray = [...removeButtons]

  for (let product of removeButtonsArray) {
    product.addEventListener('click', removeProduct);
}

// boton crear nueva fila

  const createP = document.getElementById('create')

  createP.addEventListener('click', createProduct);


});
