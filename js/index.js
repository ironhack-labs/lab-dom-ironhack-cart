// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  const calculateSubtotal = (price * quantity)
  
  const singleSubtotal = product.querySelector('.subtotal span')
  singleSubtotal.innerText = calculateSubtotal
  
  return calculateSubtotal
}

function calculateAll() {

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let sumTotal = 0
  products.forEach(function (index) {
    sumTotal += updateSubtotal(index)
  })
  // ITERATION 3
  const total = document.querySelector('#total-value span')
  total.innerText = sumTotal

  return sumTotal
}

// ITERATION 4

function removeProduct(event) {
  const userResponse = window.confirm('This product will remove, are you sure?')
  
  if (userResponse === true) {
    const target = event.currentTarget.parentNode;
    target.parentNode.removeChild(target)
  
    const subtotal = target.querySelector('.subtotal span').innerText
    const total = document.querySelector('#total-value span')
  
    total.innerText = (total.innerText - subtotal)

    return
  } 

}

// ITERATION 5

function createProduct(event) {
  const name = document.querySelector('.new-name').value
  const price = document.querySelector('.new-price').value
  
  const parent = document.querySelector('#cart')
  const rowRef = document.querySelector('.product')
  const newRow = document.createElement(rowRef)
  // parent.insertBefore(rowRef)


  // parent.appendChild(newRow)


  console.log(newRow)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.action')
  removeBtn.forEach(function (btn) {
    btn.addEventListener('click', removeProduct)
  })

  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
});
