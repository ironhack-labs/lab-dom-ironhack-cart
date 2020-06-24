// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotalTotal = price * quantity ;
  const subtotal = (product.querySelector(`.subtotal span`).innerHTML = subtotalTotal);
  return subtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  // ITERATION 2
  const allProd = document.querySelectorAll('.product');
  allProd.forEach((product)=>{
    updateSubtotal(product);
  })

  // ITERATION 3
  const totalAmount = [...allProd].reduce((accum, val) => {
    return accum + updateSubtotal(val)},0);
    const total = document.querySelector(`#total-value span`);
    total.innerHTML = totalAmount;
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
