// ITERATION 1

function updateSubtotal(product) {
 

  const priceNode = product.querySelector('.price span');
  
  const buttonQuantity = product.querySelector('.quantity input');
  
  const subTotalNode = product.querySelector('.subtotal span');
 
  const subtotal = priceNode.textContent*buttonQuantity.value
  subTotalNode.textContent = subtotal
  return subtotal


}

function calculateAll() {
  
  
  const products = document.querySelectorAll('.product');

  

  const totalPrice = document.querySelector('h2 span')


  let totalToPay =0

  products.forEach(eachProduct => {

    totalToPay += updateSubtotal(eachProduct);
   

   })

   totalPrice.textContent = totalToPay

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  const parenNode = target.parentNode.parentNode

 parenNode.remove()

  // while (parenNode.firstChild) {  
  //   parenNode.removeChild(parenNode.firstChild);  
  // } 
  
calculateAll()  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttons = document.querySelectorAll('.btn-remove');
  
  
  buttons.forEach(eachButton => { 

   eachButton.onclick = removeProduct
   
    
  })

  //... your code goes here
});
