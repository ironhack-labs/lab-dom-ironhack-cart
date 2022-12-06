// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subt = price.innerHTML * quantity
  const subtotalPrice = product.querySelector('.subtotal span');
  subtotalPrice.innerHTML = `${subt}`
  
  return subt;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  
  // end of test

  // ITERATION 2
  const singleProduct = document.getElementsByClassName('product');
  let sum = 0;
  for (let i = 0; i < singleProduct.length; i++){
    sum += updateSubtotal(singleProduct[i]);
  }

  // ITERATION 3
  const totalPrice = document.querySelector("h2 span");

  totalPrice.innerHTML = `${sum}`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //const targetParent = document.querySelector('.product');
  const targetParent = target.parentNode
  const targetParent2 = targetParent.parentNode
  targetParent2.parentNode.removeChild(targetParent2)
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn-remove');
  //const removeBtnClick = removeButtons.map(x => x.addEventListener('click', removeProduct))
  for(let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
