// ITERATION 1

function updateSubtotal(product) {
  
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = (price * quantity)
  return (product.querySelector('.subtotal span').innerText = subtotal);
  console.log(subtotal);

  //... your code goes here
}

// generic query selector "." = class "# = id"
// get elements by class name no .

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct); // This needs to happen for every product. Loop through every single line, and then update the final cost with calculate price. 
  //
  
  // end of test

  // ITERATION 2
  function calculateAll() {
    let allProducts = document.getElementsByClassName('product');
    // in for objects, of for arrays
    for (let product of allProducts) {
      updateSubtotal(product)
     }

  // ITERATION 3
  let total = 0;
    for (product of allProducts) {
      total += updateSubtotal(product); }
      
      return (document.querySelector('#total-value span').innerText = total);
    
    console.log(total)
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
