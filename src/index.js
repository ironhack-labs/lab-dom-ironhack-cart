// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // Get the DOM elements that hold the price and quantity
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  
 

  // Calculate the subtotal price
  let subtotal = price * quantity;

  // Get the DOM element that should hold the subtotal
   product.querySelector('.subtotal span').innerHTML=subtotal

  // Set the subtotal price to the corresponding DOM element

  // Return the value of the subtotal
  return subtotal;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
   
  
  let total = 0;
  let subtotal=document.querySelectorAll('.product')
   for (singleProduct of subtotal) total += updateSubtotal(singleProduct)
      
    
   

   document.querySelector('h2 span').innerText=total;
 
   


  // ITERATION 3
  //... your code goes here
  

  // Initialize total price variable
  

  // Loop through all the products and update their subtotals
  

  // Set the total price to the corresponding DOM element
  

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
  const productRow = target.parentNode.parentNode;
  const cartBody = productRow.parentNode;
  cartBody.removeChild(productRow);
  calculateAll();
}

const removeBtns = document.getElementsByClassName('btn-remove');
for (let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener('click', removeProduct);
}

// ITERATION 5

function createProduct(){
  const nameInput = document.getElementById("new-product-name");
  const priceInput = document.getElementById("new-product-price");
  const name = nameInput.value;
  //const price = parseFloat(priceInput.value);

  if (!name || isNaN(price)) {
    alert("Please enter a valid product name and price.");
    return;
  }
  

  calculateAll();


}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
});


