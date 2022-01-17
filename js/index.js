// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')

  let priceValue = price.innerHTML
  let quantityValue = quantity.value

  let subtotalValue = priceValue * quantityValue

  let subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = subtotalValue
  console.log(subtotal.innerHTML)

  return subtotal.innerHTML

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let totalValue = 0
  const products = document.querySelectorAll('.product')

  products.forEach(function (product) {



    const price = product.querySelector('.price span')
    let quantity = product.querySelector('.quantity input')

    let priceValue = price.innerHTML
    let quantityValue = quantity.value

    let subtotalValue = priceValue * quantityValue

    let subtotal = product.querySelector('.subtotal span')

    subtotal.innerHTML = subtotalValue

    //console.log(subtotal.innerHTML)
    totalValue += subtotalValue


  }

  )
  console.log(`total price ${totalValue} `)

  // ITERATION 3
  //... your code goes here




  let totalSelector = document.getElementById('total-value')

  //por alguna razon, si lo escribo así, no hay ningun efecto

  //let aaa = totalSelector.querySelector('span').innerText
  //aaa = totalValue

  //por lo contrario, si lo dejo así, funciona

  totalSelector.querySelector('span').innerText = totalValue

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here

  const cellRemove = target.parentNode
  const productToRemove = cellRemove.parentNode
  productToRemove.parentNode.removeChild(productToRemove)




}

// ITERATION 5

function createProduct() {
  //... your code goes here

  console.log('succes')


  // he tenido que añadir clases en el archivo de html 
  //para acceder a estos valores.
  // desconozco si impacta en los tests






  let createdName = document.querySelector(".createdName")
  console.log(createdName.value)

  let createdPrice = document.querySelector('.createdPrice')
  console.log(createdPrice.value)

  //añadido el bucle "if" para evitar crear producto con valores inexistentes

  if (createdName.value !== '' && createdPrice.value !== '0') {
    let table = document.querySelector('tbody')
    let newTr = document.createElement('tr')
    newTr.setAttribute('class', 'product')
    table.appendChild(newTr)

    //name
    let newTd1 = document.createElement('td')
    newTr.appendChild(newTd1)
    newTd1.setAttribute('class', 'name')

    let newTd1Span = document.createElement('span')
    newTd1.appendChild(newTd1Span)
    newTd1Span.innerText = createdName.value


    //price

    let newTd2 = document.createElement('td')
    newTr.appendChild(newTd2)
    newTd2.setAttribute('class', 'price')

    let newTd2Span = document.createElement('span')
    newTd2Span.innerText = createdPrice.value
    newTd2.innerHTML = '$'
    newTd2.appendChild(newTd2Span)



    //quantity

    let newTd3 = document.createElement('td')
    newTr.appendChild(newTd3)
    newTd3.setAttribute('class', 'quantity')

    let newTd3input = document.createElement('input')
    newTd3input.setAttribute('type', 'number')
    newTd3input.setAttribute('value', '0')
    newTd3input.setAttribute('min', '0')
    newTd3input.setAttribute('placeholder', 'Quantity')
    newTd3.appendChild(newTd3input)


    //subtotal

    let newTd4 = document.createElement('td')
    newTr.appendChild(newTd4)
    newTd4.setAttribute('class', 'subtotal')



    let newTd4Span = document.createElement('span')
    newTd4Span.innerText = 0
    newTd4.innerHTML = '$'
    newTd4.appendChild(newTd4Span)

    //button remove

    let newTd5 = document.createElement('td')
    newTr.appendChild(newTd5)
    newTd5.setAttribute('class', 'action')

    console.log('testpoint')

    let newTd5Button = document.createElement('button')
    newTd5Button.classList.add('btn', 'btn-remove')
    newTd5.appendChild(newTd5Button)
    newTd5Button.innerText = 'Remove'



    console.log('succes2')

  }

  createdName.value = ''
  createdPrice.value = '0'



}
//he tenido que modfucar el evento, cambiar el 'load' por el 'click',
// de lo contrario, los nuevos productos creados no se podían eliminar,
// pagina no los tomaba en cuenta, ya que el evento ya acbó, la pagina estaba cargada.

window.addEventListener('click', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(function (arrElement) {
    arrElement.onclick = removeProduct
  })
  //... your code goes here
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)

});
