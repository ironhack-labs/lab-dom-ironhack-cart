// ITERATION 1

function updateSubtotal(product) {
  //step 1
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    console.log('Calculating subtotal, yey!')
  //step 2
    // const price1 = price.innerHTML     // we are not assigning these 2 values (doesn't work!)
    // const quantity1 = quantity.value   //not innerHTML bc it's the input! 
  //step 3
  let subtotalPrice = price.innerHTML * quantity.value   // we use .value here bc it's a self-closing tag (eg: <input>, <select>, )
// step 4
let subtotal = product.querySelector (".subtotal span")
//step 5
return subtotal.innerHTML = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

   const allProducts = document.getElementsByClassName("product")
  let total = 0
   for(let i= 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
   }

   // ITERATION 3
document.querySelector("#total-value span").innerHTML = total
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;  //.currentTarget is a property from js
  console.log('The target in remove is:', target.parentNode.parentNode); // console.log just to test (won't change anything)
  target.parentNode.parentNode.remove() //parent of button is td and parent of td is tr

  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removedProduct = document.querySelectorAll(".btn-remove")
  // for (let i = 0; i < removedProduct.length; i++ ) {
   //  removedProduct.addEventListener('click', removeProduct);
  
  //... your code goes here

  removedProduct.forEach(product => product.addEventListener('click', removeProduct));  // loop that loops through each removebutton and add and eventListener (listens to the action/event of a 'click') 

});

// event is an action
