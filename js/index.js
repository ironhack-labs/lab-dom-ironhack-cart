// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML)
  console.log(price)

  const quantity = product.querySelector('.quantity input').valueAsNumber
  console.log(quantity)
  let total = price * quantity;

  const subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML = total;
  console.log(subtotal)
}
  // ITERATION 2
  //... your code goes here

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
 // updateSubtotal(.product, #cart )
  // end of test
const productsSale = document.getElementsByClassName("product")

const copyProductsSale = [...productsSale];
copyProductsSale.forEach(product => {
  updateSubtotal(product)
});



  // ITERATION 3

  const totalPrice = 
 document.querySelector("h2 span").innerHTML = totalPrice
console.log(totalPrice)
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
