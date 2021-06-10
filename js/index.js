// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  console.log(subtotal);
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  let total = 0;
  let productsList = document.getElementsByClassName('product');
  for (let i = 0; i < productsList.length; i += 1) {
    total += updateSubtotal(productsList[i]);
  }
    // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
  return total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = target.parentNode;
  let parentParent = parent.parentNode
  let parentParentParent = parentParent.parentNode
  parentParentParent.removeChild(parentParent);
}

// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeButtons.length; i += 1) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
