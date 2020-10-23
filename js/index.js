// ITERATION 1
function updateSubtotal(product) {
  //STEP 1 , 2
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value
  //STEP 3
  let subtotalResult = price * quantity
  //STEP 4
  let subtotal = product.querySelector('.subtotal span')
  //STEP 5
  subtotal.innerText = subtotalResult
  return subtotalResult
}

function calculateAll() {
  // ITERATION 2
  let allproducts = document.getElementsByClassName('product')
  let prodArr = [...allproducts]
  let total = 0
  console.log(prodArr)
  prodArr.forEach(x => total += updateSubtotal(x)) 
  // ITERATION 3 
  let displayTotal = document.querySelector('#total-value span')
  displayTotal.innerText = total
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = target.parentNode.parentNode
  parent.remove(target)
}

// ITERATION 5 --- No acabado 
function createProduct() {
  //Accediendo a name y price para extraer los valores del input
  const name = document.querySelector('table input[type=text]').innerText
  const unitPrice = document.querySelector('table input[placeholder=ProductPrice]')
  name.innerHTML = name.value
  unitPrice.innerText = unitPrice.value
  let priceNum = parseInt(unitPrice.value)
  
  //Clonando toda la fila con cloneNode()
  let trClone = document.querySelector('.product')
  let clonedRow = trClone.cloneNode(true)
  //Intentando modificar valor name y price... 

  //Añade la nueva línea debajo del body de la tabla. 
  let body = document.querySelector('tbody')
  body.appendChild(clonedRow)
}

window.addEventListener('load', () => {
  //Calculate subtotals
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //Remove product
  const removeBtn = document.getElementsByClassName('btn-remove');
  let removeArr = [...removeBtn]
  removeArr.forEach(x => x.addEventListener('click', removeProduct))
  //Add products
  const addProduct = document.querySelector('#create')
  addProduct.addEventListener('click', createProduct)
});
