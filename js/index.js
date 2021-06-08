// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  //console.log(price);
  const subPrice = price * quantity;
  product.querySelector('.subtotal span').innerText =`${subPrice}`;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  //console.log(allProducts);
  //problem: you are getting an html collection here
[...allProducts].map((each) => {
  updateSubtotal(each)
});
  // ITERATION 3
  //... your code goes here
  //step 1: calculate the total price by summing the subtotals
  const subtotals = document.querySelectorAll('.subtotal span');

  //console.log(subtotals);
  let total = 0;
  subtotals.forEach(function (span) {
    total += Number(span.innerHTML)
  });
  //console.log(total)
  //let total = subtotals.reduce(function (acc, val) {
    //return acc + val
  //}, 0);
  //step 2: return the total in the texts
  document.querySelector('#total-value span').innerText =`${total}`;

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
