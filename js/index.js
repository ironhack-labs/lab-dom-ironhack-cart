// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = Number(product.querySelector('.price span').textContent)
  const quantity = Number(product.querySelector('.quantity input').value)

  const subtotal = price * quantity

  const subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.textContent = subtotal

  return subtotal
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //   const singleProduct = document.querySelector('.product');
  //   updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product')

  let total = 0

  for (product of products) {
   total += updateSubtotal(product)
  }

  // ITERATION 3
  //... your code goes here
  const totalPriceNode = document.querySelector('#total-value span')
  totalPriceNode.textContent = total

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductName = document.querySelector('.create-product input[type = "text"]')
  const newUnitPrice = document.querySelector('.create-product input[type = "number"]')

  const name = newProductName.value
  const price = newUnitPrice.value

  if(!name || !price){
    alert ('Please fill the fields  ')
  }
//localizamos el tbody en el html. Para poder crear una nueva fila de producto.
  const tBody = document.querySelector('tbody')

  tBody.appendChild(productRowElement)

const productRowElement = document.createElement('tr')
  productRowElement.classList.add('product')

const nameCell = document.createElement('td')
  nameCell.classList.add('name')

  productRowElement.appendChild(nameCell)

const nameSpan = document.createElement('span')
  nameSpan.textContent = name

  nameCell.appendChild(nameSpan)




}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove')

  for (removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct)
  }

});

  
  