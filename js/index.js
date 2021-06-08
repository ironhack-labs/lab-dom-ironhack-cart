// ITERATION 1
//for testing (npm run test:watch)

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;

  let quantity = product.querySelector('.quantity input').value;

  let subTotal = product.querySelector('.subtotal span')

  subTotal.innerText = price * quantity;

  return subTotal;
}

function calculateAll() {
  
  const products = document.querySelectorAll('.product');
  let totalValue = document.querySelector('#total-value span');

  total = 0;

  for(let i = 0; i < products.length; i++){
    total += Number(updateSubtotal(products[i]).innerText);
  }
 
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  
    target.remove(); // it remove the product but the test fail??
}
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  for(let i = 0; i < removeProductBtn.length; i++){
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  //... your code goes here
});
