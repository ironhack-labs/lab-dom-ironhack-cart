// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
let price = product.querySelector('.price span').innerText  
let quantity = +product.querySelector('.quantity input').value;
  //... your code goes here
let subtotal = price * quantity

product.querySelector('.subtotal span').innerText = subtotal
//console.log(subtotal)
/* console.log(document.querySelector('td.price span').innerText)
console.log(document.querySelector('.quantity input').value)
console.log(document.querySelector('.subtotal span').innerText) */
//these console logs only works when "calculate prices" button
//on the webpage is clicked.
//console.log(price, quantity)
return subtotal

}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product')
  for(let i = 0; i<products.length; i++){
    //console.log(products.length)
    updateSubtotal(products[i])
  }
  
  // ITERATION 3
  //... your code goes here
  let total = 0;
  
  for(let i = 0; i<products.length; i++){
    total += updateSubtotal(products[i])
  }
  document.querySelector('#total-value span').innerText = total
  return products;
}
//console.log(document.querySelectorAll('.product'))
//console.log(document.querySelector('#total-value span').innerText)


// ITERATION 4

function removeProduct(event) {
/*   const target = event.currentTarget;
  console.log('The target in remove is:', target); */
  //... your code goes here
  let product = document.querySelector('.product')
  product.parentNode.removeChild(product)
 
}
//console.log(document.querySelector('.product').parentNode)

// ITERATION 5

function createProduct() {
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //window.addEventListener()
  let removeButton = document.querySelectorAll('.btn.btn-remove');
  for(let i = 0; i<removeButton.length; i++){
    removeButton[i].addEventListener('click', removeProduct)
  }
  
});
//console.log(document.querySelectorAll('.btn.btn-remove'))