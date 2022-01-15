// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  const subTotalPrice = parseFloat(price) * parseFloat(quantity)

  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = subTotalPrice

  return subTotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i])
  }

  // ITERATION 3
  const allSubtotals = document.querySelectorAll('.subtotal span')

  let subtotalsSumatory = 0

  for (let i = 0; i < allSubtotals.length; i++) {
    subtotalsSumatory += parseFloat(allSubtotals[i].innerHTML)
  }

  const totalDisplay = document.querySelector('h2 span')
  totalDisplay.innerHTML = subtotalsSumatory
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const productToRemove = target.parentNode.parentNode      // el 1º .parentNode llega al td y el 2ª .parentNode llega al tr
  productToRemove.parentNode.removeChild(productToRemove)

  const removedProductSubtotal = productToRemove.querySelector('.subtotal span').innerHTML

  const totalDisplay = document.querySelector('h2 span')
  totalDisplay.innerHTML -= parseFloat(removedProductSubtotal)
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const newProductName = document.querySelector('.text-input').value
  const newProductPrice = document.querySelector('.number-input').value

  const newRow = document.createElement('tr')
  newRow.setAttribute('class', 'product')

  const rowParent = document.querySelector('tbody')
  rowParent.appendChild(newRow)

  // Product's Name

  const productName = document.createElement('td')
  productName.setAttribute('class', 'name')
  productName.innerHTML = newProductName


  // Product's Price

  const productPrice = document.createElement('td')
  productPrice.setAttribute('class', 'price')
  productPrice.innerHTML = `$<span>${newProductPrice}</span>`


  // Product's Quantity

  const productQuantity = document.createElement('td')
  productQuantity.setAttribute('class', 'quantity')
  productQuantity.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity"/>`


  // Product's Subtotal
  const productSubtotal = document.createElement('td')
  productSubtotal.setAttribute('class', 'subtotal')
  productSubtotal.innerHTML = `$<span>0</span>`


  // Product's Remove Button
  const productRemove = document.createElement('td')
  productRemove.setAttribute('class', 'action')
  productRemove.innerHTML = `<button class="btn btn-remove">Remove</button>`

  const productRows = document.querySelectorAll('tbody tr')

  for (let i = 0; i < productRows.length; i++) {
    if (productRows[i].childNodes.length === 0) {
      productRows[i].appendChild(productName)
      productRows[i].appendChild(productPrice)
      productRows[i].appendChild(productQuantity)
      productRows[i].appendChild(productSubtotal)
      productRows[i].appendChild(productRemove)
    }
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const allRemoveBtns = document.querySelectorAll('.btn-remove')
  for (let i = 0; i < allRemoveBtns.length; i++) {
    allRemoveBtns[i].addEventListener('click', removeProduct)
  }

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct)
});
