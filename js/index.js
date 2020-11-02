const cl = (...p) => console.log(...p)
// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input'); 
  let subTotal = product.querySelector('.subtotal span');
  let amtPrice = price.innerHTML;  
  let amtQuantity = quantity.value;
  let total = Number(amtPrice) * Number(amtQuantity);
  let updateSub = subTotal.innerHTML = total;
  return updateSub;
}

function calculateAll() {
 
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
  // ITERATION 2
  //... your code goes here
  const productColl = document.getElementsByClassName('product');
  let productArr = [...productColl]
  let subTs = productArr.map(e => updateSubtotal(e))
  cl(subTs)  // returns array of amounts:
  // >index.js:1 (2) [50, 37.5]
  // 0: 50
  // 1: 37.5
  // length: 2
  //__proto__: Array(0)
//* use subT for iteration 3 will have to use .reduce?
  // ITERATION 3
  let totals = subTs.reduce((acc, num)=> acc + num ,0);
  const totalAmt = document.querySelector('#total-value span');
  let updateTot = totalAmt.innerHTML = totals;
cl(updateTot)
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
