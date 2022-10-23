// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const result = price * quantity;
  return subtotal.innerText = result;

}

function calculateAll() {
  const productValue = document.querySelectorAll('.product');
  let totalValue = document.querySelector('#total-value span')
  let subtotal = 0
  for (let i = 0; i < productValue.length; i++) {

    subtotal += updateSubtotal(productValue[i])
  }

  totalValue.innerText = subtotal

}

console.log(document.querySelectorAll('.product'))

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode;
  parent.remove();

  console.log('The product removed is', parent)

  calculateAll();
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

});
