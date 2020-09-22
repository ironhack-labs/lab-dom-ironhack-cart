// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;

  let subtotalMath = (price * quantity)

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotalMath

  return subtotalMath
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = document.querySelectorAll('.product')

  let result = 0;
  products.forEach((product) => {
    result += updateSubtotal(product)
  })

  // ITERATION 3

  let updatedTotal = document.querySelector('#total-value span');
  updatedTotal.innerHTML = result
}

// ITERATION 4

const removeProduct = (event) => {
  const selectedButton = event.currentTarget;
  //console.log('The target in remove is:', selectedButton);
  const selectedProduct = selectedButton.parentNode.parentNode
  selectedProduct.parentNode.removeChild(selectedProduct)
}

// ITERATION 5

const createProduct = () => {
  let createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', (event) => {

    let productNameInput = document.querySelector('.create-product input[type="text"]');
    let unitPriceInput = document.querySelector('.create-product input[type="number"]');

    console.log(productNameInput)
    console.log(unitPriceInput)

    let productBody = document.querySelector('tbody');

    let newProduct = document.createElement('tr');
    newProduct.classList.add('product');
    newProduct.innerHTML = `
      <td class="name"><span>${productNameInput.value}</span></td>
      <td class="price">$<span>${unitPriceInput.value}</span></td>
      <td></td> 
      <td></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>`

    let newProductRemoveBtn = newProduct.querySelector('.btn-remove')
    newProductRemoveBtn.addEventListener('click', removeProduct)

    productBody.appendChild(newProduct);

    productNameInput.value = ''
    unitPriceInput.value = ''
  })
}

//create-product input[type=“text”]

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((button) => {
    button.addEventListener('click', removeProduct)
  })

  createProduct();
})