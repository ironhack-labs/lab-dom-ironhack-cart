// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const newPrice = Number(price) * Number(quantity);

  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = newPrice;

  return newPrice;
}

function calculateAll() {

  let total = 0;

  const multipleProducts = document.getElementsByClassName('product');
  const totalDisplay = document.querySelector('#total-value span');


  for(let i = 0; i < multipleProducts.length; i++){

    total += Number(updateSubtotal(multipleProducts[i]));

  }


  totalDisplay.innerHTML = (total).toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  

  let parent = target.parentNode.parentNode.parentNode;
  let child = target.parentNode.parentNode;
  console.log(parent);

  parent.removeChild(child);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');

  for(let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeProduct);
  }

  //... your code goes here
});
