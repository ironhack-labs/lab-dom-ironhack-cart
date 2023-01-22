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

}

// ITERATION 5

function createProduct() {
  //... your code goes here

  const productsArray = document.getElementsByTagName('tbody')[0]
  const productClone = productsArray.children[0]

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


  // const row = document.createElement('tr')
  // row.setAttribute('class', 'product')

  // for (let i = 0; i < 5; i++) {
  //   const cell = document.createElement('td')

  //   switch (i) {
  //     case 0:
  //       cell.setAttribute('class', 'name')
  //       const cellContent1 = document.createElement('span')
  //       const cellText1 = document.createTextNode('Producto')

  //       cellContent1.appendChild(cellText1)
  //       cell.appendChild(cellContent1)
  //       break;

  //     case 1:
  //       cell.setAttribute('class', 'price')
  //       const dollarSign = document.createTextNode('$')
  //       const cellContent2 = document.createElement('span')
  //       const cellText2 = document.createTextNode('0')

  //       cellContent2.appendChild(cellText2)
  //       cell.appendChild(dollarSign)
  //       cell.appendChild(cellContent2)
  //       break;

  //     case 2:
  //       cell.setAttribute('class', 'quantity')
  //       const quantityForm = document.createElement('input')
  //       quantityForm.setAttribute('type', 'number')
  //       quantityForm.setAttribute('value', '0')
  //       quantityForm.setAttribute('min', '0')
  //       quantityForm.setAttribute('placeholder', 'Quantity')

  //       cell.appendChild(quantityForm)
  //       break;

  //     case 3:
  //       cell.setAttribute('class', 'subtotal')
  //       const dollarSignST = document.createTextNode('$')
  //       const cellContentST = document.createElement('span')
  //       const cellTextST = document.createTextNode('0')

  //       cellContentST.appendChild(cellTextST)
  //       cell.appendChild(dollarSignST)
  //       cell.appendChild(cellContentST)
  //       break;

  //     case 4:
  //       // cell.setAttribute('class', 'action')
  //       // const removeBtn = document.createElement('button')
  //       // removeBtn.setAttribute('class', 'btn btn-remove')
  //       // removeBtn.setAttribute('innerText', 'Remove')

  //       // cell.appendChild(removeBtn)
  //       break;

  //     default:
  //       break;
  //   }


  //   row.appendChild(cell)
  // }

  // productsArray.appendChild(row)

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
