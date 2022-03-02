// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent)
  const quantity = Number( product.querySelector('.quantity input').value)
  const result = price * quantity
  const subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.textContent = result
  return result
}

function calculateAll() {
  const productList = document.querySelectorAll('.product');
  let total = 0
  productList.forEach(singleProduct=>{
    total += updateSubtotal(singleProduct)
  })

  const totalEl = document.querySelector('#total-value span');
  totalEl.textContent = total
  
}

// ITERATION 4
document.querySelectorAll('.btn-remove').forEach(button=>{
  button.addEventListener('click', removeProduct)
})

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
  calculateAll()
}

// ITERATION 5
document.querySelector('.create-product button').addEventListener('click', createProduct)

function createProduct() {
  const newInputs = document.querySelectorAll(".create-product td input")
  const template = document.querySelector('#productrow')
  const newProduct = template.content.cloneNode(true)
  const newPrice = newProduct.querySelector('.price span')
  const newName = newProduct.querySelector('.name span')
  const newRemoveButton = newProduct.querySelector('.btn-remove')
  newRemoveButton.addEventListener('click', removeProduct)
  newName.textContent = newInputs[0].value
  newPrice.textContent = newInputs[1].value
  newInputs[0].value = ""
  newInputs[1].value = 0
  const cart = document.querySelector('#cart tbody')
  cart.appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
