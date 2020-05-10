// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseInt(product.querySelector('.price span').innerText);
  var quantity = parseInt(product.querySelector('.quantity input').value); 

  let subTotalPrice = price * quantity;
  //subTotalPrice = product.querySelector('.subtotal span').innerText
  product.querySelector('.subtotal span').innerText = subTotalPrice;
  return subTotalPrice;
  //... your code goes here
  //get the multiplication
  //assign at span
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let sum = 0;
 var element = document.getElementsByClassName("product")
for (var i = 0; i < element.length; i++ ){
let sumSubtotal = parseInt(updateSubtotal(element[i]));
sum += sumSubtotal;
}
document.querySelector("#total-value span").innerText = sum;
//return sumSubtotal;
  // ITERATION 3
  //... your code goes here
}
// ITERATION 4
function removeProduct(event) {
const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  //const parentTd = target.parentNode; //td
  //const parentTr = parentTr.parentNode; //delete this tr
   const deleteTd = document.querySelectorAll(".product")
   const deleteTr = document.querySelector('.action')
   deleteTr.removeChild(event.currentTarget)
   // Remove 1 of the elements you just created. Remember the 3 steps involved:
  // Select the parent of the element you want to remove
  //Select the element you want to remove
 // Call removeChild upon the parent element and pass the child you want to remove to it
}
// ITERATION 5
function createProduct() {
  //... your code goes here


}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');

  //you are getting a list of remove buttons  in array
  const removeButtons = document.getElementsByClassName('btn btn-remove')
  calculatePricesBtn.addEventListener('click', calculateAll);
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  //... your code goes here
  }
})
