// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalElement = product.querySelector('.subtotal span');
  
  const priceNumber = parseFloat(price);
  const quantityNumber = parseFloat(quantity);
  
  const subtotal = priceNumber * quantityNumber;
  
  subtotalElement.innerText = subtotal;
  
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const product = document.getElementsByClassName('product');
  let calculateAll = 0;
  
  for (let i = 0; i < product.length; i++) {
    calculateAll += updateSubtotal(product[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span');
  
  totalPrice.innerText = calculateAll;
  
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const trElement = target.parentNode.parentNode;
  const trElementParent = trElement.parentNode;

  trElementParent.removeChild(trElement);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('btn btn-remove');
  console.log('buttons:', removeButtons)

  for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
    console.log('button:', removeButton)
   
  }

});


