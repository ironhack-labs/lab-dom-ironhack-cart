// ITERATION 1

function updateSubtotal(product) {
  // product: <tr>

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML; // "25.00"
  const quantity = product.querySelector('.quantity input').value; // "3"
  let total = Number(price*quantity);
  console.log("total=", total)

  product.querySelector('.subtotal span').innerHTML = total;
   //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
let allProd = document.getElementsByClassName("product");
/*console.log(allP);*/
for(let i = 0; i < allProd.length; i++){
  updateSubtotal(allProd[i]);
}
  // ITERATION 3
  //... your code goes here

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
