// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input")
  let priceText = price.innerText;
  let quantityText = quantity.value
  let result = priceText * quantityText
  let subtotal = product.querySelector(".subtotal span")
   return subtotal.innerText = result
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  let calculatePrice = 0
  let allProducts = document.querySelectorAll(".product")
  allProducts.forEach((eachProduct) => {
  calculatePrice += updateSubtotal(eachProduct)
  })
  let totalPrice = document.querySelector("#total-value span")
  totalPrice.innerText = calculatePrice
  
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons = document.querySelectorAll("btn btn-remove")
  removeButtons.addEventListener("click", removeProduct())


  //... your code goes here
});
