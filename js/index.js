// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerHTML; // store unit price €25 in new variable
  const quantity = product.querySelector('.quantity input').value; // store amount of products in new variable
  const sumSubTotal = price * quantity; // store sum of multiplication
  
  const subTotalPrice = product.querySelector('.subtotal span'); // store subtotal in new variable 
  subTotalPrice.innerHTML = sumSubTotal; // set the innerHTML of the span inside class subtitle to the total of sum  

  return sumSubTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('tr.product'); // store NodeList of products in new variable 

  let sumProductsPrices = 0; // create variable to store sum of all product prices

  products.forEach(product => {
    sumProductsPrices += updateSubtotal(product); // loop over products and add each price to total sum
  });


  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span'); // create new variable to output total sum inside the span of id total-value
  totalPrice.innerHTML = sumProductsPrices; // set innnerHTML to the result of total sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentElement.parentElement.parentElement // td => tr => tbody (parent of every product element)
        .removeChild(target.parentElement.parentElement); // td => tr (product element that has to be removed)  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(btn => {
    btn.addEventListener('click', removeProduct);
  })
});
