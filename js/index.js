// ITERATION 1
function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  let subtotalPriceDom = product.querySelector('.subtotal span')
  let subTotalPrice = price * quantity;
  subtotalPriceDom.innerHTML = subTotalPrice;
  return subTotalPrice;
}


function calculateAll() { 
  // ITERATION 2
  let totalValue = 0;
  let allProductDom = document.querySelectorAll('.product');
  let totalValueDom = document.querySelector('#total-value span');
  
  // ITERATION 3
  allProductDom.forEach((elem) =>{
    updateSubtotal(elem);
    totalValue = totalValue + updateSubtotal(elem)
  })
  return totalValueDom.innerHTML = totalValue;
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let product = target.parentNode.parentNode;
  let table = document.querySelector('#cart tbody')
  table.removeChild(product)
  calculateAll()
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductButton = document.querySelectorAll('.btn-remove')
  removeProductButton.forEach((e) => e.addEventListener('click', removeProduct));
// console.log(removeProductButton)
  //... your code goes here
});

