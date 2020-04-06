// ITERATION 1


//const product = document.querySelector('.product');

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yay!');
  
  //... your code goes here
  let price = product.querySelector(".price span").innerText;
  console.log("Grabbing price from .price > span in HTML: " + price);
  let quantity = product.querySelector(".quantity input").value;
  console.log("Grabbing quantity from .quantity > span in HTML: " + quantity);
  
  // Calculate sub total
  let subTotal = price * quantity;
  
  // Target sub total
  product.querySelector(".subtotal span").innerText = subTotal;
  console.log("Plugging new subtotals into HTML (price * quantity): " + subTotal);

  // Return sub total
  return subTotal;
  
}

//updateSubtotal();
//calculateAll();


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
let multipleItems = document.getElementsByClassName('product');

let total = 0;

for(let i = 0; i < multipleItems.length; i++){ // For loop to iterate through each product in the HTML.
  // Array multipleItems represents each product i.e., [tr.product1, tr.product2, tr.product3]. [i] therefore
  // represents each individual product in the products array.
  total += updateSubtotal(multipleItems[i]); // <-- For each product (multipleItems[i]), get the subtotal (using updateSubtotal fnctn.) and add it to counter (total).
  console.log("Total: " + total);
}
// const newTotal = document.querySelector('#total-value span');
// newTotal.innerHTML = total;

  // ITERATION 3

document.querySelector("#total-value > span").innerHTML = total; //set the total of each item's subtotals to the overall total in HTML.

}


calculateAll();

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
