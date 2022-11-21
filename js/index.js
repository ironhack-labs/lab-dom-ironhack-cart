// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value)
  const subtotal = price * quantity

  const subtotalSpan = product.querySelector('.subtotal span')
  subtotalSpan.textContent = subtotal.toFixed(2)

  return subtotal

}

function calculateAll() {

  const products = document.querySelectorAll('.product');
  const totalSpan = document.querySelector('#total-value span')
  let totalCount = 0;

//INTERATION 2
products.forEach(product => {
  totalCount += updateSubtotal(product)
})

//INTERATION 3

  totalSpan.textContent = totalCount.toFixed(2);
 
}

// ITERATION 4

function removeProduct(event) {

  const button = event.currentTarget;
  const product = button.closest('.product')
  
  product.remove()

  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  const tableBody = document.querySelector('table tbody')
  const newProduct = document.querySelector("#templates .product").cloneNode(true)
  const priceInput = document.querySelector('input[name=price]') 
  const nameInput = document.querySelector('input[name=name]') 
  const price = Number(priceInput.value)
  const name = nameInput.value

  if (name && price ) {
    newProduct.querySelector('.name span').textContent = name
    newProduct.querySelector('.price span').textContent = `${price}.00`
    newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)

    tableBody.appendChild(newProduct)

    priceInput.value = 0;
    nameInput.value = ""

  } else {
    window.alert('HEY RELLENA TODOS LOS CAMPOS!')
  }

}


window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  const deleteButtons = document.querySelectorAll('.btn-remove');
  const createButton = document.querySelector("#create")
  createButton.addEventListener('click', createProduct)

  deleteButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })

  calculatePricesBtn.addEventListener('click', calculateAll);
});
