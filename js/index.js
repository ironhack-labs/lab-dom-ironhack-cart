// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal
}

  
  // ITERATION 2
function calculateAll() {
  let subTotals = 0
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(element => {
    subTotals += updateSubtotal(element)
  });
  
  // ITERATION 3
  const priceTotal = document.querySelector('#total-value span')
  priceTotal.innerHTML = subTotals
  return subTotals
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  let product = target.parentNode.parentNode;
  let parent = document.querySelector("tbody")
  parent.removeChild(product)
  
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtns = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < removeBtns.length; i++){
    removeBtns[i].addEventListener('click', removeProduct)
  }
});


