// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  let actualPrice = price.innerHTML
  let quantity = product.querySelector('.quantity input').value
  let subTotal = product.querySelector('.subtotal span')

  let updatedSubTotal = actualPrice * quantity
  subTotal.innerHTML = updatedSubTotal
  return updatedSubTotal
}

function calculateAll() {
  
  let products = document.getElementsByClassName('product')
  let total = document.querySelector('#total-value span')
  total.innerHTML = "0"
  for (let i = 0; i < products.length; i++){
    let totalNum = parseInt(total.innerHTML)
    total.innerHTML = totalNum + updateSubtotal(products[i])
  }

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let main = target.parentNode.parentNode
  main.remove()
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let table = document.getElementById('cart')
  const prodName = document.querySelector('#prodName').value
  let prodPrice = document.querySelector('#prodPrice').value
  
  
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtnList = document.getElementsByClassName('btn-remove');
  const createBtn = document.querySelector('#create');

  calculatePricesBtn.addEventListener('click', calculateAll);
  for (let i = 0; i < removeBtnList.length; i++) {
    removeBtnList[i].addEventListener('click', removeProduct);
  }
  createBtn.addEventListener('click', createProduct)

  //... your code goes here
});
