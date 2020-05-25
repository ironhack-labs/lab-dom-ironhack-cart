// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const calculateSubt = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  
  subtotal.innerText = calculateSubt;

  
}

function calculateAll() {

  
  // ITERATION 2
  
  const allProducts = document.getElementsByClassName('product');
  [...allProducts].map(product => updateSubtotal(product))

  // ITERATION 3

  const allSubtotals = document.querySelectorAll('.subtotal span');
  const calculateTotal = [...allSubtotals].reduce((acc, number) => acc + Number(number.innerText), 0);
  const total = document.querySelector('#total-value span')

  total.innerText = calculateTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // const child = document.querySelector('.btn-remove')
  // const parent = child.closest('.action')
  

  const buttonParent = target.closest('.product');
  const parent = buttonParent.parentElement;
  const removingProduct = parent.removeChild(buttonParent)

}

// ITERATION 5

function createProduct() {




}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  [...removeBtn].forEach(button => {
    button.addEventListener('click', removeProduct)
  });

  const createProduct = document.getElementById('create');
  [...removeBtn].forEach(button => {
    button.addEventListener('click', removeProduct)
  });

});

