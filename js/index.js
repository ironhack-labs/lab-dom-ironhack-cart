// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value
  const subtotalPrice = price * quantity
  const subtotal  = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice
  
  console.log(subtotalPrice);
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  const products = document.querySelectorAll('.product')
  products.forEach (function (product){
    updateSubtotal(product);
  })
  
  // ITERATION 3
  const subtotals = document.querySelectorAll('.subtotal span');
  const subtotal1=subtotals[0].innerHTML
  const subtotal2=subtotals[1].innerHTML
  const totalPrice = parseInt(subtotal1) + parseInt(subtotal2)
  const totalPriceValue= document.querySelector('h2 span')
  totalPriceValue.innerHTML= totalPrice
  console.log(totalPrice)
 
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const td = target.parentNode
  const product = td.parentNode
  const tbody = product.parentNode

  tbody.removeChild(product)
   
   
  console.log('The target in remove is:', target);
  //... your code goes here
  

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const remove = document.querySelectorAll('.btn-remove')
  remove.forEach (function (remove){
    remove.addEventListener('click', removeProduct); 
    // remove.addEventListener('click', calculateAll);
    
  })
  //... your code goes here
});
