// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElm = product.querySelector('.price span')
  const quantityElm = product.querySelector('.quantity input')
  const subtotal = quantityElm.value * priceElm.innerHTML;
  const newSubtotal = product.querySelector('.subtotal span');

  newSubtotal.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product')
  
  // const productsArry = [...products];
  // console.log (productsArry)
  // productsArry.forEach (item => {
  //   updateSubtotal(item)
  // })

  let totalValue = 0;

  for(let v=0; v < products.length; v++){
    totalValue += updateSubtotal(products[v])
  }
  
  // for(product of products){
  //   value += updateSubtotal(product)
  // }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = totalValue;
}

// ITERATION 4



function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const parentEle = target.parentNode.parentNode;
  parentEle.parentNode.removeChild(parentEle);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach((button) => button.addEventListener('click', removeProduct)); 
  
});
