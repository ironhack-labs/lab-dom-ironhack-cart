// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  const subtotalPrice = quantity.value * price.innerHTML
  subtotal.innerText = subtotalPrice

  return subtotalPrice
}


function calculateAll() {
  const totalProducts = document.querySelectorAll('.product');
  let values = 0

  for (let i = 0; i < totalProducts.length; i++) {
    values += updateSubtotal(totalProducts[i])
  }

  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = values
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const products = document.querySelectorAll('.product')
  for (let i = 0; i < products.length; i++) {
    const productContainsButton = products[i].contains(target)
    if (productContainsButton === true) {
      const productsList = document.querySelector('.products-list')
      productsList.removeChild(products[i])
    }
    calculateAll()
  }
}

// ITERATION 5

function createProduct() {

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButton = document.querySelectorAll('.action button')
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = removeProduct
  }
  const addProduct = document.querySelector('#create')
  addProduct.addEventListener('click', createProduct)
});
