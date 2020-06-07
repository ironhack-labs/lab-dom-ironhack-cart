// ITERATION 1
//... your code goes here  

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  //alert('Calculate price Clicked')

  let subTotalprice = price * quantity
  let subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = subTotalprice

   return subTotalprice
  
}

function calculateAll() {

  // ITERATION 2
  //... your code goes here

  let allProduct = document.querySelectorAll('.product')

  let sum = 0

  allProduct.forEach(function (elm) { sum += updateSubtotal(elm)
      })

  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerHTML = sum
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  //No consegui entender bien el removeChild:
  
  const remove = document.querySelectorAll('.action')
  document.querySelector('tbody').removeChild(remove)


  

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const remove = document.querySelectorAll('.btn-remove') 

  remove.forEach(function (elm) {
  elm.addEventListener('click', removeProduct)
    
 })


  


});
