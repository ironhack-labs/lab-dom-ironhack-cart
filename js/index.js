let copyTr = '' //A copy of the first product (tr element) in case we delete all before adding

// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const calculateSubtotal = price * quantity
  const subtotal = product.querySelector('.subtotal span') //Target subtotal span
  subtotal.innerText = calculateSubtotal //Update subtotal span with the actual subtotal

  return calculateSubtotal //Return to use in calculate all
}

function calculateAll() {

  // ITERATION 2
  let sum = 0
  const productArray = document.getElementsByClassName('product') //Extract a list of the products
  for(let i = 0; i < productArray.length; i++){ //Update subtotal for every product while adding it to the sum
    sum += updateSubtotal(productArray[i])
  }
  
  // ITERATION 3
  const total = document.querySelector('#total-value span') //Target the total span
  total.innerText = sum //Change the total span to the sum
}

// ITERATION 4

function removeProduct(event) { //Event refers to the event that makes the function get called (for example clicking)
  const target = event.currentTarget //Current target points to the html element that the event was started on
  console.log('The target in remove is:', target)
  target.parentNode.parentNode.remove() //button > td > tr, then remove the tr (the product)

}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector('#cart tbody') //Target the cart > table body
  const copyOfCopyTr = copyTr.cloneNode(true) //Make a copy of the already created copy

  let productName = document.getElementById('product-name') //Target product name and price of the new product
  let productPrice = document.getElementById('product-price')

  copyOfCopyTr.querySelector('.name span').innerText = productName.value //Give the copy the new product name 
  console.log(productName.value)
  copyOfCopyTr.querySelector('.price span').innerText = productPrice.value //and price to the copy of the copy

  const rmvBtn = copyOfCopyTr.querySelector('.action button') //Create a remove button for the new product
  rmvBtn.addEventListener('click', (event)=>{
    const btn = event.currentTarget;
    btn.parentNode.parentNode.remove()
  })

  tbody.appendChild(copyOfCopyTr) //Append the new product to the cart > table body

  productName.value = '' //Set the product in create product back to default values 
  productName.placeholder = 'Product Name'
  productPrice.value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const rmvBtns = document.querySelectorAll('.btn-remove')
  for(let btns of rmvBtns){ //Add an event listener to every remove button
    btns.addEventListener('click', removeProduct) //No () on removeProduct, using () would use the return 
  }                                               //instead of doing the functionality when clicking

  const addItmBtn = document.getElementById('create')
  addItmBtn.addEventListener('click', createProduct)
});
