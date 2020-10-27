// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  // console.log(price)
  // console.log(quantity)
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = price * quantity
  let subTot = price * quantity
  // console.log(subtotal)
  //... your code goes here
  let subVal = subtotal.innerText
  // console.log(subVal)
  return subTot
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // let parent = document.querySelector('.product').parentNode
  // const singleProduct = document.querySelector('.product');
  let subTot = 0
  document.querySelectorAll('.product').forEach(product => {
   updateSubtotal(product)
   subTot = updateSubtotal(product) + subTot
  } )
  document.querySelector('#total-value span').innerText = subTot
}

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = target.parentNode.parentNode.parentNode
  let child = target.parentNode.parentNode
  parent.removeChild(child)
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  

  const removeBtn = document.querySelectorAll('.btn-remove');
  // removeBtn.addEventListener('click', removeProduct)
  removeBtn.forEach(button =>{
    button.addEventListener('click', removeProduct)
  })  
  //... your code goes here
});


// document.querySelectorAll('.product').forEach(product => {
//   updateSubtotal(product)
//   subTot = updateSubtotal(product) + subTot
//  } )