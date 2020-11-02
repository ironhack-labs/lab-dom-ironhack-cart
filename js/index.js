// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price= product.querySelector(`.price span`).innerHTML;
const quantity= product.querySelector(`.quantity input`).value;
const subtotalPrice= price * quantity;
const subtotal= product.querySelector(`.subtotal span`);
subtotal.innerHTML=subtotalPrice;
console.log({price: typeof price, qty: typeof quantity});
return subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products= document.querySelectorAll (`.product`);

  // ITERATION 3
 let sum= 0;
 products.forEach(singleProduct => {
  sum += updateSubtotal(singleProduct); 
 })
 
const totalPrice = document.querySelector(`#total-value`);
console.log({totalPrice, sum});
totalPrice.children[0].innerText = sum;
}
// ITERATION 4
window.addEventListener('load', ()=> {
  addReomveToButtons();

});
function addReomveToButtons () {
  const removeBtn = document.querySelectorAll( '.btn-remove');
  removeBtn.forEach((el)=> el.addEventListener('click', () => removeProduct(el)));
}
function removeProduct(event) {
console.log(event.parentNode)
event.parentNode.parentNode.remove();
}
  //... your code goes here
//}

// ITERATION 5

function createProduct() {

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
