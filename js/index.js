let ghostProduct = undefined

function updateSubtotal(product) {

  const price = product.querySelector(`.price span`).innerText
  const quantity = product.querySelector(`.quantity input`).value
  const subTotal = price * quantity

  product.querySelector(`.subtotal span`).innerText = subTotal

}

function calculateAll() {

  const products = Array.from(document.getElementsByClassName(`product`))

  let total = 0

  products.forEach(element => {
    updateSubtotal(element)
    total += Number(element.querySelector(`.subtotal span`).innerText)
  })

  document.querySelector(`#total-value span`).innerText = total

}

function removeProduct(event) {

  const target = event.currentTarget.parentElement.parentElement

  target.parentNode.removeChild(target)

  document.querySelector(`#total-value span`).innerText -= target.querySelector(`.subtotal span`).innerText

}

function createProduct() {

  let name = document.querySelector(`.create-product input[type="text"]`).value
  let unitPrice = document.querySelector(`.create-product input[type="number"]`).value

  if (name && unitPrice) {
    const newProduct = ghostProduct.cloneNode(true)
    newProduct.querySelector(`.name span`).innerText = name
    newProduct.querySelector(`.price span`).innerText = unitPrice
    document.querySelector(`#cart tbody`).appendChild(newProduct)
    document.querySelector(`.create-product input[type="text"]`).value = ""
    document.querySelector(`.create-product input[type="number"]`).value = ""
  } else {
    alert(`Please provide a Product Name and a Unit Price, thank you.`)
  }

  document.querySelectorAll(`.btn-remove`).forEach(button => {
    button.onclick = event => {
      removeProduct(event)
    }
  })

}

window.addEventListener('load', () => { // cuando la pagina se carga del todo, ejecuta lo de dentro

  const calculatePricesBtn = document.getElementById('calculate') // esto devuelve el nodo con el id especificado
  calculatePricesBtn.addEventListener('click', calculateAll) // addEventListener (en este evento, ejecuta esta función)

  ghostProduct = document.querySelector(`.product`).cloneNode(true)

  const removeProductBtn = document.querySelectorAll(`.btn-remove`)

  removeProductBtn.forEach(button => {
    button.onclick = event => {
      removeProduct(event)
    }
  })

  document.getElementById(`create`).addEventListener(`click`, createProduct)

})
