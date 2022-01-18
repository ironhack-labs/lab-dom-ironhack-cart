// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subTotalPrice = priceValue * quantityValue;
  const subTotal = product.querySelector('.subtotal span');
  const subTotalCalc = (subTotal.innerHTML = subTotalPrice);

  return subTotalPrice;
}

function calculateAll() {
  let productValue = document.querySelectorAll('.product');
  productValue = [...productValue];

  let totalValue = 0;
  productValue.forEach((element) => {
    updateSubtotal(element);
    totalValue += updateSubtotal(element);
  });
  
  let totalEl = document.querySelector('#total-value span');
  totalEl.innerText = totalValue;
  /*
  const productValue = document.getElementsByClassName('product');
  for (let i = 0; i < productValue.length; i++){
    updateSubtotal(productValue[i]);
    updateSubtotal()
    }*/
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
