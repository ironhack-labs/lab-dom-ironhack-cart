// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');
  let subTotalAmnt = price * quantity;
  let finalTotal = subTotal.innerHTML = subTotalAmnt;
  return finalTotal  

}


function calculateAll() {

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  let total = 0;
  for (const product of products){
      updateSubtotal(product); 
      total += Number(product.querySelector('.subtotal span').innerHTML);
  }

  // ITERATION 3
 let totalPrice = document.querySelector('#total-value');
 

 totalPrice.innerHTML = `Total:${total}$`;

}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode);
  let toRemove = document.querySelector('.product');

 
    target.parentNode.parentNode.parentNode.removeChild(toRemove)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  const creatBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtns = document.querySelectorAll('.btn-remove');
  for(const btn of removeBtns){
    btn.addEventListener('click', removeProduct)
  }
});


