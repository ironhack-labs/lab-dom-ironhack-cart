// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span'); // selecting HTML item for price
  const quantity = product.querySelector('.quantity input'); // selecting HTML item for quantity
  const valuePrice = price.innerHTML; // retrieving info about what is the actual price
  const valueQuantity = quantity.value; // retrieving info about what is the quantity entered in the form

  const subtotal = valuePrice * valueQuantity; // Perform a basic multiplication to obtain the subtotal
  const subtotalElement = product.querySelector('.subtotal span'); // Select the element where you want to display the subtotal
  subtotalElement.textContent = subtotal; // Assign the calculated subtotal to the inner HTML of that element
  console.log(subtotal); // You can log or use the subtotal value as needed
}


 // ITERATION 2 &  ITERATION 3

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //  const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

 
  const productRows = document.querySelectorAll('.product')
  let total = 0;   // Initialize a variable to hold the total price

  for (let i = 0; i < productRows.length; i++) { // for every product row..
    const subtotalElement = productRows[i].querySelector('.subtotal span'); // retrieve the subtotal value of the current product row
    total += parseFloat(subtotalElement.textContent); // Convert the subtotal text content to a number and add it to the running tota
  updateSubtotal(productRows[i]);
  }
  const totalValueElement = document.getElementById('total-value'); // Select the element with the ID 'total-value' where we want to display the total
  totalValueElement.querySelector('span').textContent = total.toFixed(2); // Assign the calculated total to the text content of the total value elemen
 // totalValueElement.textContent = total;   // Assign the calculated total to the text content of the total value element
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
