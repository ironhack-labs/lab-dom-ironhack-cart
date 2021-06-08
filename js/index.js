// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('input')

  let priceValue = price.innerText
  let quantityValue = quantity.value

  let subTotal = priceValue * quantityValue; 

  let subTotalElement = product.querySelector('.subtotal span')
  subTotalElement.innerText = subTotal
  
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product')

  let cartTotal = 0;

  products.forEach(product => {
    cartTotal += updateSubtotal(product)
  })

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = cartTotal;
}

// ITERATION 4
function removeProduct(event) {
  console.log("I run")
  const target = event.currentTarget;

  // let removeButton = event.currentTarget;

  let fullProduct = target.parentNode.parentNode
  fullProduct.remove()
  calculateAll()
}

// ITERATION 5
function createProduct() {
  let createProductButton = document.querySelector('#create')

  createProductButton.addEventListener('click', e => {
    // Get the elements 
    let productName = document.querySelector('.create-product input[type="text"]').value
    let productPrice = document.querySelector('.create-product input[type="number"]').value

    if (!productName || !productPrice) {
      alert('Please fill in the required forms')
      return 0;
    }

    // Create a new element
    let newProduct = document.createElement('tr');
    newProduct.classList.add('product')

    // Create all the elements that go inside this new table row
    // ProductName td
    let nameTd = document.createElement('td')
    nameTd.classList.add('name')
    let nameSpan = document.createElement('span')
    nameSpan.innerText = productName;
    nameTd.appendChild(nameSpan)

    // product Price td
    let priceTd = document.createElement('td')
    priceTd.classList.add('price')
    priceTd.innerText = '$'
    let priceSpan = document.createElement('span')
    priceSpan.innerText = productPrice;
    priceTd.appendChild(priceSpan)

    // Quantity input td
    let quantityTd = document.createElement('td')
    quantityTd.classList.add('quantity')
    let quantitySpan = document.createElement('input')
    quantitySpan.setAttribute('type', 'number')
    quantitySpan.setAttribute('value', '0')
    quantitySpan.setAttribute('min', '0')
    quantitySpan.setAttribute('placeholder', 'Quantity')
    quantityTd.appendChild(quantitySpan)

    // Subtotal td 
    let subTotalTd = document.createElement('td')
    subTotalTd.classList.add('subtotal')
    subTotalTd.innerText = '$'
    let subTotalSpan = document.createElement('span')
    subTotalSpan.innerText = 0;
    subTotalTd.appendChild(subTotalSpan)

    // Remove button td
    let removeButtonTd = document.createElement('td')
    removeButtonTd.classList.add('action')
    let removeButton = document.createElement('button')
    removeButton.classList.add('btn')
    removeButton.classList.add('btn-remove')
    removeButton.innerText = 'Remove'
    removeButtonTd.appendChild(removeButton)

    // removeButtonTd.addEventListener('click', (event) => {
    //   removeProduct(event)
    // })

    // Add all the elements to this product
    newProduct.appendChild(nameTd)
    newProduct.appendChild(priceTd)
    newProduct.appendChild(quantityTd)
    newProduct.appendChild(subTotalTd)
    newProduct.appendChild(removeButtonTd)

    // append the new element to the table
    // Get table element
    const tableElement = document.querySelector('#cart tbody')
    tableElement.appendChild(newProduct)

    let productName2 = document.querySelector('.create-product input[type="text"]')
    let productPrice2 = document.querySelector('.create-product input[type="number"]')

    productName2.value = '';
    productPrice2.value = '';
    productPrice2.setAttribute('placeholder', '0')

    removeButtonEventsCreator()
  
  })
}
 
function removeButtonEventsCreator() {
  let removeButtons = document.querySelectorAll('.btn-remove')

  removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      removeProduct(event)
    })
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  // Had to abstract this part to be able to set a new event listener on the remove button when a new product is created

  // // Get all remove buttons
  // let removeButtons = document.querySelectorAll('.btn-remove')

  // // Add event listeners
  // removeButtons.forEach(button => {
  //   button.addEventListener('click', (event) => {
  //     removeProduct(event)
  //   })
  // })

  removeButtonEventsCreator()

  createProduct()
});
