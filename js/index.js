// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotalValue = price * quantity;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = subTotalValue;
  return subTotalValue
}
function calculateAll() {
  // ITERATION 2
  let productsArray = [...document.querySelectorAll('.product')];
  let total = 0
  productsArray.forEach((product) => {
    debugger
    updateSubtotal(product)
     total +=  updateSubtotal(product)
     console.log(total)
  });

  document.querySelector('#total-value span').innerHTML = total
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
});
