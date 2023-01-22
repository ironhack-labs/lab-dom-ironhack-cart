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

function createProduct(evento) {
  //... your code goes here

  const target = evento.currentTarget


  const txtProduct = document.querySelector('.new-product input').value

  const txtPrice = document.querySelector('.new-price input').value

  txtProduct.appendChild(newProduct)

  txtPrice.appendChild(newPrice)



  calculateAll()
}



window.addEventListener('load', () => {
  //... your code goes here


  const calculatePricesBtn = document.getElementById('calculate')

  calculatePricesBtn.addEventListener('click', calculateAll)



  const buttonsRemove = document.querySelectorAll(".btn-remove")

  for (let i = 0; i < buttonsRemove.length; i++) {

    buttonsRemove[i].addEventListener('click', removeProduct)
  }




  const buttonCreate = document.getElementById('create')

  buttonCreate.addEventListener('click', createProduct)

})



  // createProductBtn.addEventListener('clic', e => {
  //   const newProduct = document.createElement('tr')
  //   newProduct.classList.add('tr')
  //   // newProduct.textContent = ('.product')
  //   document.querySelector('tbody').appendChild(newProduct)
  // })
