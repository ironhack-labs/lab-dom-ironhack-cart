// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value)
  const subtotal = price * quantity

  const subtotalSpan = product.querySelector('.subtotal span')
  subtotalSpan.textContent = subtotal.toFixed(2)

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  const products = document.querySelectorAll('.product');
  const totalSpan = document.querySelector('#total-value span')
  let totalCount = 0;
  
  // ITERATION 2
  //... your code goes here
  products.forEach(product => {
    totalCount += updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  totalSpan.textContent = totalCount.toFixed(2)
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const button = event.currentTarget;
  const product = button.closest('.product')
  // button.parentNode.parentNode -> padre del padre, en este caso es posible tr -> td -> button;
  product.remove()

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const tableBody = document.querySelector('table tbody')
  const newProduct = document.querySelector("#templates .product").cloneNode(true)
  const priceInput = document.querySelector('input[name=price]') // querSelector("#price")
  const nameInput = document.querySelector('input[name=name]') // querSelector("#name")
  const price = Number(priceInput.value)
  const name = nameInput.value

  if (name && price ) {
    newProduct.querySelector('.name span').textContent = name
    newProduct.querySelector('.price span').textContent = `${price}.00`
    newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct)

    tableBody.appendChild(newProduct)

    priceInput.value = 0;
    nameInput.value = ""

  } else {
    window.alert('HEY RELLENA TODOS LOS CAMPOS!')
  }

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const deleteButtons = document.querySelectorAll('.btn-remove');
  const createButton = document.querySelector("#create")
  createButton.addEventListener('click', createProduct)

  deleteButtons.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
  calculatePricesBtn.addEventListener('click', calculateAll);
});
