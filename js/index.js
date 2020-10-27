// ITERATION 1

function updateSubtotal(product) {
    const priceSpan = product.querySelector('.price span');
    const quantityInput = product.querySelector('.quantity input')
    const price = priceSpan.innerHTML;
    const quantity = quantityInput.value
    // console.log(quantity);
    const subtotal = price * quantity;
    const subtotalSpan = product.querySelector('.subtotal span');
    subtotalSpan.innerHTML = subtotal;
   // console.log(subtotal);
  console.log('Calculating subtotal, yey!');
  return subtotal;

  //... your code goes here
}
// we want to put all the product into an array and then with a for each call the update submethod.
function calculateAll() {
  const allProduct = document.querySelectorAll('.product');
  console.log(allProduct);
  
  let total = 0;

  allProduct.forEach(function(product){
    let subtotal = updateSubtotal(product);
    total += subtotal
  }) 
console.log(total);
const newTotal = document.querySelector('#total-value span')
newTotal.innerHTML = total;



  } 
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

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
