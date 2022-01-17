// ITERATION 1
let clone = document.getElementsByClassName('product')[0].cloneNode(true)
let parent = document.getElementsByClassName('product')[0].parentNode
console.log(clone)

function updateSubtotal(product) {
  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input ')
  let subtotal = product.querySelector('.subtotal span')

  let total = price.innerHTML * quantity.value

  subtotal.innerHTML = total

  return total


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test
  let allProducts = document.getElementsByClassName('product')
  let totalPrice = 0
  let totalp = document.getElementById('total-value')
  let totalnum = totalp.querySelector('span')
  for (i = 0; i < allProducts.length; i++) {
    totalPrice += updateSubtotal(allProducts[i]);
  }
  totalnum.innerHTML = totalPrice







  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode.parentNode
  parent.parentNode.removeChild(parent)


  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  let name = document.getElementById('product-name').value

  let price = document.getElementById('product-price').value



  let cloni = clone.cloneNode(true)
  let newName = cloni.querySelector('.name span')
  newName.innerHTML = name
  let newPrice = cloni.querySelector('.price span')
  newPrice.innerHTML = price


  const button = cloni.querySelector('.btn-remove')
  button.addEventListener('click', removeProduct);

  parent.appendChild(cloni)


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create')
  createProductBtn.addEventListener('click', createProduct);


  //... your code goes here
});
