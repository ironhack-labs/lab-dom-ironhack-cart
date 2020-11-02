const cl = (...p) => console.log(...p)

const aProduct = document.querySelector('.product')
// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalAmt = product.querySelector('.subtotal span');
  let subtotal = price * quantity;
  
  return subtotalAmt.innerHTML = subtotal;
}

// ITERATION 2,3,4
function calculateAll() { 
  const productColl = document.getElementsByClassName('product');
  let productArr = [...productColl]
  const totalAmt = document.querySelector('#total-value span');
  let subTotals = productArr.map(e => updateSubtotal(e))
  let total = subTotals.reduce((acc, num)=> acc + num ,0);
  
  return totalAmt.innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = this.parentNode.parentNode
  row.remove()
  row.value = 0
  calculateAll()
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removePricesBtn = document.getElementsByClassName('btn-remove');
  for(i = 0; i < removePricesBtn.length; i++){
    removePricesBtn[i].addEventListener('click', removeProduct);
  }

});





// // ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
