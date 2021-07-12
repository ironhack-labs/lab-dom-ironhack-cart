// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //create variables and get DOM elements. --> extract specific values and
  // use it to calculate subtotal price (in its dedicated variable line item
    const price = product.querySelector(".price span").innerText;
    const quantity = product.querySelector(".quantity input").value;
  // this is where the subtotal price (price * qty result) should reflect; within the subtotal class span
    const subTotal = product.querySelector(".subtotal span")
    subTotal.innerText = price * quantity;
    return Number(subTotal.innerText)
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here
 let cart = document.querySelector('table#cart');
let cartProducts = cart.querySelectorAll('tr.product');
let total = 0;
cartProducts.forEach((product) => {
  total += updateSubtotal(product);
  
});
  
document.querySelector('#total-value span').innerText = total;


  // ITERATION 3
  //... your code goes here
   let products = document.getElementsByClassName('product');
  let totalPrice = 0;

  for (let i=0; i < products.length; i++) {
    // sum of all the subtotals from updateSubtotal 
    totalPrice += updateSubtotal(products[i]);
  }
}

// ITERATION 4


  //... your code goes here
  function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let fullProduct = target.parentNode.parentNode
  fullProduct.remove()
  calculateAll()
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
