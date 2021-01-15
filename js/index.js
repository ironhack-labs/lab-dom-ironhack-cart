// ITERATION 1

// function updateSubtotal(product) {
//   console.log('Calculating subtotal, yey!');

//   //... your code goes here
// }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

//   // ITERATION 2
//   //... your code goes here

//   // ITERATION 3
//   //... your code goes here
// }

// // ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });



// create a function that calculates the item * quantity 
//place it in subtotal field


document.querySelector('#calculate').onclick = function(){}

let allProducts = document.querySelectorAll('.product')
let total = 0

for (let i = 0; i< allProducts.length; i++){
  let product = allProducts[i]
    console.log(eachProduct)
    let price = eachProduct.querySelector('.price span').innerHTML
    let value =eachProduct.querySelector('.quantity input').value


    let subTotal = price * value
    console.log(price)


    eachProduct.querySelector('subtotal span').innerHTML = subTotal

    total += subTotal
    debugger
    
}
eachProduct.querySelector('#total-value').innerHTML

}

document.querySelectorAll




























