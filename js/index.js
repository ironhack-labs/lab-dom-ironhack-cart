const copyRow = document.querySelector('.product').cloneNode(true)

// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price*quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let totalPrice = 0

  const cartHTML = document.getElementsByClassName('product');
  const productsArray = [...cartHTML];
  productsArray.forEach((product)=>{
  totalPrice += updateSubtotal(product);
  })

  // ITERATION 3
  document.getElementById('total-value').children[0].innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  parentToRemove = target.parentNode.parentNode;
  parentToRemove.parentNode.removeChild(parentToRemove);
  calculateAll();
}

// ITERATION 5

function cleanInput(element) {element.value = ''}

function createProduct() {
  const inputProductData = [...document.querySelectorAll('.create-product input')]
  const inputProductName = inputProductData[0].value
  const inputProductPrice = inputProductData[1].value

  document.querySelectorAll('.create-product input').forEach((inputField)=>{
    cleanInput(inputField)})

  const newProduct = copyRow.cloneNode(true)
  newProduct.querySelectorAll('.name span')[0].innerHTML = inputProductName
  newProduct.querySelectorAll('.price span')[0].innerHTML = inputProductPrice

  const parentNode = document.querySelectorAll('#cart tbody')[0]
  parentNode.appendChild(newProduct)
  updateRemoveBtns()
}

function updateRemoveBtns() {
  const removeProductButtons = [...document.getElementsByClassName('btn-remove')];
  removeProductButtons.forEach((button)=>{
    button.addEventListener('click', removeProduct);
  })
}

window.addEventListener('load', () => {
  updateRemoveBtns()
  const createNewProductBtn = document.getElementById('create');
  createNewProductBtn.addEventListener('click', createProduct);

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
