// ITERATION 1

function updateSubtotal(product) {
  

  //... your code goes here

  const price = product.querySelector('.price span')

  const quantity = product.querySelector('.quantity input')

  const subtotalPrice = price.innerHTML * quantity.value

  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = subtotalPrice  

  console.log('Calculating subtotal, yey!');

  return subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  
  const totalProducts = document.querySelectorAll('.product')
  
  let totalPrice = 0
  
  totalProducts.forEach(elm => {
    
    updateSubtotal(elm)
    
    totalPrice+= updateSubtotal(elm)      // ITERATION 3
  
  })

  document.querySelector('#total-value span').innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  console.log('The target in remove is:', target);

  target.parentNode.parentNode.remove()

  calculateAll()

}

// ITERATION 5

function createProduct() {

  console.log(`creando producto`)

  let clonedProduct = document.querySelector('.product')

  let newProduct = clonedProduct.cloneNode(true)

  console.log(newProduct)


  let newProductName = document.querySelector('#newProductName').value

  let newProductPrice = document.querySelector('#newProductPrice').value

  // document.querySelector('#newProductName').value.innerHTML = newProductName


  document.querySelector('tbody').appendChild(newProduct)

  // let newRow = document.createElement('tr')        // He intentado hacerlo manualmente pero no llegué a conseguirlo. Clonando el producto tengo todas las variables pero ahora no sé cambiarle las propiedades.

  //   newRow.setAttribute('class', 'product')

  // let newColumn1 = document.createElement('td')

  //   newColumn1.setAttribute('class', 'name')

  //   newColumn1.innerHTML = newProductName

  // let newColumn2 = document.createElement('td')

  //   newColumn2.setAttribute('class', 'price')

  //   newColumn2.innerHTML = newProductPrice

  // // let newColumn3 = document.createElement('td')

  // //   newColumn3.setAttribute('class', 'quantity')

  // //    let newInput = document.createElement('input')

  // //     newInput.setAttribute('type', 'number')
  // //     newInput.setAttribute('value', '0')

  // //   newColumn3.appendChild(newInput)

  // // let newColumn4 = document.createElement('td')

  // //   newColumn4.setAttribute('class', 'subtotal')

  // //   newColumn4.innerHTML = newProductPrice * newColumn3

  // // let newColumn5 = document.createElement('td')

  // //   newColumn5.setAttribute('class', 'action')

  // //   newColumn5.innerHTML = 


  //   newRow.appendChild(newColumn1)
  //   newRow.appendChild(newColumn2)
  //   // newRow.appendChild(newColumn3)
  //   // newRow.appendChild(newColumn4)
  //   // newRow.appendChild(newColumn5)

  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach(elm => {

    elm.addEventListener('click', removeProduct)
  })

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);

});
