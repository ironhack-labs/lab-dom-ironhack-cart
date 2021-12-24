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
  let totalValue = 0;
  let allProductDom = document.querySelectorAll('.product');
  let totalValueDom = document.querySelector('#total-value span');
  
  allProductDom.forEach((elem) =>{
    updateSubtotal(elem);
    totalValue = totalValue + updateSubtotal(elem)
  })
  return totalValueDom.innerHTML = totalValue;
}



  // ITERATION 3
  //... your code goes here


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

