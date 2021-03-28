// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;

  const quantity = product.querySelector('.quantity input').value

  const subtotalPrice = price * quantity

  product.querySelector('.subtotal span').textContent = subtotalPrice

  return subtotalPrice
} 0

function calculateAll() {

  // ITERATION 2
  //... your code goes here
  let total = 0
  document.querySelectorAll('.product').forEach(eachRow => {
    updateSubtotal(eachRow)
    total += updateSubtotal(eachRow)
  // ITERATION 30
  //... your code goes here
  })
  document.querySelector('#total-value span').textContent = total
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productToRemove = event.currentTarget.parentNode.parentNode
  // document.productToRemove('.cart').removeChild(productToRemove)
  productToRemove.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let newProductName = document.querySelector('.create-product .name').innerContent;
  console.log(newProductName)
  let newProductPrice = document.querySelector('.create-product .price').value;
  console.log(newProductPrice)

  const referenceProduct = document.querySelector('.product');
  let newProduct = referenceProduct.cloneNode(true)

  newProduct.querySelector('.product .name').innerText = newProductName
  newProduct.querySelector('.product .price').value= newProductPrice

  document.querySelector('#cart tbody').appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll); 

  //... your code goes here
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(eachRemoveBtn => {
  eachRemoveBtn.addEventListener('click', removeProduct);
})

const createProductBtn = document.querySelector('#create');
createProductBtn.addEventListener('click', createProduct);
 
});
