// ITERATION 1

function updateSubtotal(product) {

  let price, quantity, subtotal;
  price = product.querySelector('.price span').innerText;
  quantity = product.querySelector('.quantity input').value;
  subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;

  return subtotal;
};



function calculateAll() {

  // ITERATION 2
  // let products = [...document.querySelectorAll('.product')];
  // products.forEach((product) => updateSubtotal(product))

  // ITERATION 3
  let products, total, totalDOM;
  
  products = Array.from(document.querySelectorAll('.product'));
  totalDOM = document.querySelector('#total-value > span');
  total = 0;

  products.forEach((product) => total+=updateSubtotal(product));
  totalDOM.innerHTML = total; 
};


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode.parentNode;
  parent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ITERATION 4
  const removeProductBtn = [...document.getElementsByClassName('btn-remove')];
  removeProductBtn.forEach(function(btn){btn.addEventListener('click', removeProduct)})


  //... your code goes here
});
