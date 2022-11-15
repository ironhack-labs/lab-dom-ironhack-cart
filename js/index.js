// ITERATION 1

//const { ConsoleMessage } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let priceSpan = product.querySelector('.price span');
  let price = priceSpan.innerHTML;
  let quantityInput = product.querySelector('.quantity input');
  let quantity = quantityInput.value;
  let subtotal = product.querySelector('.subtotal span');
  
  let totalPriceByArticle = quantity * price;
  subtotal.innerHTML = totalPriceByArticle;
  
  return totalPriceByArticle;

}


function calculateAll() {

  const allProducts = document.getElementsByClassName('product');
  // ITERATION 2
  let values = [];
  for (product of allProducts ){
    
    
      values.push(updateSubtotal(product));
    
    
    console.log(values)
  }
  

  // ITERATION 3
  let total = document.querySelector('#total-value span');
  let acc = 0;
  for(element of values){
    acc += element;
  }
  
  
  total.innerHTML = acc ;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let dlt = target.parentNode.parentNode;
  
  if(dlt.parentNode){
    dlt.parentNode.removeChild(dlt);
    
  }
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtns = document.querySelectorAll('.btn.btn-remove');

  for(btn of removeBtns){

    btn.addEventListener('click', removeProduct);
  }
});
