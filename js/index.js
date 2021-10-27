// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const calculateSubtotal = price * quantity
  const subtotal = product.querySelector('.subtotal span') //Target subtotal span
  subtotal.innerText = calculateSubtotal //Update subtotal span with the actual subtotal

  return calculateSubtotal //Return to use in calculate all
}

function calculateAll() {

  // ITERATION 2
  let sum = 0
  const productArray = document.getElementsByClassName('product') //Extract a list of the products
  for(let i = 0; i < productArray.length; i++){ //Update subtotal for every product while adding it to the sum
    sum += updateSubtotal(productArray[i])
  }
  
  // ITERATION 3
  const total = document.querySelector('#total-value span') //Target the total span
  total.innerText = sum //Change the total span to the sum
}

// ITERATION 4

function removeProduct(event) { //Event refers to the event that makes the function get called (for example clicking)
  const target = event.currentTarget; //Current target points to the html element that the event was started on
  // console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove() //button > td > tr, then remove the tr (the product)

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const rmvBtns = document.querySelectorAll('.btn-remove')
  for(let btns of rmvBtns){ //Add an event listener to every remove button
    btns.addEventListener('click', removeProduct) //No () on removeProduct, using () would use the return 
  }                                               //instead of doing the functionality when clicking

  //... your code goes here
});
