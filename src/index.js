// ITERATION 1

function updateSubtotal(product) {

  // console.log('Calculating subtotal, yey!')

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const newSubtotal = (price * quantity)                                 //¿Puedo quiter esto?
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = newSubtotal                                      //subtotal.innerText = (price * quantity)

  return newSubtotal

  // console.log(price)
  // console.log(quantity)
  // console.log(newSubtotal)

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsArray = document.querySelectorAll('.product')
  for (let i = 0; i < productsArray.length; i++) {
    updateSubtotal(productsArray[i])
  }

  // console.log(productsArray)

  // ITERATION 3
  //... your code goes here

  let newTotal = 0
  for (let i = 0; i < productsArray.length; i++) {
    const element = productsArray[i];
    newTotal += Number(element.querySelector('.subtotal span').innerText)
  }

  const total = document.querySelector('#total-value span')
  total.innerText = newTotal

  // console.log(newTotal)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.closest('tr');
  console.log('The target in remove is:', target);
  //... your code goes here
  target.remove()
  calculateAll()

}
// const button = document.querySelector('.btn-remove')
// console.log(`${button.className}`)
// console.log(removeButtonsArray)

// 
const removeButtonsArray = document.querySelectorAll('.btn-remove')

for (let i = 0; i < removeButtonsArray.length; i++) {
  // const element = removeButtonsArray[i]
  removeButtonsArray[i].addEventListener('click', removeProduct)

}


// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProduct = document.getElementById('cart').getElementsByTagName('tbody')[0]
  // console.log(newProduct)

  // const clone = row.cloneNode(true)


  const newRow = newProduct.insertRow(-1)

  const cellProduct = newRow.insertCell(0)
  const cellPice = newRow.insertCell(1)
  const cellQuantity = newRow.insertCell(2)
  const cellSubtotal = newRow.insertCell(3)
  const cellBtnremove = newRow.insertCell(4)
  cellProduct.innerHTML = 'Ya'                        //document.getElementsByClassName('create-product')
  cellPice.innerHTML = 'me'
  cellQuantity.innerHTML = 'doy'
  cellSubtotal.innerHTML = 'por'
  cellBtnremove.innerHTML = 'vencido!'



  // console.log(newRow)



  calculateAll()
}



const createButton = document.querySelector('#create')
createButton.addEventListener('click', createProduct)
// console.log(createButton)

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
