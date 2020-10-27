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
console.log('...creating')
const target = event.currentTarget;
const targetParent = target.parentNode
const price = targetParent.querySelector('input').value
let name = targetParent.querySelector('input').value

console.log(target)
// In createProduct you should target the name and 
// unit price input DOM nodes, extract their values, 
// add a new row to the table with the product name 
// and unitary price, as well as the quantity input 
// and "Remove" button, and ensure that all of the functionality
//  works as expected.


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct)

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