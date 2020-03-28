// ITERATION 1

function updateSubtotal($product) {

  const productPrice = parseFloat($product.querySelector('.price span').innerHTML)
  const productQuantity = parseInt($product.querySelector('.quantity input').value)

  let subtotal = productPrice * productQuantity

  $product.querySelector('.subtotal span').innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  // ITERATION 2

  const allProducts = document.querySelectorAll('.product')
  let totalPrice = 0

  allProducts.forEach(elm => {
    totalPrice += updateSubtotal(elm)
  })

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalPrice
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);

});

// ITERATION 4

//Se obtiene todos los botones 'remove' al inicio del programa
const productListTable = document.querySelector('tbody')
const allRemoveProductButton = document.querySelectorAll('.btn-remove')

//Se añade evento onclick a todos los botones remove
allRemoveProductButton.forEach(elm => {
  elm.onclick = ev => productRemoveListener(ev, elm.parentElement.parentElement)
})

function productRemoveListener(event, productNode) {
  document.querySelector('tbody').removeChild(productNode)
}

// ITERATION 5

//Se añade evento onclick al boton de crear
const createProductButton = document.querySelector('#create')
createProductButton.onclick = ev => createProduct(ev)

function createProduct(event) {
  //Se obtienen los datos del nuevo producto
  const newProductName = document.querySelector('.create-product .new-product-name').value
  const newProductPrice = document.querySelector('.create-product .new-product-price').value

  //Se comprueba que los campos no estén vacios
  if (newProductName != '' && newProductPrice != 0) {
    //Se crea el nodo que se quiere añadir que debe ser de etiqueta tr
    //y se le añade la clase product
    let newNode = document.createElement('tr')
    newNode.classList.add('product')

    //Se le añade el texto HTML de la nueva fila
    newNode.innerHTML = `<td class="name"><span>${newProductName}</span ></td ><td class="price">$<span>${parseFloat(newProductPrice).toFixed(2)}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`

    //Finalmente se añade al documento aprovechando la variable productListTable que usamos antes
    productListTable.appendChild(newNode)

    //Para que funcione el boton de eliminar hay que añadirle el evento onclick
    let newNodeRemoveButton = newNode.querySelector('.btn-remove')
    newNodeRemoveButton.onclick = ev => productRemoveListener(ev, newNodeRemoveButton.parentElement.parentElement)

    //Para que se actualice automaticamente se le añade el evento onchange
    const newNodeQuantity = newNode.querySelector('.quantity input')
    newNodeQuantity.onchange = ev => updateSubtotalLive(ev, newNodeQuantity.parentElement.parentElement)

  } else {
    alert("No se han introducido todos los campos.")
  }
}

//CAMBIAR EL SUBTOTAL AUTOMATICAMENTE

//Se obtienen todas las cantidades
const allProductsQuantity = document.querySelectorAll('.quantity input')
allProductsQuantity.forEach(elm => elm.onchange = ev => updateSubtotalLive(ev, elm.parentElement.parentElement))

const updateSubtotalLive = (event, productNode) => updateSubtotal(productNode)


