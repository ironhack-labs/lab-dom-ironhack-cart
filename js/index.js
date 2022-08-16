// ITERATION 1

function updateSubtotal(product) { 
  console.log('Calculating subtotal, yey!'); 

  let price = product.querySelector('.price span') 
  price = price.innerHTML 

  console.log(price)

  let quantity = product.querySelector('.quantity input').value

  console.log(quantity)

  let sum =  price * quantity  
  product.querySelector('.subtotal span').innerText = sum 
  console.log(sum)
  
  return sum
}


  // ITERATION 2
  // ITERATION 3

function calculateAll() {
  
  let sum = 0
  const products = document.querySelectorAll('.product'); 
    for (let product of products) {
      let subtotal = updateSubtotal(product);
      console.log (products)
    
      sum += subtotal

      console.log(sum)
      
  }
  document.querySelector('#total-value span').innerHTML = sum 
}
  

// ITERATION 4

function removeProduct(event) {
  
  const productList = event.currentTarget.parentNode.parentNode.parentNode
  const child = productList.removeChild(event.currentTarget.parentNode.parentNode)
 
  console.log(child)
 
  calculateAll() 

} 

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate'); 
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btns = document.querySelectorAll('.btn.btn-remove') 
    for (let btn of btns) 
      btn.addEventListener('click', removeProduct)
    
}
)

