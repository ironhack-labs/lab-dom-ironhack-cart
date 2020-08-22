// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const subTotalPrice = price * quantity

  product.querySelector('.subtotal span').innerHTML = subTotalPrice

  return subTotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.name');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.querySelectorAll('.product')

  //console.log(allProducts)

  let totalPrice = 0

  allProducts.forEach(elm => {

    totalPrice += updateSubtotal(elm)

  })

  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(caller) {

  //... your code goes here

  const lineToDelete = caller.parentNode.parentNode

  lineToDelete.parentNode.removeChild(lineToDelete)

  calculateAll()

}

// ITERATION 5

// We store de MODEL TO GENERATE in a variable
const productModel = document.querySelector('.product').cloneNode(true)

function createProduct() {

  //... your code goes here

  // //We check that new product info is complete  
  const newName = document.querySelector('.create-product .name input').value
  let newPrice = document.querySelector('.create-product .price input').value

  if (newName.length === 0 || newPrice == 0) {

    window.alert('Please complete requested product information')

  } else {

    // If new product info is complete we write all de data of our new product
    const newProduct = productModel.cloneNode(true)
    newProduct.querySelector('.name span').innerHTML = newName
    newProduct.querySelector('.price span').innerHTML = newPrice
    newProduct.querySelector('.quantity input').innerHTML = 0
    newProduct.querySelector('.subtotal span').innerHTML = 0

    // Here is where we add the new node to the html
    document.querySelector('tbody').appendChild(newProduct)

    // We call triggerersCreator function again to add the listeners to the new rows buttons
    triggerersCreator()

    // We call resetFields for reseting the fields of the create product row
    resetFields()

  }

}

function resetFields() {

  const targetRow = document.querySelector('.create-product')

  targetRow.querySelector('.name input').value = ''
  targetRow.querySelector('.price input').value = 0

}

function formatInputs(caller) {

  if (caller.value < 0) {
    caller.value = 0
  } else {

    switch (caller.parentNode.className) {
      case 'quantity':

        caller.value = Number(Math.floor(caller.value))

        break;
      case 'price':

        caller.value = Number(caller.value).toFixed(2)

        break;

      default:
        break;
    }

  }

}

//----- LISTENERS -----

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // We create the listener for the button that creates the products
  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct)

})

// We create the listener for the buttons that deletes products
triggerersCreator()

function triggerersCreator() {

  const deleteProductBtn = document.querySelectorAll('.btn-remove')
  deleteProductBtn.forEach(elm => {

    elm.onclick = () => {

      removeProduct(elm)

    }
  })

  const quantityInputs = document.querySelectorAll('.quantity input')

  quantityInputs.forEach(elm => {

    elm.onchange = () => {

      formatInputs(elm)

    }

  })

  const newPriceInput = document.querySelector('.create-product .price input')

  newPriceInput.onchange = () => formatInputs(newPriceInput)

}