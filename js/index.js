// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // get the elements
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  // get the values
  const priceValue = price.innerText
  const quantityValue = quantity.value

  // product
  let subtotalPrice = priceValue * quantityValue

  // get the HTML element that holds the subtotal
  const subtotalField = product.querySelector('.subtotal span')

  // display subtotal
  subtotalField.textContent = subtotalPrice

  return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // get products array of nodes
  const productsArr = document.querySelectorAll('.product')

  // iterate through each product
  // for(let i = 0; i < productsArr.length; i++) {
  //   updateSubtotal(productsArr[i])
  // }
  productsArr.forEach(product => {
    const subtotal = updateSubtotal(product)
    return subtotal
  })



  // ITERATION 3
  //... your code goes here

  const productsSubsArrNode = document.querySelectorAll('.subtotal span')
  const productsSubsArrValue = []
  let sum = 0

  // populate productsSubsArrValue array with values
  for (let i = 0; i < productsSubsArrNode.length; i++) {
    productsSubsArrValue.push(productsSubsArrNode[i].innerHTML)
  }

  // sum values
  for (let i = 0; i < productsSubsArrValue.length; i++) {
    sum += parseFloat(productsSubsArrValue[i])
  }

  // select actual HTML total price

  const actualTotal = document.querySelector('#total-value span')
  actualTotal.innerText = sum

}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  // delete row
  let parent = event.parentNode
  let row = parent.parentNode
  let grandad = row.parentNode
  grandad.removeChild(row)

  // update total
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  // select the row to clone
  let row = document.querySelector('.product')

  // select the table to append it
  let table = document.querySelector('tbody')

  // clone the row
  let clone = row.cloneNode(true)

  // append it and set quantity to 0
  table.appendChild(clone)
  let quantity = document.querySelectorAll('.quantity input')
  console.log(quantity)

  for (let i = 0; i < quantity.length; i++) {
    if (i === (quantity.length - 1)) {
      quantity[i].value = 0
    } else {
      continue
    }
  }

  // select values to change
  const newNameArrNodes = document.querySelectorAll('.name span')
  const newPriceArrNodes = document.querySelectorAll('.price span')

  const newNameValue = newNameArrNodes[newNameArrNodes.length - 1]
  const newPriceValue = newPriceArrNodes[newPriceArrNodes.length - 1]

  // get new values
  const nameField = document.querySelector('.new-name')
  const nameValue = nameField.value

  const priceField = document.querySelector('.new-price')
  const priceValue = priceField.value

  // set new values
  newNameValue.textContent = nameValue
  newPriceValue.textContent = parseFloat(priceValue)

  // clear inputs
  const newProductRow = document.querySelectorAll('.create-product input')
  newProductRow.forEach(input => {
    const inputClass = input.getAttribute('class')
    if (inputClass === "new-name") {
      input.value = ''
    } else {
      input.value = 0
    }
  })


  // calculate total
  calculateAll()

  document.querySelectorAll('.btn-remove').forEach(eachBtn => {
    eachBtn.onclick = function (e) {
      removeProduct(e.currentTarget)
    }
  })

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here


  document.querySelectorAll('.btn-remove').forEach(eachBtn => {
    eachBtn.onclick = function (e) {
      removeProduct(e.currentTarget)
    }
  })

  const createBtn = document.querySelector('#create')
  createBtn.addEventListener('click', createProduct)
});


