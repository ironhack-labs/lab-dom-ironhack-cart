// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1 Get DOM elements that hold price and quantity.
  let price = product.querySelector(".price span")
  // Step 2 Get value of price.
  price = price.innerHTML

  let quantity = product.querySelector(".quantity input").value

  //Step 3 Save subtotal to variable.
  const subtotal = (quantity*price);

  //Step 4 Get DOM element for class 'subtotal'
  let sub = product.querySelector('.subtotal span');

  //Step 5 Set subtotal price to the corresponding DOM element.
  sub.innerHTML = subtotal;

  //Return value of subtotal
  return subtotal
}


//this function fires with calculateButton Click.
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.getElementsByClassName("product");
  // console.log(allProducts)


  //sum iterations of updateSubtotal
  let subTotalsum = 0;

  for(i=0;i<allProducts.length;i++){
    updateSubtotal(allProducts[i])
    subTotalsum += updateSubtotal(allProducts[i])
  }

  
  // ITERATION 3
//display subTotalsum on the DOM.
document.querySelector("h2 span").innerHTML = subTotalsum





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
