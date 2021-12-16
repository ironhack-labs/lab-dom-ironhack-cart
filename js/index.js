// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotalPrice = price * quantity

  const subtotal = document.querySelector('.subtotal span')
  subtotal.innerText = subtotalPrice

  return subtotalPrice
  
}

function calculateAll() {
  const products = document.getElementsByClassName('product')

  let total = 0;

  for(let i = 0; i < products.length; i++){
    total += updateSubtotal(products[i])
  }

  const totalValue = document.querySelector('#total-value span')
  totalValue.innerText = total
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}



// ITERATION 5

function createProduct() {
  const tbody = document.querySelector('#cart tbody')

  const copyOfCopyTr = copyTr.cloneNode(true)

  let productName = document.getElementById('product-name')
  let productPrice = document.getElementById('product-price')

  copyOfCopyTr.querySelector('.name span').innerText = productName.value
  copyOfCopyTr.querySelector('.price span').innerText = productPrice.value

  const removeButton = copyOfCopyTr.querySelector('.action button')

  removeButton.addEventListener('click', (event)=>{
    const button = event.currentTarget;
    button.parentNode.parentNode.remove()
  })

  tbody.appendChild(copyOfCopyTr)

  productName.value = ''
  productName.placeholder = 'Product Name'
  productPrice.value = 0
}

window.addEventListener('load', () => {

  const tr = document.querySelector('#cart tbody tr')
  copyTr = tr.cloneNode(true)

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove')
  
  for(let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', (event)=>{
      const button = event.currentTarget;
      button.parentNode.parentNode.remove()
    })
  }

  const createProductButton = document.getElementById('create')

  createProductButton.addEventListener('click', createProduct)
});


