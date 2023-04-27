// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotalText = product.querySelector('.subtotal span');
  subtotal = price * quantity;
 
  subtotalText.innerText = subtotal;
  product.querySelector(".subtotal span").innerText = parseFloat(subtotal).toFixed(2);

  return subtotal;
  
}

function calculateAll() {
  let products = document.querySelectorAll('.product');

  let allProducts = 0;
   products.forEach(myProducts => {
    allProducts += updateSubtotal(myProducts);
  });
  
  let total = document.querySelectorAll('#total-value span');

  let sumOfAllProducts = 0;
   for(let i = 0; products.length > 0; i++){
    sumOfAllProducts += updateSubtotal;
   }

  console.log(sumOfAllProducts);

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
