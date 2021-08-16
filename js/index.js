// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = price.innerHTML * quantity.value;   
 
  return parseFloat(subtotal.innerHTML);
 
}   
 
function calculateAll(product) {
  const singleProduct = document.getElementsByClassName('product');   
  let total = 0;
  for(let i = 0 ; i < singleProduct.length; i++){
    let iteration =  updateSubtotal(singleProduct[i]); 
    total+= iteration; 
    console.log(iteration);
  } 

  let totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
 }

  // end of test    

  // ITERATION 3
   
function calculateTotal(){
  
}
 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();

  
}

// ITERATION 5

function createProduct() {
 
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const prodBtnRemove = document.getElementsByClassName('btn-remove');
  for(let i = 0 ; i < prodBtnRemove.length; i++){
    prodBtnRemove[i].addEventListener('click', removeProduct);
  } 

});
