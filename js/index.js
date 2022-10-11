// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const newPrice = price.innerHTML; 
    const newQuantity = quantity.value  // it is also possible to erase this line and recall it in line 5 as .value;
  
    let calculate = newPrice * newQuantity
    let subtotal = product.querySelector('.subtotal span');
    
    subtotal.innerHTML = calculate;
    return calculate;
    }

  console.log('Calculating subtotal, yey!');
 
  // ITERATION 2

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const allProducts = document.getElementsByClassName('product'); 
    let sum = 0
    for (let i = 0; i < allProducts.length; i++) {
      sum += updateSubtotal(allProducts[i]); 
    }

  // ITERATION 3
    let prTotal = document.querySelector('#total-value span')
    prTotal.innerHTML = sum;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
// window.addEventListener('load', () => {
//     const removeProduct = document.getElementById('remove');
//     removeProduct.addEventListener('click', removeAll);
// });
 }
  //... your code goes here
