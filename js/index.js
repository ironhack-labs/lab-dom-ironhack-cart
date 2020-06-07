// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;


  const subTotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subTotal
  return subTotal


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let subTotalPrice = 0

  const products = document.querySelectorAll('.product')
  products.forEach(function (elment) {
    subTotalPrice += updateSubtotal(elment)
  })


  // ITERATION 3
  document.querySelector('#total-value span').textContent = subTotalPrice
}

// ITERATION 4



function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  // target.parentNode.parentNode.style.background = 'red'
  target.parentNode.parentNode.remove()
}



// ITERATION 5

function createProduct() {
  //... your code goes here
  const contentTarget = document.querySelector('.product').innerHTML
  const newProduct = document.querySelector('.product-name').value
  const newPrice = document.querySelector('.product-price').value


  // 1. Create Element
  const newTarget = document.createElement('tr')

  //2. FulFill Element
  newTarget.setAttribute('class', 'product')
  document.querySelector('.name span').textContent = newProduct
  document.querySelector('.price span').textContent = newPrice


  newTarget.insertAdjacentHTML('afterbegin', contentTarget); // <= site of tag. This is child of the tr

  //3. Print the target
  document.querySelector('tbody').appendChild(newTarget)


}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  //... your code goes here

  //Me perdí un poco,
  document.querySelectorAll('.btn-remove').forEach(function (elment) {
    elment.onclick = function (e) {
      removeProduct(e)
    }
  })

  const newProduct = document.getElementById('create');
  newProduct.addEventListener('click', createProduct);
});