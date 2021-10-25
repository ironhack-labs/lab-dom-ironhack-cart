// ITERATION 1
function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = quantity * price;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalPrice;

  // console.log('subtotal iteration' + subtotalPrice)
  
  return subtotalPrice;

}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let totalPrice= 0;

  for (let i = 0; i< allProducts.length; i++){
    totalPrice += updateSubtotal(allProducts[i]);
  } 

  // ITERATION 3
  
  let total = document.getElementById('total-value').querySelector('span');
  total.textContent = totalPrice;
  // console.log('total iteration' + totalPrice)

  return totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  // console.log('The target in remove is:', target);
  const parent = target.parentNode;
  // console.log('the targets  parent is ', parent);
  parent.removeChild(target);

  let total = document.getElementById('total-value').querySelector('span');
  const targetPrice = updateSubtotal(target);
  // console.log(targetPrice);
  const newTotalPrice = calculateAll();
  total.textContent = newTotalPrice;
  // console.log('new total iteration' + newTotalPrice)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  function removeButton () {
    const removeProdBtn = document.querySelectorAll('.action');
    for (let i = 0; i < removeProdBtn.length; i++){
    removeProdBtn[i].addEventListener('click', removeProduct);
  } 
  }
  removeButton();
});

