// ITERATION 1

function updateSubtotal(product) {
    //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = (price * quantity);

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

  // ITERATION 2

function calculateAll() {
  //... your code goes here
  const productLine = document.getElementsByClassName('product');
  for (let i = 0; i < productLine.length; i++) {
    updateSubtotal(productLine[i]);

  }

  // ITERATION 3
  //... your code goes here
  const numb1 = parseFloat(document.querySelectorAll('.subtotal span')[0].innerHTML);
  const numb2 = parseFloat(document.querySelectorAll('.subtotal span')[1].innerHTML);
  const numb3 = parseFloat(document.querySelectorAll('.subtotal span')[2].innerHTML);

  let total = numb1 + numb2 + numb3;
  // I know there must be a more efficient way to do it, but my brain hurts right now...
  document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});