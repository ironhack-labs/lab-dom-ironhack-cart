
// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.product .price span').textContent
  const quantity = product.querySelector(".quantity input[type='number']").value
  const subTotal = product.querySelector('.product .subtotal span').textContent = price*quantity
  

  return subTotal

}

function calculateAll() {
 
  // Creamos variable para el valor total de nuestro carrito
  let total = 0

  // Seleccionamos todos los elementos con la clase "product"
  const products = document.querySelectorAll('.product');

  // Iteramos sobre cada producto y actualizamos el subtotal
  for(let value of products) {
    total += updateSubtotal(value)
  }

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span').textContent = total

  // return totalValue
}

// ITERATION 4

function removeProduct(event) {
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove()

  calculateAll()
  
}

window.addEventListener('click', () => {
  const removeBtn = document.querySelectorAll('.btn-remove')
  
  for(let value of removeBtn) {
  
    value.addEventListener('click', removeProduct)
  }
  return removeBtn
})


// ITERATION 5

function createProduct() {

  const productName = document.querySelector(".create-product input[type='text']").value
  const unitPrice = document.querySelector(".create-product input[type='number']").value

  const addProduct = document.querySelector('#cart')

  const addRow = document.createElement('tr')
  addRow.classList.add('product')
  
  //Agregamos el nombre del producto
  const addProductName = document.createElement('td')
  addProductName.classList.add('name')
  const addSpanName = document.createElement('span')
  addProductName.appendChild(addSpanName)
  addSpanName.textContent = productName
  addRow.appendChild(addProductName)

  //Agregamos el precio del producto
  const addPrecioUnitario = document.createElement('td')
  addPrecioUnitario.classList.add('price')
  addPrecioUnitario.textContent = '$'
  const addSpanPrice = document.createElement('span')
  const formattedPrice = parseFloat(unitPrice).toFixed(2);
  addSpanPrice.textContent = formattedPrice
  addPrecioUnitario.appendChild(addSpanPrice)
  addRow.appendChild(addPrecioUnitario)

  //Agregamos la cantidad de productos
  const addQuantity = document.createElement('td')
  addQuantity.classList.add('quantity')
  const quantityInput = document.createElement('input')
  quantityInput.setAttribute('type', 'number')
  quantityInput.setAttribute('value', '0')
  quantityInput.setAttribute('min', '0')
  quantityInput.setAttribute('placeholder', 'Quantity')
  addQuantity.appendChild(quantityInput)
  addRow.appendChild(addQuantity)

  //agregamos el subtotal
  const addSubtotal = document.createElement('td')
  addSubtotal.classList.add('subtotal')
  addSubtotal.textContent = '$'
  const addSpanSubtotal = document.createElement('span')
  addSpanSubtotal.textContent = 0
  // const formattedSubtotalPrice = (unitPrice * parseFloat(quantityInput.value)).toFixed(2);
  // addSpanSubtotal.textContent = formattedSubtotalPrice
  addSubtotal.appendChild(addSpanSubtotal)
  addRow.appendChild(addSubtotal)

  //Agregamos el remove
  const addRemove = document.createElement('td')
  addRemove.classList.add('action')
  const addRemoveBtn = document.createElement('button')
  addRemoveBtn.classList.add('btn', 'btn-remove')
  addRemoveBtn.textContent = 'Remove'
  addRemove.appendChild(addRemoveBtn)
  addRow.appendChild(addRemove)
  
  addProduct.appendChild(addRow)

  // Reiniciamos el formulario
  document.querySelector(".create-product input[type='text']").value = "";
  document.querySelector(".create-product input[type='number']").value = "";


}


window.addEventListener('click', () => {
  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
  return createBtn
})

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
