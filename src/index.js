// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subElement = product.querySelector('.subtotal span');
  subElement.innerHTML = subtotal;
  return subtotal;
}

// ITERATION 2

function calculateAll() {
 const allProducts = document.getElementsByClassName('product')
let initialValue = 0
for (let i = 0; i < allProducts.length; i++){
  initialValue += updateSubtotal(allProducts[i])
}

document.querySelector('#total-value span').innerHTML = initialValue
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let rowToRemove = target.parentNode.parentNode
  rowToRemove.parentNode.removeChild(rowToRemove)
  }

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const allRemoveButtons = document.getElementsByClassName('btn-remove')
  for(let i=0; i < allRemoveButtons.length; i++){
  allRemoveButtons[i].addEventListener('click', removeProduct)
  }
});
