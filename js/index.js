// ITERATION 1

function updateSubtotal(product) {
  // get price, quantity
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  // Calculate new SubTotalPrice
  const newSubTotalPrice = price * quantity;

  // get the right element and assign its innertext to new price
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = newSubTotalPrice;
  
  console.log('Calculating subtotal, yey!');

  return newSubTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
   // get all product rows of the basket
   const products = document.querySelectorAll('.product');

   // loop over each product and update with function Subtotal (and update sum)
   let sum = 0;
   products.forEach(singleProduct => {
     sum += updateSubtotal(singleProduct);
   });
   
   // Get new price for totalPrice html document
   const totalPrice = document.querySelector("#total-value span");
   totalPrice.innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  // get target
  const target = event.currentTarget;
  // get closet row with product
  const clickedProduct = target.closest('.product');
  const parent = clickedProduct.parentNode;
  parent.removeChild(clickedProduct);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log('hello');

  const nameNewProduct = document.querySelectorAll('.create-product input')[0].value;
  const newUnitPrice = document.querySelectorAll('.create-product input')[1].value;
  console.log(nameNewProduct);
  console.log(newUnitPrice);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const allButtons = document.querySelectorAll('.btn.btn-remove');
  allButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      removeProduct(event);
    })
  })

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
