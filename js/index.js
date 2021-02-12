// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
 const getPrice =product.querySelector('.price span');
 const price = getPrice.textContent;

  const getQuantity =product.querySelector(".quantity input");
  const quantity = getQuantity.value;



product.querySelector('.subtotal span').innerText = `${price*quantity}`;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
   // it runs when only iteration 1 is completed. at later point, it can be removed.
 const allProducts= document.querySelectorAll('.product');

 allProducts.forEach((product) => {
   console.log(product);
  updateSubtotal(product);
 });

  // ITERATION 3
 const total = document.querySelector('#total-value span');

const getSumArray = document.getElementsByClassName('sumSubtotal');


for(let i =0; i< getSumArray.length; i++){
// console.log(getSumArray[i].textContent);
 let sum = getSumArray[i]
 console.log(sum);

}
// getSumArray.reduce((acc, currentProduct) => {
//  acc + currentProduct.
// });
// console.log(getSumArray );
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
  console.log("some_event triggered");
  //... your code goes here
});
