// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  let itemSubtotal = price * quantity
  let subtotalElement = product.querySelector('.subtotal span')
  subtotalElement.innerText = itemSubtotal
}


function calculateAll() {
 
  // ITERATION 2
 
  let totalPrice = 0;
  let productList = document.querySelectorAll(".product");
  for (let i=0; i < productList.length; i++){
    updateSubtotal(productList[i]);
  };


   // ITERATION 3
   totalPrice += product.querySelector('.quantity input').value * product.querySelector('.price span').innerText;
   let totalElement = document.querySelector('.subtotal span')
   totalElement.innerText = totalPrice;


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
