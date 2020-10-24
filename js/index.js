// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  const totalWithDecimals = price.innerHTML * quantity.value
  subtotal.innerHTML = totalWithDecimals
  return totalWithDecimals
}

  // ITERATION 2 && ITERATION 3

function calculateAll() {

  let sumTot = 0
  const totalProducts = document.querySelectorAll('.product')
  const totalPrintPrice = document.querySelector('#total-value span')
  
  totalProducts.forEach(function (elem) {
    sumTot += updateSubtotal(elem)
  })

  totalPrintPrice.innerHTML = sumTot.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; // Hace refencia al botón REMOVE.
  
  const buttonBox = target.parentNode // 
  const line = buttonBox.parentNode // 
  const tableBody = line.parentNode // 

  tableBody.removeChild(line) // El elemento padre de todos ejecuta el parámetro .removeChild() argumentando al hijo que quiere eliminar
  calculateAll() // ejecutamos función que nos calcule de nuevo el total
}


// ITERATION 5

function createProduct() {
  const addBtn = event.currentTarget;

  const newTr = document.createElement('tr')
  newTr.classList.add('product')
  document.querySelector('tbody').appendChild(newTr)

  let productName = newTr.insertCell(0)
  productName.classList.add('name')
  productName.innerHTML = '<span>Ironhack Beach Towe1</span>'

  let productPrice = newTr.insertCell(1)
  productPrice.classList.add('price')
  productPrice.innerHTML = '$<span>0.00</span></span>'

  let productQuantity = newTr.insertCell(2)
  productQuantity.classList.add('quantity')
  productQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />'

  let productSubTotal = newTr.insertCell(3)
  productSubTotal.classList.add('subtotal')
  productSubTotal.innerHTML = '$<span>0</span>'

  let productAction = newTr.insertCell(4)
  productAction.classList.add('action')
  productAction.innerHTML = '<button class="btn btn-remove">Remove</button>'

  removeProduct()

  /*
  
  En createProduct debe apuntar a los nodos DOM de entrada de nombre y precio unitario, 
  extraer sus valores, agregar una nueva fila a la tabla con el nombre del producto y el precio unitario, 
  así como la entrada de cantidad y el botón "Eliminar", y asegurarse de que todos 
  los la funcionalidad funciona como se esperaba.
  
  */
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)

  const rmButton = document.querySelectorAll('.btn-remove')
  rmButton.forEach(function (elm) {
    elm.addEventListener('click', removeProduct)
  })
})