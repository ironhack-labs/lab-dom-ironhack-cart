// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  let subtotalValue = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalValue
  console.log(subtotal)
  return subtotalValue
  //... your code goes here
}

console.log(updateSubtotal(document))

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = []
  products = document.getElementsByClassName('product')
  let totalPrice = 0
  for (let i = 0; i < products.length; i++) {
    totalPrice += updateSubtotal(products[i])
  }
  const totalElement = document.querySelector('#total-value span')
  totalElement.innerHTML = totalPrice
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  console.log("trying to remove")
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  productToRemove = target.parentNode.parentNode
  productToRemove.parentNode.removeChild(productToRemove)
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {


  const name = document.querySelector('.create-product td:nth-of-type(1) input')
  const price = document.querySelector('.create-product td:nth-of-type(2) input')

  let nameValue = name.value
  if (nameValue === "") {
    nameValue = "Default product"
  }
  let priceValue = price.value


  const newProduct = document.createElement('tr')
  newProduct.setAttribute('class', 'product')

  const productName = document.createElement('td')

  productName.innerHTML = `<span>${nameValue}</span>`
  productName.setAttribute('class', 'name')

  const productPrice = document.createElement('td')
  productPrice.innerHTML = "$" + `<span>${priceValue}</span>`
  productPrice.setAttribute('class', 'price')

  const productQuantity = document.createElement('td')
  productQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />'
  productQuantity.setAttribute('class', 'quantity')

  const productSubtotal = document.createElement('td')
  productSubtotal.innerHTML = '$<span>0</span></td>'
  productSubtotal.setAttribute('class', 'subtotal')

  const productRemove = document.createElement('td')
  productRemove.innerHTML = '<button class="btn btn-remove">Remove</button>'
  productRemove.setAttribute('class', 'action')

  const newRemoveButton = productRemove.querySelector('.btn-remove')
  newRemoveButton.addEventListener("click", removeProduct)

  name.value.innerHTML = ""
  price.value.innerHTML = ""



  // 2.- Fulfill element
  newProduct.setAttribute('title', 'Añadido dinámicamente!')

  // 3.- Append element into DOM (al final del padre)
  newProduct.appendChild(productName)
  newProduct.appendChild(productPrice)
  newProduct.appendChild(productQuantity)
  newProduct.appendChild(productSubtotal)
  newProduct.appendChild(productRemove)
  document.querySelector('tbody').appendChild(newProduct)

  name.value = ""
  price.value = ""
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  let removeButtons = document.getElementsByClassName('btn-remove')
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
    console.log("adding button for remove")
  }

  //... your code goes here
});
