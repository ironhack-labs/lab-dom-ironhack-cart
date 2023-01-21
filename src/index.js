// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerText = price.innerText * quantity

  return subtotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product')
  // updateSubtotal(singleProduct)
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')
  products.forEach(elm => updateSubtotal(elm))

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span")
  const subtotal = document.querySelectorAll(".subtotal span")
  let subtotalSum = 0
  subtotal.forEach(elm => subtotalSum += +elm.innerHTML)
  // for (let i = 0; i < subtotal.length; i++) subtotalSum += +subtotal[i]
  total.innerText = subtotalSum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
  const father = document.querySelector('tbody')

  const prevOne = target.parentNode
  const prevTwo = prevOne.parentNode

  father.removeChild(prevTwo)
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // const name = document.querySelector(".newName input").value
  // const price = document.querySelector(".newPrice input").value

  // const productName = document.querySelector(".name span")
  // productName.innerText = name
  // const productPrice = document.querySelector(".price span")
  // productPrice.innerText = price

  // const product = document.querySelector(".product")

  // const fatherProduct = document.querySelector("tbody")

  // fatherProduct.appendChild(newElem)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)


  //... your code goes here
  const removeRow = document.querySelectorAll('.btn-remove')
  for (let i = 0; i < removeRow.length; i++) {
    removeRow[i].addEventListener('click', removeProduct)
  }
  const newRow = document.querySelector('#create')
  newRow.addEventListener('click', createProduct)

})
