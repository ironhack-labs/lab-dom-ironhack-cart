function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity=product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span');
  let priceValue=price.innerHTML;
  let quantityValue=quantity.value;
  let subTotalValue=priceValue*quantityValue;
  subtotal.innerHTML=subTotalValue;
  return subTotalValue;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let totalValue=0;
  for(let i=0; i<products.length; i++){
    totalValue+=updateSubtotal(products[i]);
  }
  const total=document.querySelector('#total-value span');
  total.innerHTML=totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let tbody=document.querySelector("tbody");
  tbody.removeChild(target.parentElement.parentElement)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i=0; i<removeButtons.length;i++){
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
