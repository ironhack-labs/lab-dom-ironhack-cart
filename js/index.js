// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subTotalPrice = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotalPrice;
  //... your code goes here
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');

  const subtotals = [];
  for (let product of products) {
    const subtotal = updateSubtotal(product);
    subtotals.push(subtotal);
  }

  // ITERATION 3
  // total.innerText = products.forEach(product => (total.innerText += updateSubtotal(product)));

  const totalValue = subtotals.reduce((total, subtotal) => {
    return total + subtotal;
  }, 0);

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = totalValue;

  //... your code goes here
}

//BONUS
// ITERATION 4
/*
const quantityValue = product.querySelector('.quantity input').value;
function removeProduct(event) {
  const targetProduct = event.currentTarget;
  //const targetButton = target.parentNode;
  //const button = targetButton.parentNode;
  //button.removeChild(targetButton);
  console.log('The target in remove is:', targetProduct);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}*/

window.addEventListener('load', () => {
  /*const removeButton = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButton.length; i++) {
    let removeProductButton = removeButton[i];
    removeProductButton.addEventListener('click', removeProduct);
  }*/
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
