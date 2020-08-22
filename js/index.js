// ITERATION 1

function updateSubtotal(product) {

  console.log(`Calculating subtotal, yey!`);


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

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here

  const lineToDelete = event.currentTarget.parentNode.parentNode

  lineToDelete.parentNode.removeChild(lineToDelete)

  calculateAll()


  //lineToDelete.parentNode.removeChild(lineToDelete)

}

const productModel = document.querySelector('.product')

// ITERATION 5

function createProduct() {
  //... your code goes here

  const name = document.querySelector('.create-product .name input').value
  const price = document.querySelector('.create-product .price input').value

  console.log(price === undefined)

  //We check that info is complete
  if (name.length === 0 || price == 0) {

    window.alert('Please complete requested product information')

  } else {

    const newProduct = productModel
    newProduct.querySelector('.name span').value = name
    newProduct.querySelector('.price span').value = price
    newProduct.querySelector('.quantity input').value = 0
    newProduct.querySelector('.subtotal span').value = 0

    let newElement = document.createElement('tr')

    newElement = newProduct

    document.querySelector('tbody').appendChild(newElement)

  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const deleteProductBtn = document.querySelectorAll('.btn-remove')
  deleteProductBtn.forEach(elm => {

    elm.addEventListener('click', removeProduct)
  })

  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct)

});