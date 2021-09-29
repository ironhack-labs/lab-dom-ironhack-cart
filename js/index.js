// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //reading the information from the HTML
  const priceElm = product.querySelector('.price span'); //we will search it in the product class
  const quantityElm = product.querySelector('.quantity input'); //the span in the class price
  const subtotalElm = product.querySelector('.subtotal span'); 

  //Doing the calculations
  const price = parseFloat(priceElm.innerHTML); //get only the value
  const quantity = parseFloat(quantityElm.value) // transform it into a number
  const subtotal = price * quantity;
  console.log (subtotal)

  //update dom
  subtotalElm.innerHTML = subtotal; //to assign that element to the value
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed
  let totalPrice = 0;
  const singleProduct = document.querySelector('.product'); //qs gives me the first element
  updateSubtotal(singleProduct); //the span in the class price

  // to do search inside the product
  // ITERATION 2
  // create a list, iterate through the list, iterate
  const productList = document.querySelectorAll(".product")
  productList.forEach(function (element){
    const subtotalForThisProduct = updateSubtotal(element);
    totalPrice = totalPrice + subtotalForThisProduct;
  })
  console.log (totalPrice);
  // ITERATION 3
  //... your code goes here
  const totalElm = document.querySelector('#total-value span'); //We need the hashtag to access the id
  totalElm.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //...whenever there is a click event do something. the name of the functioncalls the functionction with paraentesis represents th result of the fucntion
});
