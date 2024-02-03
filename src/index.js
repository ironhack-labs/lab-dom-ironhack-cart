// ITERATION 1

function updateSubtotal(product) {
  
  // define a price variable that stores the text content of the <span> tag inside the price class of each product
  const price = product.querySelector('.price span').textContent;
  // define a quantity variable that stores the value of the <input> tag inside the quantity class for each product
  const quantity = product.querySelector('.quantity input').value;
  // Define a subtotal variable that calculates the subtotal by multiplying the price by the quantity
  const subtotal = price * quantity
  // Write the subtotal inside <span> tag of the subtotal class for the product
  product.querySelector('.subtotal span').innerHTML = subtotal
  // return subtotal
  return subtotal
}

function calculateAll() {

// ITERATION 2

// Leaving empty because the ITERATION 1 already does the job of calculating the subtotal for all

// ITERATION 3

// Create a variable to store the content of products that are found inside the document using the class .product 
const product = document.querySelectorAll(".product")
// Define a total variable to store total and set it to 0
let total = 0
// Create a loop that goes through each occurrence of the previous product variable
for (let i = 0; i < product.length; i++) {
  let singleProduct = product[i]
// Calculate total by summing all the subtotals obtained with the for loop and calling the function that calculates the subtotal
  total = total + updateSubtotal(singleProduct)
}
// Create variable that retrieves the <span> tag where the total is hosted
const totalCart = document.querySelector('#total-value span')
// Write the total amount as innerHTML of the <span> retrieved one line above
totalCart.innerHTML = total
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
