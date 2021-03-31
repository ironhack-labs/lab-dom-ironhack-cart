// ITERATION 1
// Step 1: Inside updateSubtotal(), create two variables (we suggest naming them price and quantity) and use
// your just gained DOM manipulation skills to GET DOM elements that hold price and quantity. To give you
// a head start, you could use the following code to get the DOM element holding the price:
// Step 2: Now, when you got the above mentioned DOM elements, your next step should be extracting the specific
// values from them. Hint: maybe innerHTML rings the bell? In case you are curious to find other ways to achieve
// the same result, you can start with checking textContent and innerText on Google. However, don't get distracted
// here, let this be your additional reading when you complete the lab.
// Step 3: Use the values you extracted from the above mentioned DOM elements to calculate the subtotal price.
// You can create a new variable, and its value will be equal to the product of these values. Ex. If a user
// picked 3 Ironhack Rubber Ducks, they should see that the subtotal is 75 dollars ($25 * 3 = $75).
// Step 4: Now, when you are becoming DOM manipulation ninja, use your skills once again to get the DOM element
// that should hold the subtotal. Hint: it is the element with the class subtotal.
// Step 5: In step 3, you calculated the subtotal price, and in step 4, you got the DOM element that should have
// displaying this price. In this step, your goal is to set the subtotal price to the corresponding DOM element.
// Also, make sure this function returns the value of subtotal so you can use it later when needed.
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = Number(document.querySelector('.price span').innerText);
  let quantity = document.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}
// ITERATION 2
// Our current code works perfectly for one product, but we expect to have more than one product on our
// cart. As such, we will use calculateAll to trigger the update of subtotals for every product.
// Complete the function named calculateAll(). Its purpose is to call the function updateSubtotal with
// every tr.product DOM node in the table#cart.
// To start, remove or comment out the existing code inside the calculateAll() (the code we used for the
// testing purposes). Also, let's add a new product to our index.html file. Duplicate the tr with the
// class product, rename the product inside, and change the product price.
function calculateAll() {
  
  const products = document.querySelectorAll('.product');
  console.log(products);
  let totalVar = 0;
  for (let i=0; i<products.length; i++){
    totalVar += updateSubtotal(products[i]);
  }
  document.querySelector('#total-value span').innerText = totalVar;
}
// ITERATION 3
// Our calculation functionality is still incomplete. The subtotal for each product is being updated, but
// the total value remains untouched.
// At the end of the calculateAll() function, reuse the total value you just calculated in the previous
// iteration and update the corresponding DOM element. Calculate the total price for the products in
// your cart by summing all of the subtotals returned by updateSubtotal() when it was called with each product.
// Lastly, display that value on your DOM.
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