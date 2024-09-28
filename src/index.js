// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
    console.log("Price: " + price);
    console.log("Quantity: " + quantity);
   let subTotalCalc = price * quantity;
   // Get the element with class "subtotal"
const subtotalElement = product.querySelector('.subtotal');

// Set the text content of the span element inside the subtotal element to the value of the subTotalCalc variable
subtotalElement.querySelector('span').textContent = subTotalCalc;

      
return subTotalCalc;
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

  const productRows = document.querySelectorAll('.product');
  let sum = 0;

  productRows.forEach((productRow) => 
    {
      sum = sum + updateSubtotal(productRow);
    });
 
  // ITERATION 3
  //... your code goes here
 
  console.log("Sum: " + sum);
  let totalPriceField = document.getElementById("total-value");
  totalPriceField.querySelector('span').textContent = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode;
  productRow.remove();
}

// ITERATION 5

function createProduct(name, price) {
  //... your code goes here
 

  console.log("Product Name: " + name);
  console.log("Price: " + price)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  const removeButtons = document.querySelectorAll('.btn-remove');
  
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);

    var productName = (document.querySelectorAll('.create-product td input').innerText);
    const unitPrice = parseInt(document.querySelectorAll('.create-product td td input').value);

  
    createProduct(productName, unitPrice);

    const createBtn = document.getElementById('create');
    createBtn.addEventListener('click', createProduct);
  });
  });
  

