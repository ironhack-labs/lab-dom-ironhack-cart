// ITERATION 1

function updateSubtotal(product) {
  
  const quantity = product.querySelector('.subtotal span')
  const price = parseFloat(product.querySelector('.price span').innerText);
  const valueProduct = parseInt(product.querySelector('.quantity input').value);
  

  return quantity.innerText =  price * valueProduct


}

function calculateAll() {


  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArray = [...products]
  const totalValueProducts = productsArray.map(product => updateSubtotal(product)).reduce((acum, currentValue) => acum + currentValue)

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = totalValueProducts;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = (target.parentNode).parentNode
  parent.remove()
}

// ITERATION 5

function createProduct() {
  const product = document.querySelector('.product')
  const productNew = product.cloneNode(true)
  const name = productNew.querySelector('.name > span')
  const price = productNew.querySelector('.price > span')
  const newName = document.getElementById('new-product')
  const newPrice = document.getElementById('new-price')

  if (newName.value.length !== 0) {
    name.innerText = newName.value
    price.innerText = newPrice.value
    productNew.querySelector('.subtotal span').innerText = 0;
    productNew.querySelector('.quantity input').value = 0;
    productNew.getElementsByClassName('btn-remove')[0].addEventListener('click', removeProduct)
    document.getElementsByTagName('tbody')[0].appendChild(productNew)
  
    newName.value = ''
    newPrice.value = 0
  }


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductButton = [...document.getElementsByClassName('btn-remove')];
  removeProductButton.map (boton => boton.addEventListener('click', removeProduct));
  const createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', createProduct)

});
