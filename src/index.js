// ITERATION 1

function updateSubtotal(product) {
console.log('Calculating subtotal, yey!');
 const price = product.querySelector('.price span').innerHTML;
 const quantity = product.querySelector ('.quantity input').value;
 const subtotal = price * quantity;
    let total = product.querySelector('.subtotal span') 
    total.innerHTML = subtotal

  return subtotal;

  }
  
function calculateAll() {
// ITERATION 2 & ITERATION 3

const allProducts = document.getElementsByClassName ('product');
 let emptyValue = 0
 for (let i = 0; i < allProducts.length; i++) {
  emptyValue +=updateSubtotal (allProducts [i])
 }

  document.querySelector('#total-value span').innerHTML = emptyValue
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

let removeLine = target.parentNode.parentNode;
let parentRemoveLine = target.parentNode.parentNode.parentNode;

parentRemoveLine.removeChild(removeLine)
  

}

// ITERATION 5

function createProduct() {
  let addNewLine = document.querySelector(".create-product");
  addEventListener('click', createProduct)
target.


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeButtons =  document.querySelectorAll('.btn-remove')
   for (let i = 0; i <removeButtons.length; i++) {
   removeButtons[i].addEventListener('click', removeProduct)
   }
});
}