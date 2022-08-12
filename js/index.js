// ITERATION 1
 function updateSubtotal(product) {
   console.log('Calculating subtotal, yey!');

   const price = product.querySelector('.price span').innerHTML; // STEPS 1 & 2
   const quantity = product.querySelector('.quantity input').value;

   const subTotal = price * quantity; // STEP 3

   const subTotalElement = product.querySelector('.subtotal span');;
   subTotalElement.innerText = subTotal; // STEP4

   return subTotal;  // STEP 5
 }

function calculateAll() {
  // ITERATION 2
  const productList = document.querySelectorAll('.product');   // get every tr.product
  let totalPrice = 0;
    productList.forEach(function (singleProduct) {             //  call the function updateSubtotal with every tr.product DOM node
    const subtotal = updateSubtotal(singleProduct);
    totalPrice += subtotal;
 });

// // ITERATION 3 Total
const totalPriceElement = document.querySelector("#total-value span");   // Get DOM element that holds the cart total value 
totalPriceElement.textContent = totalPrice; // Update the DOM element (Using the total value you just calculated)


}

// ITERATION 4 Removing a product

function removeProduct(event) {
  const removeButton = event.currentTarget;                         // 4.save remove button (target) in a variable
  removeButton.parentNode.parentNode.remove();                      // 5.access its parent node (product row of the table) and delete it
  calculateAll();                                                   // 6.recalculate the totals                       
    
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");         // 1.start with querying the document for all "Remove" buttons
    for (let i = 0; i <= removeButtons.length; i++) {                     // 2.loop through them
      removeButtons[i].addEventListener('click', removeProduct);          // 3.add a click event listener to each, passing a named function as the callback argument
                                                                             
    }
  });
