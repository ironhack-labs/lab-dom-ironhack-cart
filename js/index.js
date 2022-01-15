// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const result = price.innerHTML * quantity.value
  product.querySelector('.subtotal span').innerHTML = result

  return result

}

function calculateAll() {
 
  // ITERATION 2

  // getting the DOM of every product
  const products = document.getElementsByClassName('product')
  // crreating variable that will contain de total
  let totalValue = 0
  for (let i=0; i<products.length; i++) {
    //calculate total price by summing them
    totalValue += updateSubtotal(products[i])
  }
  

  // ITERATION 3
  
  //get the corresponding DOM element
  const totaPrice = document.querySelector('#total-value span')
  // reusing the total value and displaying it on the DOM
  totaPrice.innerHTML = totalValue

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
    //... your code goes here
  // access de element an event was fired on through parenNode property (button/td/tr/parent)
  const data = target.parentNode
  const row = data.parentNode
  const rowParent = row.parentNode
  rowParent.removeChild(row)

}

window.addEventListener('load', () => {
  // getting all the remove buttons
  const removeButtons = document.getElementsByClassName('btn-remove')
  // loop through the buttons
  for (let i=0; i<removeButtons.length; i++) {
    // added a click event listener to each and pass the callback function
    removeButtons[i].addEventListener('click', removeProduct)  
}})
    

// ITERATION 5

function createProduct() {
  //... your code goes here
  const target = event.currentTarget
  console.log('The target to add is:', target)
  // //add a click eent handler to  the "Create product"
  // // target name and unit price in DOM
  // const productName = document.querySelectorAll('.create-product input')
  // const productPrice = document.querySelectorAll('.create-product input')
  // //extracting values
  // const newProduct = productName.innerHTML
  // const newPrice = productPrice.value
  // console.log(`This is the ${newProduct} and the ${newPrice}`)
  // //add new row with product,unitary price, quantity info and remove button
  // const addProduct = document.createElement('tr').setAttribute('class','product') 
  // console.log(addProduct)
  // document.createElement('td').setAttribute('class', 'price')
 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  //... your code goes here
})

window.addEventListener('load', () => {
  const productCreation = document.querySelector('.create-product')
  productCreation.addEventListener('click', createProduct)
})

// const result = price.innerHTML * quantity.value
// product.querySelector('.subtotal span').innerHTML = result
