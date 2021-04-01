let productSelection = document.getElementsByClassName('product');

// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = Number(product.querySelector('.quantity input').value);

  let subTotal = price*quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let arrProducts = [...productSelection];
  let total = 0;
  arrProducts.forEach(product => {
    total += updateSubtotal(product);
  }) 
  console.log(total)
  
  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = total;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const childEliminate = target.parentNode.parentNode;
  const allEliminate = childEliminate.parentNode;
  
  allEliminate.removeChild(childEliminate);
}

// ITERATION 5

function createProduct() {
  let createBtn = document.getElementById('create')
  let createInputs = document.getElementsByClassName('.create product input').value;
  

  createBtn.addEventListener('click', createProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove")
  let arrButtons = [...removeButtons];
  arrButtons.forEach(el =>{
    el.addEventListener('click', removeProduct)
  })
  
});
