// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  let price = product.querySelector('.price span').innerText; //The innerText property sets or returns the text content of the specified node
  let quantity = product.querySelector ('.quantity input').value; //The value property sets or returns the value of the value attribute of a text field. I need it to give me back numbers and not Naan.
  let subtotalPrice = price * quantity; //The subtotal price will be the result of the multiplication of those values.
  let subtotal = product.querySelector('.subtotal span');
    subtotal.innerHTML = subtotalPrice;  //With this I calculate the subtotal of a product

    return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 // Start with getting the DOM nodes for each product row. -> Maybe using getElementsByClassName could serve well here.
  let sum = 0;
  let theProducts = document.getElementsByClassName('product');
  for (i = 0; i < theProducts.length; i++) {
    let num = updateSubtotal(theProducts[i]);
    sum += Number(num); 
  }
     // ITERATION 3 // Total
  let calculatePrice = document.querySelector('#total-value span'); //making the pricing button work
  calculatePrice.textContent = sum; //Without this part it worked by summing up product by product, but it did not calculate the total price. 
}


// ITERATION 4 //  it doesn't work, it's missing things/pending to find solution

function removeProduct(event){
  let productToRemove = document.getElementById(event);
  productToRemove.parentNode.removeChild(productToRemove);
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
