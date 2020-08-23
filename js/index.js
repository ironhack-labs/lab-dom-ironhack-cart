// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotalAmount = price.innerHTML * quantity.value 
  const subtotal = product.querySelector('.subtotal span')
  
  subtotal.innerHTML = `${subtotalAmount}`

  return subtotalAmount

  
}

function calculateAll() {

  // ITERATION 2
  const productList = document.querySelectorAll('.product')
 
  productList.forEach (product => updateSubtotal(product))

  const subtotalList = document.querySelectorAll('.subtotal span')
  let totalValue = 0
  subtotalList.forEach (function (subtotal) { 
    totalValue += parseFloat(subtotal.innerHTML)
  })
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span')
  console.log(totalValue)
  total.innerHTML = totalValue
}


// No es la solución más elegante del mundo pero no se me ocurría otra 
// forma de que se carguen los scripts para que los botones nuevos de 
// remove funcionen
window.addEventListener('load', mainfunction)
window.addEventListener('click',mainfunction)

function mainfunction() {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  /* No consigo entender cómo se relacionan event listener con la función remove product
  para vincular el currentTarget al botón. Así que lo haré como nos explicó Germán
  
  const removeBtnList = document.querySelectorAll('.btn-remove')
  removeBtnList.forEach( elm => addEventListener('click', removeProduct))
   
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct() )
  */
  
  // ITERATION 4
  //function removeProduct(event) 
  document.querySelectorAll('.btn-remove').forEach (elm => {
    elm.onclick = e => {
      const buttonToDelete = e.currentTarget
      const rowToDelete = buttonToDelete.parentNode.parentNode

      rowToDelete.parentNode.removeChild(rowToDelete)
      calculateAll()
    }
  })


  // ITERATION 5  
  document.querySelector('#create').onclick = function createProduct (e) {
    //Creo la fila
  
    const newProduct = document.createElement('tr')
    const cartTable = document.querySelector('#cart-body')
    newProduct.setAttribute('class', "product")  

    cartTable.appendChild(newProduct)
   
    //Creo los td
    //Name
    const formName = document.querySelector('.create-product .name') 
    const newName = document.createElement('td')
    const newNameSpan = document.createElement('span')
    
    newName.setAttribute('class', "name")
    newNameSpan.innerText = formName.value 

    newProduct.appendChild(newName)
    newName.appendChild(newNameSpan)

    //Price
    const formPrice = document.querySelector('.create-product .price') 
    const newPrice = document.createElement('td')
    const newPriceSpan = document.createElement('span')

    newPrice.setAttribute('class', "price")
    newPrice.innerText = '$'
    newPriceSpan.innerText = formPrice.value 

    newProduct.appendChild(newPrice) 
    newPrice.appendChild(newPriceSpan) 

    //Quantity
    const newQuantity = document.createElement('td')
    const newQuantityInput = document.createElement('input')

    newQuantity.setAttribute('class', 'quantity')
    newQuantityInput.setAttribute('type', 'number')
    newQuantityInput.setAttribute('value', '0')
    newQuantityInput.setAttribute('min','0')
    newQuantityInput.setAttribute('placeholder', 'Quantity')

    newProduct.appendChild(newQuantity) 
    newQuantity.appendChild(newQuantityInput)

    //Subtotal
    const newSubtotal = document.createElement('td')
    const newSubtotalSpan = document.createElement('span')
    
    newSubtotal.setAttribute('class', "subtotal")
    newSubtotal.innerText = '$'
    newSubtotalSpan.innerText = '0'

    newProduct.appendChild(newSubtotal)
    newSubtotal.appendChild(newSubtotalSpan)

    //Remove
    const newRemove = document.createElement('td')
    const newRemoveBtn = document.createElement('button')

    newRemove.setAttribute('class', 'action')
    newRemoveBtn.setAttribute('class', 'btn')
    newRemoveBtn.setAttribute('class', 'btn-remove')
    newRemoveBtn.innerText = 'Remove'

    newProduct.appendChild(newRemove)
    newRemove.appendChild(newRemoveBtn)

    formName.value = ''
    formPrice.value = 0
  }
  
}

