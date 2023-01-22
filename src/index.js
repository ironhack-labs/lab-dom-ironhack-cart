// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const unitPrice = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value

  const newSubTotal = unitPrice * quantity

  const subTotal = product.querySelector('.subtotal span')

  subTotal.innerText = newSubTotal

  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here

  const cart = document.querySelectorAll('tr.product')

  let total = 0
  for (i = 0; i < cart.length; i++) {

    const singleProduct = cart[i]
    updateSubtotal(singleProduct)
    total += Number(updateSubtotal(singleProduct).innerText)

  }


  // ITERATION 3
  //... your code goes here

  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = total

  return total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here

  const parent = document.querySelector('tbody')
  const child = target.parentNode.parentNode

  parent.removeChild(child)
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const productsArray = document.getElementsByTagName('tbody')[0]
  const productClone = productsArray.children[0]

  //Crear una copia de uno de los produtos originales
  const newProduct = productClone.cloneNode(true)

  // Tomar datos del tfoot
  const newProductName = document.getElementById('newProductName').value
  const newProductPrice = document.getElementById('newProductPrice').value

  if (!newProductName || !newProductPrice) {

    alert('Debe ingresar en nombre del producto y el precio')
    return

  }

  //Asignar los datos del producto 
  newProduct.querySelector('.name span').innerText = newProductName
  newProduct.querySelector('.price span').innerText = newProductPrice

  productsArray.appendChild(newProduct)

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.querySelectorAll('.btn-remove')
  for (i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct)
  }

  const creatBtn = document.getElementById('create')
  creatBtn.addEventListener('click', createProduct)

});
