
/// # ITERATION 1

function updateSubtotal(product) {

  // Coge la info
  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')

  // Opera la info
  price = Number(price.innerText)
  quantity = Number(quantity.value)
  let subtotalPrice = price * quantity

  // Cambia  el resultado
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalPrice

  return subtotal
}


function calculateAll() {

  /// # ITERATION 2

  // Selecciona todas las clases .product
  let allProducts = document.querySelectorAll('.product')

  // Usa la f *updateSubtotal* para calcular el subtotal de cada producto, y el total final
  let allPricesNums = []
  let totalSum = 0

  for (i = 0; i < allProducts.length; i++) {

    allPricesNums.push(updateSubtotal(allProducts[i]).innerText)
    totalSum += Number(updateSubtotal(allProducts[i]).innerText)
  }



  /// # ITERATION 3

  // Modifica el valor total
  let total = document.getElementById('total-value')
  total.innerText = `Total: $${totalSum}`

}


/// # ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget
  console.log('The target in remove is:', target)

  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)

  calculateAll()

}


/// # ITERATION 5

function createProduct(event) {

  const target = event.currentTarget

  /// Recoger  inputs ¿?¿?¿?
  // console.log(target.parentNode.parentNode.querySelector('.name')[0].value)


  /// Clonar la estructura de un hijo y añadirla
  let parent = target.parentNode.parentNode.parentNode.parentNode.childNodes[3]
  let clon = parent.querySelector('.product').cloneNode(true)
  parent.appendChild(clon)
  // let newChild = parent.querySelectorAll('.product')[parent.querySelectorAll('.product').length - 1]
  console.log(document.querySelectorAll('.action button'))


  /// Actualizaciones
  calculateAll()

}



window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  let removeButtons = document.querySelectorAll('.action button')
  console.log(removeButtons.length)
  for (i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  let createButton = document.getElementById('create')
  createButton.addEventListener('click', createProduct)
})