// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  const subtotal = Number(price.innerHTML) * Number(quantity.value);

  product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2)

  return subtotal;
}

// ITERATION 2
function calculateAll() {
  const products = document.getElementsByClassName('product')
  
  const  total = Array.from(products).reduce((acc, product) => {
    return acc + updateSubtotal(product)
  }, 0)

  document.querySelector('#total-value span').innerHTML = total.toFixed(2)
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const targetToDelete = target.parentNode.parentNode
  const parentToDelete = targetToDelete.parentNode

  parentToDelete.removeChild(targetToDelete)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const createProductRow = document.querySelector('.create-product')

  const name = createProductRow.querySelector('td:first-child input')
  const price = createProductRow.querySelector('td:nth-child(2) input')

  if (name.value && Number(price.value)) { // "" -> falsy "0"  0 -> Falsy
    const productNode = document.createElement("tr")
    productNode.classList.add("product")
    document.querySelector("tbody").appendChild(productNode)
  
    const nameNode = document.createElement("td")
    nameNode.classList.add('name')
    productNode.appendChild(nameNode)
    const nameSpan = document.createElement("span")
    nameSpan.innerHTML = name.value
    nameNode.appendChild(nameSpan)
  
    const priceNode = document.createElement("td")
    priceNode.classList.add('price')
    priceNode.innerHTML = "$"
    productNode.appendChild(priceNode)
    const priceSpan = document.createElement("span")
    priceSpan.innerHTML = Number(price.value).toFixed(2)
    priceNode.appendChild(priceSpan)
  
    const quantityNode = document.createElement("td")
    quantityNode.classList.add('quantity')
    productNode.appendChild(quantityNode)
    const inputNode = document.createElement("input")
    inputNode.type = "number"
    inputNode.value = 0
    inputNode.min = 0
    inputNode.placeholder = "Quantity"
    quantityNode.appendChild(inputNode)
  
    const subtotalNode = document.createElement("td")
    subtotalNode.classList.add('subtotal')
    subtotalNode.innerHTML = "$"
    productNode.appendChild(subtotalNode)
    const subtotalSpan = document.createElement("span")
    subtotalSpan.innerHTML = 0
    subtotalNode.appendChild(subtotalSpan)
  
    const removeNode = document.createElement("td")
    removeNode.classList.add("action")
    productNode.appendChild(removeNode)
    const removeButton = document.createElement('button')
    removeButton.classList.add("btn", "btn-remove")
    removeButton.innerHTML = "Remove"
    removeNode.appendChild(removeButton)
  
    removeButton.addEventListener('click', removeProduct)
  
    name.value = ""
    price.value = 0
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove')
  Array.from(removeButtons).forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
});


