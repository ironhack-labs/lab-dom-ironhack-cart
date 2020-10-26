// ITERATION 1

function updateSubtotal(product) {


  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const subtotalPrice = (price * quantity)


  product.querySelector('.subtotal span').innerHTML = subtotalPrice.toFixed(2)


  return subtotalPrice

}

function calculateAll() {

  const products = document.getElementsByClassName('product')

  const totales = []

  let sum = 0

  for (const eachProduct of products) {

    totales.push(updateSubtotal(eachProduct))

  }

  totales.forEach(precio => {
    sum += precio
  })

  document.querySelector('#total-value span').innerHTML = sum.toFixed(2)

}


// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;

  const padreBoton = target.parentNode.parentNode

  padreBoton.parentNode.removeChild(padreBoton)

  calculateAll()

}

// ITERATION 5

function createProduct() {
  const prodName = document.querySelector('#NewProdName').value
  const prodPrice = document.querySelector('#NewProdPrice').value
  const currency = document.createTextNode('$')

  if (prodName != "" && prodPrice !== '0') {

    const tableRef = document.querySelector('#cart tbody')
    const newRow = tableRef.insertRow()
    newRow.classList.add('product')

    // CELLS CREATION
    const cells = ['newName', 'newPrice', 'newQuantity', 'newSubtotal', 'newAction']

    cells.forEach(className => {
      newRow.insertCell().classList.add(className)
    })



    // NAME INSERTION

    const productName = document.createElement('span')
    const productNameTxt = document.createTextNode(prodName)
    productName.appendChild(productNameTxt)
    document.querySelector('.newName').appendChild(productName)

    // PRICE INSERTION

    const productPrice = document.createElement('span')
    const productMoney = document.createTextNode(prodPrice)
    productPrice.appendChild(productMoney)
    document.querySelector('.newPrice').innerHTML = '$'
    document.querySelector('.newPrice').appendChild(productPrice)


    // QUANTITY -INPUT INSERTION

    const productQant = document.createElement('input')
    productQant.setAttribute('type', 'number')
    productQant.setAttribute('value', '0')
    productQant.setAttribute('min', '0')
    productQant.setAttribute('placeholder', 'Quantity')
    document.querySelector('.newQuantity').appendChild(productQant)

    // SUBTOTAL INSERTION

    const productSub = document.createElement('span')
    const defaultValue = document.createTextNode('0')
    productSub.appendChild(defaultValue)
    document.querySelector('.newSubtotal').appendChild(currency)
    document.querySelector('.newSubtotal').appendChild(productSub)

    // REMOVE BUTTON INSERTION

    const productRemover = document.createElement('button')
    const inTextBtn = document.createTextNode('Remove')
    productRemover.appendChild(inTextBtn)
    document.querySelector('.newAction').appendChild(productRemover)
    const actionButton = document.querySelector('.newAction button')
    actionButton.classList.add('btn', 'btn-remove')
    actionButton.onclick = removeProduct


    // CLASSES RENAMING

    const tagsClasses = document.querySelectorAll('[class^="new"]')

    tagsClasses.forEach(classname => {
      switch (classname.className) {

        case 'newName':
          classname.classList.add('name')
          classname.classList.remove('newName')
          break
        case 'newPrice':
          classname.classList.add('price')
          classname.classList.remove('newPrice')
          break
        case 'newQuantity':
          classname.classList.add('quantity')
          classname.classList.remove('newQuantity')
          break
        case 'newSubtotal':
          classname.classList.add('subtotal')
          classname.classList.remove('newSubtotal')
          break
        case 'newAction':
          classname.classList.add('action')
          classname.classList.remove('newAction')
          break
      }

    })

    document.querySelector('#NewProdName').value = ""
    document.querySelector('#NewProdPrice').value = 0

  } else {

    return alert(`El nombre del producto o el precio están vacíos`)
  }

}





window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtn = document.querySelectorAll('.btn-remove')
  allRemoveBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  });

  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct)

});
