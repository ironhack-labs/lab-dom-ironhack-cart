// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
   //... your code goes here
  
   const price = product.querySelector('.price span').innerHTML
   const quantity = product.querySelector('.quantity input').value
   let subtotalPrice= price * quantity
   console.log(subtotalPrice)
   product.querySelector('.subtotal span').innerHTML = subtotalPrice
   return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product')
  let productsSubtotalPrice = 0
  products.forEach(function (elm) {
    productsSubtotalPrice += updateSubtotal(elm)
  });
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML =productsSubtotalPrice
}

// BONUS  ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  function createProduct() {
    //... your code goes here
    // Create New Row and Fields
    const newRow = document.querySelector('.product').cloneNode(true)
    const NewProductName= document.querySelector('.create-product td input').value 
    const newPrice= document.querySelector('.price-new-product input').value
    // Fill them
    document.querySelector('.name span').innerText = newProductName
    document.querySelector('.price span').innerText= newPrice
  
    const button = document.querySelector('.action .btn').cloneNode(false)
    button.addEventListener('click', removeProduct)
    //Add new Row to the table body and Event Listener
    document.querySelector('tbody').appendChild(newRow)
  }

createProduct();
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
