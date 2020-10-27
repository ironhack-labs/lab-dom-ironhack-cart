// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value
  const subTotal = price * quantity
  product.querySelector('.subtotal span').textContent = subTotal
  console.log(subTotal,product)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
   [...products].forEach(product  => updateSubtotal(product))
  // ITERATION 3
  //... your code goes here
  const subTotalList = document.querySelectorAll('.subtotal span');
  let sum = 0
  subTotalList.forEach(subtotal => sum += Number(subtotal.textContent))
  console.log(sum)
  document.querySelector('#total-value').textContent = 'Total: $'+sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = event.target.parentNode.parentNode
  console.log(parent)
  parent.innerHTML = ""
}

// ITERATION 5

function createProduct() {
  //... your code goes here
    // createdProducts[0].value 
    // createdProducts[1].value
    // document.querySelector('tbody').appendChild(newItem)
    const createdProducts = document.querySelectorAll('.create-product input')
    const newItem = document.querySelector('tbody tr')
    console.log(newItem)
    const cloned = newItem.cloneNode(true)
     cloned.querySelector('.name span').textContent = createdProducts[0].value
     createdProducts[0].value =''
     createdProducts[1].value = 0
     cloned.querySelector('.price span').textContent = createdProducts[1].value
     document.querySelector('tbody').appendChild(cloned)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const addButton = document.getElementById('create')
  addButton.addEventListener('click', createProduct )
  //... your code goes here
  const removeButton = document.getElementsByClassName('btn-remove');
  [...removeButton].forEach(button => button.addEventListener('click', removeProduct))
});
