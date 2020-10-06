// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  console.log('Calculating subtotal, yey!');
  const multiplicacion = price.innerHTML * (quantity.value)
  const subtotal = product.querySelector('.subtotal span')
  
  return subtotal.innerHTML = multiplicacion
}

function calculateAll() {
  
  // ITERATION 2
  const products = document.querySelectorAll('.product')
  console.log(products)

  // ITERATION 3
  let total = 0
  products.forEach(function(p){
    let subtotal = updateSubtotal(p)
    total += subtotal
  })
  
  const value = document.querySelector('#total-value span')
  value.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  // console.log(target.parentNode.parentNode.parentNode)
  const fila = target.parentNode.parentNode

  const body = target.parentNode.parentNode.parentNode

  body.removeChild(fila)
  calculateAll()
}

// ITERATION 5

function createProduct() {
    // const create = document.querySelector('.create-product td input')
    // const product = create.innerHTML
    // console.log(product)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProducts = document.getElementsByClassName('btn btn-remove');
  for(let i = 0; i < removeProducts.length; i++){
    removeProducts[i].addEventListener('click', removeProduct)
  }

  const createSomething = document.getElementById('create');
  createSomething.addEventListener('click', createProduct)

});
