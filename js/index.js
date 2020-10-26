// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //alert("Calculate Prices clicked!")

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const subtotalPrice = price * quantity;
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');

   // ITERATION 2
   const products = document.getElementsByClassName('product');
    
   let subTotal =0;
 
   for (let i = 0; i < products.length; i++) {
     const element = products[i];
     subTotal += updateSubtotal(element);
   }
   // ITERATION 3
 
   let totalValue= subTotal
   document.querySelector('#total-value span').innerHTML= totalValue
 
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
