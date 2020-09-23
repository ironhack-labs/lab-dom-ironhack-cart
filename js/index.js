// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerText; 
  let quantity = product.querySelector('.quantity input').value; 

  console.log(quantity)
  // let priceStr = price
  // let quantityStr = quantity.

  let calculateSubTotal = price * quantity
  // console.log(calculateSubTotal)

  let subTotal = product.querySelector(".subtotal span")
  // console.log(subTotal)
  subTotal.innerHTML = calculateSubTotal //add .innerText here and remove it from line 16 if it does not work
  // console.log(subTotal)
  // console.log(calculateSubTotal)
  return calculateSubTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
//   // end of test

//   // ITERATION 2
  let allProducts = document.querySelectorAll(".product")
  // console.log(allProducts)
  let mySum = 0; //did that thanks to Sandra's Explaination
  allProducts.forEach((elem) => {
    //did that thanks to Sandra's Explaination
    mySum += updateSubtotal(elem)
    // console.log(updateSubtotal(elem))
  })



// //   // ITERATION 3
  let totalPrice = document.querySelector("#total-value span")
  console.log(totalPrice)
  // let mySubTotal = document.querySelector(".subtotal span")
  totalPrice.innerText = mySum
}

// // ITERATION 4

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
