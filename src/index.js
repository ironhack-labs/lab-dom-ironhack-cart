// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span')

  const quantity = product.querySelector('.quantity input').value

  const subtotal = product.querySelector('.subtotal span')

  const productPrice = price.innerHTML

  const productSubtotal = quantity * productPrice

  subtotal.innerHTML = productSubtotal

  return productSubtotal


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');

  // updateSubtotal(singleProduct);

  // end of test


  // ITERATION 2
  //... your code goes here

  const severalProducts = document.getElementsByClassName('product')

  let total = 0

  for (let i = 0; i < severalProducts.length; i++) {

    const actualProduct = severalProducts[i]

    const subtotal = updateSubtotal(actualProduct)

    total += subtotal

  }


  // ITERATION 3
  //... your code goes here


  const totalElement = document.querySelector('#total-value span')

  totalElement.innerHTML = total


}

// ITERATION 4

function removeProduct(event) {



  // console.log('The target in remove is:', target);
  //... your code goes here

  const target = event.currentTarget

  const productList = document.querySelector("tbody")

  const productToRemove = target.parentNode.parentNode

  productList.removeChild(productToRemove)

  calculateAll()

}




// ITERATION 5

function createProduct() {
  //... your code goes here

  const txtProduct = document.querySelector('#product-name').value

  const txtPrice = document.querySelector('#product-price').value

  if (txtProduct === "") {
    alert('Añada un producto')
    return
  }
  if (txtPrice === '0') {
    alert('Añada precio')
    return
  }

  const tr = document.querySelector(".product")

  const tr_prime = tr.cloneNode(true)

  document.querySelector('#product-name').value = ""

  document.querySelector('#product-price').value = 0


  tr_prime.querySelector('.price span').innerHTML = txtPrice

  tr_prime.querySelector('.quantity input').value = 0

  tr_prime.querySelector('.name span').innerHTML = txtProduct

  tr_prime.querySelector('.subtotal span').innerHTML = 0


  document.querySelector('tbody').appendChild(tr_prime)



  addRemoveEvent()

}



window.addEventListener('load', () => {
  //... your code goes here


  const calculatePricesBtn = document.getElementById('calculate')

  calculatePricesBtn.addEventListener('click', calculateAll)

  addRemoveEvent()

  const buttonCreate = document.getElementById('create')

  buttonCreate.addEventListener('click', createProduct)

})



function addRemoveEvent() {

  const buttonsRemove = document.querySelectorAll(".btn-remove")

  for (let i = 0; i < buttonsRemove.length; i++) {

    buttonsRemove[i].addEventListener('click', removeProduct)
  }
}





  // createProductBtn.addEventListener('clic', e => {
  //   const newProduct = document.createElement('tr')
  //   newProduct.classList.add('tr')
  //   // newProduct.textContent = ('.product')
  //   document.querySelector('tbody').appendChild(newProduct)
  // })
