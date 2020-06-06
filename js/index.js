//Actualizar el subtotal de una fila y devuelve el resultado

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subt = price * quantity
  let sub = product.querySelector('.subtotal span')
  sub.innerText = subt
  return subt
}


//Calcula el precio total de todos los productos

function calculateAll() {
  const products = document.querySelectorAll('.product')
  let total = 0
  products.forEach(elm => {
    total += updateSubtotal(elm)
  })
  const totalprice = document.querySelector('#total-value span')
  totalprice.innerText = total
}

//Eliminar un producto y recalcular el precio

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = target.parentNode
  let grandParent = parent.parentNode
  let visGrandParent = grandParent.parentNode
  visGrandParent.removeChild(grandParent)
  calculateAll()
}

//Crear un nuevo producto

function createProduct() {
  const newProduct = document.querySelector('.product').cloneNode(true)
  newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value
  newProduct.querySelector('.subtotal span').innerText = 0
  newProduct.querySelector('.price span').innerText = document.querySelector('.new-price input').value
  newProduct.querySelector('.action .btn').addEventListener('click', removeProduct)
  const newTbody = document.querySelector('tbody')
  newTbody.appendChild(newProduct)
}

//Añadir eventos 'click' a los elementos

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removebuttons = document.querySelectorAll('.btn-remove')
  removebuttons.forEach(elm => {
    elm.addEventListener('click', removeProduct)
  })
  const addProduct = document.querySelector('#create')
  addProduct.addEventListener('click', createProduct)
});



