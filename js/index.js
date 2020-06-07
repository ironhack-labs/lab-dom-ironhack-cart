// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotalInput = product.querySelector('.subtotal span') //GETTER

  let subtotal=price.innerHTML*quantity.value
  subtotalInput.innerHTML=subtotal //SETTER

  return subtotal
}

function calculateAll() {

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  const totalProducts = document.querySelectorAll('.product')
  
  let sum = 0
  
  totalProducts.forEach(function (elm) {
    sum= sum+updateSubtotal(elm)
  })
  
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML=sum
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let elementsNode= document.querySelector('.product')

  let newProduct = elementsNode.cloneNode(true)

  let nameNewProduct = newProduct.querySelector('.name span')
  let priceNewProduct = newProduct.querySelector('.price span')

  let createName = document.querySelector('.createName')
  let createPrice = document.querySelector('.createPrice')

  nameNewProduct.innerHTML=createName.value
  priceNewProduct.innerHTML=createPrice.value

  document.querySelector('tbody').appendChild(newProduct)

  createName.value = ''
  createPrice.value = 0

  //Implementación de borrado en el producto creado

  const removeButtons = newProduct.querySelector('.btn-remove')
  removeButtons.addEventListener('click', removeProduct)


}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')

  removeButtons.forEach(function (elm) {
    elm.addEventListener('click', removeProduct);
  })

  
    //elm.addEventListener('click', removeProduct);
  

  //... your code goes here
  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);
});
