// ITERATION 1




function updateSubtotal(product) {
console.log('Calculating subtotal, yey!');

const price = product.querySelector('.price span').innerHTML;
console.log(price)

const quantity = product.querySelector('.quantity input').value;
console.log(quantity);

let total = quantity*price
console.log(total)

let subtotal = product.querySelector('.subtotal span');

subtotal.innerHTML = total;

console.log(subtotal)

}

//const productOfValues = product.querySelector('total');

// .subtotal should hold the "total" price

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/

  // end of test

  // ITERATION 2
  
  function calculateAll() {
/* 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); 
 */
  
  const products = document.getElementsByClassName('product');

  console.log('products', products);
    
  for (product of products) {
  updateSubtotal(product); }

// ITERATION 3
 
// summing all the prices returned by updateSubtotal;

let totalValue = 0 ;

for (product of products) {
  totalValue += Number(product.querySelector('.subtotal span').innerHTML) ;
  console.log('CURRY', Number(product.querySelector('.subtotal span').innerHTML))
};


console.log('totalValue', totalValue );

const totale = document.querySelector('#total-value span');

totale.innerHTML = totalValue;

}



// ITERATION 4

/*function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}*/

let allButtons = document.querySelectorAll('.btn btn-remove');

allButtons.addEventListener('click', function(event) {
event.preventDefault();

let choice = confirm("sure u want to delete?");
if (choice) {
return true;


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
