// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = price * quantity
  return Number(subtotal.innerText)

}

function calculateAll() {
  let products = document.querySelectorAll('.product');

  //console.log(products)

  let totalSum = 0;
  
   products.forEach(function(product){
      totalSum += updateSubtotal(product);
      console.log(totalSum)
  })
  

   document.querySelector('#total-value > span').innerText = totalSum

  

  

  
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
  
  let products = document.querySelectorAll('.product');
  for (i = 0; i < products.length; i++) {
    const removeBtn = document.querySelectorAll('.btn-remove')[i];
    removeBtn.addEventListener('click', removeProduct);
    console.log(products)
  }
  
});
